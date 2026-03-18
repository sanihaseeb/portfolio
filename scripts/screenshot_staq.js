import puppeteer from 'puppeteer'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT = path.join(__dirname, '../client/public/screenshots/stockpulse.png')

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] })
const page = await browser.newPage()
await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 2 })

console.log('Loading Staq...')
await page.goto('https://sanihaseeb.github.io/stock-app/', { waitUntil: 'networkidle2', timeout: 30000 })

// Wait until AAPL price data actually loads (not just skeleton)
console.log('Waiting for data to load...')
await page.waitForFunction(
  () => document.body.innerText.includes('$') && document.body.innerText.includes('AAPL'),
  { timeout: 30000 }
)
await new Promise(r => setTimeout(r, 2000))

// Click AAPL card directly at its visual position in the watchlist
console.log('Clicking AAPL card...')
await page.mouse.click(150, 245)
await new Promise(r => setTimeout(r, 1000))
// If chart didn't open, try clicking "View Top Stock"
const hasChart = await page.evaluate(() => document.body.innerText.includes('Apple'))
if (!hasChart) {
  console.log('Fallback: View Top Stock')
  await page.evaluate(() => {
    const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('View Top Stock'))
    if (btn) btn.click()
  })
}

// Wait for chart to render
await new Promise(r => setTimeout(r, 4000))

await page.screenshot({ path: OUT })
console.log('Screenshot saved to', OUT)
await browser.close()
