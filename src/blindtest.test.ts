import { PracticePage } from "./PracticePage";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();
const page = new PracticePage(driver);

test("can search stories", async () => {
  await page.navigate();
  await page.searchStories("Test Automation");
  let titles = await page.getStoryTitles();
  expect(titles[0]).toContain("test automation");
});
afterAll(async () => {
  await driver.quit();
});









// import { PracticePage } from "./PracticePage";
// const chromedriver = require("chromedriver");
// import { WebDriver, Builder, Capabilities } from "selenium-webdriver";
// const driver: WebDriver = new Builder()
//   .withCapabilities(Capabilities.chrome())
//   .build();

// const page = new PracticePage(driver);


// test("Tests the practice page", async () => {
//     await page.navigate();
//     await page.searchStories("Kitten");
//     let titles = await page.getStoryTitles();
//     expect(titles[0]).toContain("kitten");
// });


// afterAll(async () => {
//     await driver.quit();
// });