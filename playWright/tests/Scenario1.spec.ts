import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage.ts";
import scenario1Data from "../testdata/scenario1data.json" with {type: 'json'};
import { SearchResultPage } from "../pages/SearchResultPage.ts";
import { LoginPage } from "../pages/LoginPage.ts";
import { ProductDetailsPage } from "../pages/ProductDetailsPage.ts";
import { CartPage } from "../pages/CartPage.ts";
import { CheckoutPage } from "../pages/CheckoutPage.ts";



test("End-to-End Shopping & Checkout Flow ", async ({ page }) => {

    const homePage: HomePage = new HomePage(page);
    await homePage.opnenBrowser();
    await homePage.clickOnShoppingContinueButton();
    await homePage.clickOnDismissButton();
    await homePage.hoverOnAccountList();
    await homePage.clickOnSignInButton();
    let loginPage: LoginPage = new LoginPage(page);
    await loginPage.enterEmail(scenario1Data.scenario1.email);
    await loginPage.clickOnContinueButton();
    await loginPage.enterPassword(scenario1Data.scenario1.password);
    await loginPage.clickOnSignInButton()
    await homePage.enterProductInSearchBox(scenario1Data.scenario1.productName);
    await page.waitForTimeout(4000);
    await homePage.selectProductFromAutoSuggestion();
    let searchResultPage: SearchResultPage = new SearchResultPage(page);
    await searchResultPage.scrollToProduct();
    await searchResultPage.clickOnProduct();
    let productDetailsPage: ProductDetailsPage = new ProductDetailsPage(page);
    await productDetailsPage.clickOnAddToCartButton();
    let cartPage: CartPage = new CartPage(page);
    await cartPage.clickOnGoToCartButton();
    await expect(cartPage.product).toBeVisible();
    let actProductName: string = await cartPage.verifyProductName();
    expect(actProductName).toContain(scenario1Data.scenario1.addedProductName);
    let actProductCount: string = await cartPage.verifyProductQty();
    expect(actProductCount).toBe(scenario1Data.scenario1.prodQty);
    await cartPage.clickOnProceedToCheckoutBtn();
    let checkOutPage: CheckoutPage = new CheckoutPage(page);
    await checkOutPage.clickOnAddToNewDiliveryAddress();
   // await checkOutPage.selectCountry(scenario1Data.scenario1.countryValue);
    await checkOutPage.enterFullName(scenario1Data.scenario1.fullNameValue);
    await checkOutPage.enterStreetAddress1(scenario1Data.scenario1.streetAddressValue1);
    await checkOutPage.enterStreetAddress2(scenario1Data.scenario1.streetAddressValue2);
    await checkOutPage.enterCity(scenario1Data.scenario1.cityValue);
    // await checkOutPage.enterState(scenario1Data.scenario1.stateValue);
    // await checkOutPage.enterZipCode(scenario1Data.scenario1.zipCode);
    //  await checkOutPage.enterMobileNo(scenario1Data.scenario1.mobileNo);
    await page.pause();





});