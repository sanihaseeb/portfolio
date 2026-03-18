import { chromium } from 'playwright'

const BASE = 'https://movr-app.vercel.app'
const browser = await chromium.launch({ headless: true })
const context = await browser.newContext({
  viewport: { width: 1280, height: 800 },
  geolocation: { latitude: 43.6532, longitude: -79.3832 },
  permissions: ['geolocation'],
})
const page = await context.newPage()

page.on('response', async res => {
  if (res.url().includes('/api/movers')) {
    const body = await res.text().catch(() => '')
    console.log('Movers API response:', body.slice(0, 300))
  }
})

await page.goto(`${BASE}/login-client`, { waitUntil: 'networkidle', timeout: 20000 })
await page.fill('input[type="email"]', 'portfolio.demo@movr.dev')
await page.fill('input[placeholder="••••••••"]', 'Demo1234!')
await page.click('button[type="submit"]')
await page.waitForURL(`${BASE}/home`, { timeout: 15000 })
await page.waitForTimeout(4000)

await page.screenshot({ path: '/tmp/movr_home_debug.png', fullPage: false })
console.log('Screenshot saved')
console.log('Page URL:', page.url())
console.log('Page content snippet:', (await page.content()).slice(0, 500))

await browser.close()
