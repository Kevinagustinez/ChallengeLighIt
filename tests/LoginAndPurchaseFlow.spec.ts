//@ts-check

import { test, expect } from '../fixtures/test.fixtures';
import { config } from '../pages/config'


test.describe('| Verify login and complete a flow of purchase', () => {

  const username = config.credentials.username
  const password = config.credentials.password
  const samsungS6 = config.products.samsungS6

  test('| Login successfully with valid credentials', async ({ homePage, basePage }) => {
    await basePage.goToHome()
    await homePage.login(username, password)
    expect(homePage.welcomeTitle).toContainText(username)
  })

  test('| Add one product to the cart', async ({ productPage, basePage, cartPage }) => {
    await basePage.goToHome()
    await productPage.addProductToCart(samsungS6)

    await cartPage.goToUrl()
    expect(await cartPage.verifyProductAddToCart(samsungS6)).toBe(true)
  })

  test('| Complete the purchase and verify the receipt', async ({ basePage, cartPage, productPage }) => {
    await basePage.goToHome()

    await productPage.addProductToCart(samsungS6)
    await cartPage.goToUrl()
    await cartPage.purchaseItems(samsungS6)

    expect(cartPage.purchaseCompleteTitle).toBeVisible()
  })

})
