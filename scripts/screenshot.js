import puppeteer from 'puppeteer'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT = path.join(__dirname, '../client/public/screenshots')

const targets = [
  { name: 'skypulse',   url: 'https://sanihaseeb.github.io/weather-app/', delay: 3000 },
  { name: 'stockpulse', url: 'http://localhost:5173/',                     delay: 2000 },
  { name: 'chatapp',    url: 'http://localhost:3002/',                     delay: 2000 },
]

const browser = await puppeteer.launch({ headless: 'new' })

for (const { name, url, delay } of targets) {
  console.log(`📸 Screenshotting ${name} at ${url}…`)
  try {
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 2 })
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 15000 })
    await new Promise(r => setTimeout(r, delay))
    await page.screenshot({ path: `${OUT}/${name}.png` })
    await page.close()
    console.log(`  ✓ Saved ${name}.png`)
  } catch (err) {
    console.error(`  ✗ Failed: ${err.message}`)
  }
}

await browser.close()
console.log('\nDone.')
