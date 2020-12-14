import { By, until, WebDriver } from "selenium-webdriver";

// Setting up the Page Object
// The test looks like it is searching 
// for purple, so we are going to google
// the strin "purple" here.

export class SpecPage{
    driver: WebDriver;
    url: string = "https://www.google.com/";
    // Identify locators needed on the page
    searchInput: By = By.xpath('//input[@title="Search"]');
    searchButton: By = By.xpath('//div[@class="FPdoLc tfB0Bf"]/center/input[@value="Google Search"]');
    searchResults: By = By.xpath('//div[@id="res"]');
    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    async navigate() {
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.searchInput));
    }

    async doSearch(text: string) {
        await this.driver.findElement(this.searchInput).sendKeys(text);
        await (await this.driver.findElement(this.searchButton)).click();
    }

    async getText(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return (await this.driver.findElement(elementBy)).getText();
    }

    async getResults() {
        return this.getText(this.searchResults);
    }
};
