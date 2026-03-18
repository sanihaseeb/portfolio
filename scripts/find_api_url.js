import { chromium } from 'playwright'

const browser = await chromium.launch({ headless: false })
const context = await browser.newContext({
  geolocation: { latitude: 43.6532, longitude: -79.3832 },
  permissions: ['geolocation'],
})
const page = await context.newPage()

page.on('request', req => {
  const url = req.url()
  if (url.includes('railway') || url.includes('render') || url.includes('api') || url.includes(':5001') || url.includes(':3001')) {
    console.log('API URL found:', url)
  }
})

await page.goto('https://movr-app.vercel.app/login-client', { waitUntil: 'domcontentloaded', timeout: 20000 })
await page.waitForTimeout(3000)

// Try to fill and submit the form to trigger an API call
await page.fill('input[type="email"]', 'test@test.com').catch(() => {})
await page.fill('input[type="password"]', 'test123').catch(() => {})
await page.click('button[type="submit"]').catch(() => {})
await page.waitForTimeout(3000)

await browser.close()
