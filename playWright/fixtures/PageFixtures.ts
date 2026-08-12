import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.ts";
import { HomePage } from "../pages/HomePage.ts";
import { SearchResultPage } from "../pages/SearchResultPage.ts";
import { ProductDetailsPage } from "../pages/ProductDetailsPage.ts";
import { CartPage } from "../pages/CartPage.ts";
import { CheckoutPage } from "../pages/CheckoutPage.ts";



type PageFixtures = {
    loginPage: LoginPage,
    homePage: HomePage,
    searchResultPage: SearchResultPage,
    productDetailsPage: ProductDetailsPage,
    cartPage: CartPage,
    checkoutPage: CheckoutPage
}


const test = base.extend<PageFixtures>({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    searchResultPage: async ({ page }, use) => {
        await use(new SearchResultPage(page));
    },

    productDetailsPage: async ({ page }, use) => {
        await use(new ProductDetailsPage(page));
    },

    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },

    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page));
    }



})