import {expect, test} from "@playwright/test"

test("", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
    const messageInput = page.locator("//*[@id='Email']");
    const messageInput1 = page.locator("//*[@id='Password']");
    const button = page.locator("body > section > div > div > div > div > div > div > div.col-md-10.col-lg-6.col-xl-5.order-2.order-lg-1 > form > center > div > div > button");
    console.log(await messageInput.getAttribute("placeholder"));
    expect(messageInput).toHaveAttribute("placeholder","Email")
    expect(messageInput1).toHaveAttribute("placeholder","Password")
    console.log(await messageInput.inputValue());
    await messageInput.type("syaser327@gmail.com");
    await messageInput1.type("Ankola@327");
    button.click();

    await page.waitForTimeout(3000)

    
})

 test("CheckboxChecks", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
    const singlecheckbox = page.locator("//*[@id='isAgeSelected']")
    expect(singlecheckbox).not.toBeChecked();
    await singlecheckbox.check();
    expect(singlecheckbox).toBeChecked();
    await page.waitForTimeout(3000)
 })