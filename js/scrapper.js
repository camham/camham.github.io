const puppeteer = require('puppeteer');

async function scrape(url){
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);
	
	
	return page;
}

scrape("https://edhrec.com/commanders/freyalise-llanowars-fury");