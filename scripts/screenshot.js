import puppeteer from 'puppeteer'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT = path.join(__dirname, '../client/public/screenshots')

const browser = await puppeteer.launch({ headless: 'new' })

// ─── SkyPulse ────────────────────────────────────────────────
console.log('📸 SkyPulse…')
{
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 2 })
  await page.goto('https://sanihaseeb.github.io/weather-app/', { waitUntil: 'networkidle2', timeout: 20000 })
  await new Promise(r => setTimeout(r, 3000))
  await page.screenshot({ path: `${OUT}/skypulse.png` })
  await page.close()
  console.log('  ✓ skypulse.png')
}

// ─── StockPulse — search and select AAPL ─────────────────────
console.log('📸 StockPulse…')
{
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 2 })
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2', timeout: 15000 })
  await new Promise(r => setTimeout(r, 2000))

  // Type AAPL in the search box
  await page.click('input[placeholder="Search stocks..."]')
  await page.type('input[placeholder="Search stocks..."]', 'AAPL', { delay: 80 })
  await new Promise(r => setTimeout(r, 1500))

  // Click first result
  const clicked = await page.evaluate(() => {
    const items = document.querySelectorAll('li, [class*="result"], [class*="suggestion"], [class*="item"], [class*="option"]')
    for (const el of items) {
      if (el.innerText?.includes('AAPL') || el.innerText?.includes('Apple')) {
        el.click()
        return true
      }
    }
    // fallback: press Enter
    return false
  })

  if (!clicked) await page.keyboard.press('Enter')
  await new Promise(r => setTimeout(r, 2500))
  await page.screenshot({ path: `${OUT}/stockpulse.png` })
  await page.close()
  console.log('  ✓ stockpulse.png')
}

// ─── ChatApp — login as sani, start a DM with alex, send messages ──
console.log('📸 ChatApp…')
{
  // First session: sani logs in, sends messages to #general
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 2 })
  await page.goto('http://localhost:3002/', { waitUntil: 'networkidle2', timeout: 15000 })
  await new Promise(r => setTimeout(r, 1500))

  // Log in as sani
  await page.type('input[placeholder="Enter username"]', 'sani')
  await page.type('input[placeholder="Enter password"]', 'password123')
  await page.click('button[type="submit"]')
  await new Promise(r => setTimeout(r, 2000))

  // Send messages to #general
  const messages = [
    'Hey everyone! 👋',
    'Just shipped the new portfolio site',
    'Built with React + Node.js — check it out!',
  ]
  for (const msg of messages) {
    const input = await page.$('input[placeholder*="message"], input[placeholder*="Message"], textarea[placeholder*="message"]')
    if (input) {
      await input.click()
      await input.type(msg, { delay: 40 })
      await page.keyboard.press('Enter')
      await new Promise(r => setTimeout(r, 600))
    }
  }

  // Also open DM with alex and send a message
  await page.evaluate(() => {
    const els = [...document.querySelectorAll('*')]
    const alexEl = els.find(el => el.innerText?.trim() === 'alex' && el.children.length === 0)
    if (alexEl) alexEl.click()
  })
  await new Promise(r => setTimeout(r, 1000))

  const dmInput = await page.$('input[placeholder*="message"], input[placeholder*="Message"], textarea[placeholder*="message"]')
  if (dmInput) {
    await dmInput.type('Hey Alex, can you review my PR?', { delay: 40 })
    await page.keyboard.press('Enter')
    await new Promise(r => setTimeout(r, 500))
  }

  // Go back to #general for the final screenshot
  await page.evaluate(() => {
    const els = [...document.querySelectorAll('*')]
    const general = els.find(el => el.innerText?.includes('#general') && el.children.length < 3)
    if (general) general.click()
  })
  await new Promise(r => setTimeout(r, 1000))

  await page.screenshot({ path: `${OUT}/chatapp.png` })
  await page.close()
  console.log('  ✓ chatapp.png')
}

await browser.close()
console.log('\nAll done.')
