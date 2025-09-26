//@ts-check

import { Locator, Page } from "@playwright/test";
import { config } from '../pages/config'

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

    async goToHome() {
        await this.goto(config.url.baseURL)
    }

    async waitUntilIsVisible(locator: Locator) {
        await locator.waitFor({ state: 'visible' })
    }

    async acceptAlert() {
        await Promise.all([
            this.page.waitForEvent('dialog').then(dialog => dialog.accept())
        ]);
    }

}
