//@ts-check

import { config } from './config'
import { BasePage } from './base.page'

export class HomePage extends BasePage {

    get loginSection() { return this.page.locator("#login2") }
    get usernameField() { return this.page.locator("#loginusername") }
    get passwordField() { return this.page.locator("#loginpassword") }
    get loginBtn() { return this.page.locator("//button[text()='Log in']") }
    get welcomeTitle() { return this.page.locator("#nameofuser") }

    async goToUrl() {
        await this.goto(config.url.baseURL)
    }

    async login(username: string, password: string) {
        await this.clickElement(this.loginSection)
        await this.clearAndSendKeys(this.usernameField, username)
        await this.clearAndSendKeys(this.passwordField, password)
        await this.clickElement(this.loginBtn)

        await this.waitUntilIsVisible(this.welcomeTitle)
    }

}
