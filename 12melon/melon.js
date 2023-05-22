const { chromium } = require('playwright');
const fs = require('fs/promises');

(async () => {
  try {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.melon.com/chart/index.htm');

    const chartItems = await page.$$('.service_list_song table tbody tr');
    const chartData = [];

    for (const item of chartItems) {
      const rank = await item.$eval('.rank', element => element.innerText);
      const title = await item.$eval('.ellipsis.rank01 span a', element => element.innerText);
      const artist = await item.$eval('.ellipsis.rank02 a', element => element.innerText);
      const album = await item.$eval('.ellipsis.rank03 a', element => element.innerText);

      chartData.push({ rank, title, artist, album });
    }

    await browser.close();

    const jsonData = JSON.stringify(chartData, null, 2);

    await fs.writeFile('melon.json', jsonData, 'utf8');
    console.log('JSON file has been saved.');
  } catch (error) {
    console.error('An error occurred during scraping:', error);
  }
})();