import { Console } from 'console'
import express from 'express'
import puppeteer from 'puppeteer'

const app = express()

app.get('/', async (req, res) => {
	try {
		const browser = await puppeteer.launch()
		const page = await browser.newPage()
		await page.goto('https://thesolesupplier.co.uk/release-dates/', {
			waitUntil: 'networkidle2',
		})

		const shoesGrid = await page.evaluate(() => {
			let shoes = Array.from(document.querySelectorAll('.product-result-card'))
			return shoes.map(shoe => shoe)
		})
		console.log(shoesGrid)

		await browser.close()
	} catch (e) {
		console.log(e)
	}
})

app.listen(process.env.PORT || 3001, () => {
	console.log('server started')
})
