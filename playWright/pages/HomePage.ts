import { Page, Locator } from "@playwright/test";
import { BasePage } from "../utils/BasePage.ts";



export class HomePage extends BasePage {
    readonly shoppingContinueButton: Locator;
    private country: Locator;
    private searchBox: Locator;
    private productOption: Locator;
    private accountList: Locator;
    private signInButton: Locator;
    private dismissButton: Locator;



    constructor(page: Page) {
        super(page)
        this.shoppingContinueButton = page.locator("//button[text()='Continue shopping']");
        this.searchBox = page.locator("//input[@id='twotabsearchtextbox']");
        this.productOption = page.locator("//div[@id='sac-autocomplete-results-container']//div[@id='sac-suggestion-row-2']");
        this.accountList = page.locator("//div[@id='nav-link-accountList']//a[@class='nav-a nav-a-2   nav-progressive-attribute']");
        this.signInButton = page.locator("//div[@id='nav-flyout-accountList']//span[text()='Sign in']");
        this.dismissButton = page.locator("//span[contains(text(),'Dismiss')]");
        this.country = page.locator("//span[@class='icp-nav-flag icp-nav-flag-us icp-nav-flag-lop']");
    }

    async opnenBrowser() {
        await this.hitUrl("https://www.amazon.com/");
    }



    async clickOnShoppingContinueButton() {
        try {
            await this.shoppingContinueButton.waitFor({ state: 'visible', timeout: 5000 });
            await this.click(this.shoppingContinueButton);
        } catch (error) {
            console.log("Shopping Continue button is not displayed.");
        }
    }






    async enterProductInSearchBox(product: string) {
        await this.enterText(this.searchBox, product)
    }

    async selectProductFromAutoSuggestion() {
        await this.click(this.productOption);
    }

    async hoverOnAccountList() {
        await this.hover(this.accountList);
    }

    async clickOnSignInButton() {
        await this.click(this.signInButton);
    }

    async clickOnDismissButton() {
        try {
            this.dismissButton.waitFor({ state: "visible", timeout: 5000 })
            await this.clickForcely(this.dismissButton);
        } catch (error) {
            console.log("Dismiss button is not displayed")
        }
    }

    async hoverOnCountryIcon() {
        await this.hover(this.country);
    }




}