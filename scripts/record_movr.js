import { chromium } from 'playwright'
import { execSync } from 'child_process'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_DIR = path.join(__dirname, '../client/public/videos')
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })

const BASE = 'https://movr-app.vercel.app'
const CLIENT_EMAIL = 'portfolio.demo@movr.dev'
const CLIENT_PASSWORD = 'Demo1234!'
const MOVER_EMAIL = 'alex.rivera.movr@gmail.com'
const MOVER_PASSWORD = 'Demo1234!'

const browser = await chromium.launch({ headless: true })

// ── PART 1: Mover side — Alex Rivera logs in and goes online ─────────────────
console.log('Part 1: Mover login + going online...')
const moverContext = await browser.newContext({
  viewport: { width: 1280, height: 800 },
  deviceScaleFactor: 1,
  geolocation: { latitude: 43.6532, longitude: -79.3832 },
  permissions: ['geolocation'],
  recordVideo: { dir: OUT_DIR, size: { width: 1280, height: 800 } },
})

const moverPage = await moverContext.newPage()

await moverPage.goto(`${BASE}/login-mover`, { waitUntil: 'networkidle', timeout: 30000 })
await moverPage.waitForTimeout(800)

await moverPage.fill('input[type="email"]', MOVER_EMAIL)
await moverPage.waitForTimeout(400)
await moverPage.fill('input[placeholder="••••••••"]', MOVER_PASSWORD)
await moverPage.waitForTimeout(500)
await moverPage.click('button[type="submit"]')

await moverPage.waitForURL(`${BASE}/mover/home`, { timeout: 15000 })
await moverPage.waitForTimeout(3000)

// Toggle availability ON
console.log('Toggling availability ON...')
const isOffline = await moverPage.evaluate(() => document.body.innerText.includes('Offline'))
if (isOffline) {
  await moverPage.locator('button.relative.inline-flex').click()
  await moverPage.waitForTimeout(2500)
}

// Show stats and dashboard
await moverPage.evaluate(() => window.scrollTo({ top: 250, behavior: 'smooth' }))
await moverPage.waitForTimeout(2500)

// Click Profile to show mover profile page
await moverPage.click('a:has-text("Profile")')
await moverPage.waitForTimeout(2500)
await moverPage.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }))
await moverPage.waitForTimeout(2000)

const moverVideo = moverPage.video()
const moverVideoPath1 = await moverVideo.path()
await moverContext.close()
const moverVideoPath = await moverVideo.path()
console.log('Mover video:', moverVideoPath)

// ── PART 2: Client side — Marcus Reid finds Alex Rivera ──────────────────────
console.log('Part 2: Client login + finding mover...')
const clientContext = await browser.newContext({
  viewport: { width: 1280, height: 800 },
  deviceScaleFactor: 1,
  geolocation: { latitude: 43.6532, longitude: -79.3832 },
  permissions: ['geolocation'],
  recordVideo: { dir: OUT_DIR, size: { width: 1280, height: 800 } },
})

const clientPage = await clientContext.newPage()

await clientPage.goto(`${BASE}/login-client`, { waitUntil: 'networkidle', timeout: 30000 })
await clientPage.waitForTimeout(800)

await clientPage.fill('input[type="email"]', CLIENT_EMAIL)
await clientPage.waitForTimeout(400)
await clientPage.fill('input[placeholder="••••••••"]', CLIENT_PASSWORD)
await clientPage.waitForTimeout(500)
await clientPage.click('button[type="submit"]')

await clientPage.waitForURL(`${BASE}/home`, { timeout: 15000 })
await clientPage.waitForTimeout(4500)

// Show the full map with "1 mover available near you" badge
await clientPage.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }))
await clientPage.waitForTimeout(2500)

// Scroll to movers list
await clientPage.evaluate(() => window.scrollTo({ top: 350, behavior: 'smooth' }))
await clientPage.waitForTimeout(2500)

// Wait for Alex Rivera card and linger on it
await clientPage.waitForSelector('text=Alex Rivera', { timeout: 10000 })
await clientPage.locator('text=Alex Rivera').first().hover()
await clientPage.waitForTimeout(3500)

console.log('Client part done.')

const clientVideo = clientPage.video()
await clientContext.close()
const clientVideoPath = await clientVideo.path()
console.log('Client video:', clientVideoPath)

await browser.close()

// ── Concatenate with ffmpeg ──────────────────────────────────────────────────
console.log('Concatenating videos...')
const dest = path.join(OUT_DIR, 'movr.webm')
const listFile = path.join(OUT_DIR, '_concat.txt')
fs.writeFileSync(listFile, `file '${moverVideoPath}'\nfile '${clientVideoPath}'\n`)

if (fs.existsSync(dest)) fs.unlinkSync(dest)
execSync(`ffmpeg -f concat -safe 0 -i "${listFile}" -c:v libvpx -b:v 1M -auto-alt-ref 0 "${dest}"`, { stdio: 'inherit' })
fs.unlinkSync(listFile)

console.log('Video saved to', dest)
