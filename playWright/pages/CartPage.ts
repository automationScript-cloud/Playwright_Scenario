import { Page, Locator } from "@playwright/test";
import { BasePage } from "../utils/BasePage.ts";


export class CartPage extends BasePage {

    private goToCart: Locator;
    readonly product: Locator;
    private productQty:Locator;
    private proceedToCheckoutButton:Locator

    constructor(page: Page) {
        super(page);
        this.goToCart = page.locator("//input[@name='proceedToRetailCheckout']/ancestor::div[@id='sw-atc-actions']//a[contains(text(),'Go to Cart')]");
        this.product = page.locator("//span[contains(text(),'Pyle 6.5 Inch Dual Marine Speakers - 2 Way Waterproof and Weather Resistant Outdoor Audio Stereo Sound System…')]");
        this.productQty=page.locator("//span[@id='sc-subtotal-label-buybox']");
        this.proceedToCheckoutButton=page.locator("//input[@name='proceedToRetailCheckout']");
    }


    async clickOnGoToCartButton() {
        await this.click(this.goToCart);
    }



    async verifyProductName() {
        return await this.getVisibleText(this.product);
    }

    async verifyProductQty(){
        return await this.getVisibleText(this.productQty);
    }

    async clickOnProceedToCheckoutBtn(){
        await this.click(this.proceedToCheckoutButton);
    }
}