import test, { expect } from "@playwright/test"

test("handlin-Frames",async({ page }) => {
 await page.goto("https://letcode.in/frame");
 const allframes = page.frames();
 console.log("No of Frames: "+ allframes.length);

 const MyFrame = page.frameLocator("#firstFr")
 await MyFrame.locator("input[name='fname']").fill("Yaser")
 await MyFrame.locator("input[name='lname']").fill("Shaikh")


 const innerFrame = MyFrame.frameLocator("iframe[src='innerFrame']")
 await innerFrame.locator("input[name='email']").fill("syaser327@gmail.com")

 await MyFrame.locator("input[name='fname']").fill("letcode");



//  await MyFrame?.fill("input[name='fname']","Yaser")
//  await MyFrame?.fill("input[name='lname']","Shaikh")

//  const frame = page.frameLocator("#firstFr")
//  await frame.locator("Input")
// expect(await MyFrame?.locator("p.has-text-info").textContent()).toContain("You have")


 await page.waitForTimeout(5000)
})