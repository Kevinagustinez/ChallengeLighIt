//@ts-check

import { Locator, Page } from "@playwright/test";

export class BasePage {

    constructor(public page: Page) { }

    async goto(url: string) {
        await this.page.goto(url)
    }

    async clickElement(locator: Locator) {
        await locator.click()
    }

    async clearAndSendKeys(locator: Locator, value: string) {
        await locator.clear()
        await locator.fill(value)
    }

}
