import { Page, Locator } from "@playwright/test";
import { BasePage } from "../utils/BasePage.ts";


export class ProductDetailsPage extends BasePage {

    private addToCart: Locator;


    constructor(page: Page) {
        super(page);
        this.addToCart = page.locator("//input[@id='add-to-cart-button']");

    }

    async clickOnAddToCartButton() {
        await this.click(this.addToCart);
    }
    

    


}