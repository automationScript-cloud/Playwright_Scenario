import {Page,Locator} from "@playwright/test";
import { BasePage } from "../utils/BasePage.ts";

export class LoginPage extends BasePage{
 
    private emailBox:Locator;
    private passwordBox:Locator;
    private continueButton:Locator;
    private signInButton:Locator;
    private notNowButton:Locator;
    constructor(page:Page){
        super(page);
        this.emailBox=page.locator("//input[@id='ap_email_login']");
        this.passwordBox=page.locator("//input[@id='ap_password']");
        this.continueButton=page.locator("//input[@class='a-button-input']");
        this.signInButton=page.locator("//input[@id='signInSubmit']");
        this.notNowButton=page.locator("//a[@id='ap-account-fixup-phone-skip-link']");

    }

    async enterEmail(email:string){
        await this.enterText(this.emailBox,email);
    }

    async enterPassword(password:string){
        await this.enterText(this.passwordBox,password);
    }

    async clickOnContinueButton(){
        await this.click(this.continueButton);
    }

    async clickOnSignInButton(){
        await this.click(this.signInButton);
    }

    async clickOnNotNowButton(){
        await this.click(this.notNowButton);
    }

}