"use strict";
// import express from 'express'
// import puppeteer from 'puppeteer'
// const app = express()
// interface Shoe {
// 	productLink: string | null
// 	productImage: string | null
// 	productName: string | null
// }
// const getScrapedData = async () => {
// 	const browser = await puppeteer.launch()
// 	const page = await browser.newPage()
// 	await page.goto(
// 		'https://thesolesupplier.co.uk/release-dates/?sort=release_date_asc',
// 		{
// 			waitUntil: 'networkidle2',
// 		}
// 	)
// 	await page.waitForSelector('.product-result-card')
// 	let shoeObjects = await page.evaluate(() => {
// 		let shoesElements = document.querySelectorAll('.product-result-card')
// 		let shoes: Shoe[] = Object.values(shoesElements).map(shoe => {
// 			return {
// 				productLink: shoe?.querySelector('.card__main-link')?.href ?? null,
// 				productImage:
// 					shoe?.querySelector('.card__main-link > .card__image-link > picture > img')
// 						?.src ?? null,
// 				productName:
// 					shoe?.querySelector('.card__main-link > .card__image-link > picture > img')
// 						?.src ?? null,
// 			}
// 		})
// 		return shoes
// 	})
// 	await browser.close()
// 	return shoeObjects
// }
// app.get('/', async (req, res) => {
// 	try {
// 		getScrapedData()
// 	} catch (e) {
// 		console.log(e)
// 	}
// })
// app.listen(process.env.PORT || 3001, () => {
// 	console.log('server started')
// })
