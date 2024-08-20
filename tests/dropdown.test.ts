import test from "@playwright/test"

test("handlinDropdowns",async({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
    await page.selectOption("#country",
        {
            label: "India"
        }
    )
    await page.waitForTimeout(5000)
})