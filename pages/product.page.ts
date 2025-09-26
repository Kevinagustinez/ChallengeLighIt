//@ts-check

import { BasePage } from "./base.page";

export class ProductPage extends BasePage {
    get addToCartBtn() { return this.page.locator(".btn-success.btn-lg") }

    async addProductToCart(product: string) {
        const productItem = this.page.locator(`//a[@class="hrefch" and text()="${product}"]`)

        await this.waitUntilIsVisible(productItem)
        await this.clickElement(productItem)
        await this.clickElement(this.addToCartBtn)
        await this.acceptAlert()
    }

}
