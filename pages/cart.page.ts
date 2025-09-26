//@ts-check

import { BasePage } from "./base.page";
import { config } from "./config";

export class CartPage extends BasePage {

    get orderBtn() { return this.page.locator(".btn-success") }
    get nameField() { return this.page.locator("#name") }
    get countryField() { return this.page.locator("#country") }
    get cityField() { return this.page.locator("#city") }
    get creditCardField() { return this.page.locator("#card") }
    get monthCardExpField() { return this.page.locator("#month") }
    get yearCardExpField() { return this.page.locator("#year") }
    get purchaseBtn() { return this.page.locator("//button[text()='Purchase']") }
    get purchaseCompleteTitle() { return this.page.locator("//h2[text()='Thank you for your purchase!']") }


    async goToUrl() {
        await this.goto(config.url.cartPage)
    }

    async verifyProductAddToCart(product: string) {
        const productAdd = this.page.locator(`//tbody[@id='tbodyid'] //td[text()='${product}']`)

        await this.waitUntilIsVisible(productAdd)

        if (await productAdd.isVisible()) {
            return true
        } else {
            console.log(`&& Producto no encontrado && ${productAdd}`)
            return false
        }
    }

    async purchaseItems(product: string) {
        const productAdd = this.page.locator(`//tbody[@id='tbodyid'] //td[text()='${product}']`)

        await this.waitUntilIsVisible(productAdd)
        await this.clickElement(this.orderBtn)

        await this.clearAndSendKeys(this.nameField, config.formData.name)
        await this.clearAndSendKeys(this.countryField, config.formData.country)
        await this.clearAndSendKeys(this.cityField, config.formData.city)
        await this.clearAndSendKeys(this.creditCardField, config.formData.creditCardNumber)
        await this.clearAndSendKeys(this.monthCardExpField, config.formData.monthExpiration)
        await this.clearAndSendKeys(this.yearCardExpField, config.formData.yearExpiration)

        await this.clickElement(this.purchaseBtn)
    }
}
