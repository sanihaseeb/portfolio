import puppeteer from 'puppeteer'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT = path.join(__dirname, '../client/public/screenshots/skypulse.png')

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] })
const page = await browser.newPage()
await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 2 })

console.log('Loading SkyPulse...')
await page.goto('https://sanihaseeb.github.io/weather-app/', { waitUntil: 'networkidle2', timeout: 30000 })
await new Promise(r => setTimeout(r, 4000))

await page.screenshot({ path: OUT })
console.log('Screenshot saved to', OUT)
await browser.close()
