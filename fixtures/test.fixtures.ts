//@ts-check

import { test as base } from '@playwright/test'
import { HomePage } from '../pages/home.page'
import { BasePage } from '../pages/base.page'
import { ProductPage } from '../pages/product.page'
import { CartPage } from '../pages/cart.page'

type Pages = {
    homePage: HomePage
    basePage: BasePage
    productPage: ProductPage
    cartPage: CartPage
}

export const test = base.extend<Pages>({
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page)
        await use(homePage)
    },

    basePage: async ({ page }, use) => {
        const basePage = new BasePage(page)
        await use(basePage)
    },

    productPage: async ({ page }, use) => {
        const productPage = new ProductPage(page)
        await use(productPage)
    },

    cartPage: async ({ page }, use) => {
        const cartPage = new CartPage(page)
        await use(cartPage)
    },


})

export { expect } from '@playwright/test'
