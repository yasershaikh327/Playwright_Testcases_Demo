import {chromium, test} from "@playwright/test"
test("Login Test Demo", async() =>
{
    const browser = await chromium.launch(
    {
        headless:false
    });
    const context = await browser.newContext();
    const page = await context.newPage(); 

    await page.goto("https://localhost:7030/")
    await page.click("//*[@id='navbarNav']/ul/li[3]/a")
    await page.fill("//*[@id='Email']",'syaser327@gmail.com')
    await page.fill('//*[@id="Password"]','Ankola@327')
    await page.click('body > section > div > div > div > div > div > div > div.col-md-10.col-lg-6.col-xl-5.order-2.order-lg-1 > form > center > div > div > button')
    await page.click('#navbarNav > ul > li:nth-child(4) > a')
    await page.click('body > div.swal-overlay.swal-overlay--show-modal > div > div.swal-footer > div:nth-child(2) > button')
    await page.waitForTimeout(3000)
    await page.goto("https://localhost:7030/Home/Contact") 
    await page.fill('//*[@id="Fullname"]','Yaser Shaikh')
    await page.fill('//*[@id="Email"]','syaser327@gmail.com')
    await page.fill('//*[@id="Message"]','Hello Message')
    await page.click('body > section > div > div > div > div > div > div > div.col-md-10.col-lg-6.col-xl-5.order-2.order-lg-1 > form > center > div > div > button')
    await page.waitForTimeout(3000)
})