//@ts-check

import { test } from '@playwright/test';
import { HomePage } from '../pages/home.page'
import { config } from '../pages/config'

test('| Login successfully with valid credentials', async ({ page }) => {
  const homePage = new HomePage(page)

  await homePage.goToUrl()
  await homePage.login(config.credentials.username, config.credentials.password)
});
