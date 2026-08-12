import { Page, Locator } from "@playwright/test";
import { BasePage } from "../utils/BasePage.ts";

export class CheckoutPage extends BasePage {

   private addToNewAddressButton: Locator;
   private countryRegion: Locator;
   private fullName: Locator;
   private mobileNo: Locator;
   private streetAddress1: Locator;
   private suiteNumber: Locator;
   private city: Locator;
   private state: Locator;
   private zipcode: Locator;
   private streetAddress2: Locator;

   constructor(page: Page) {
      super(page);
      this.addToNewAddressButton = page.locator("//a[contains(text(),'Add a new delivery addre')]");
      this.countryRegion = page.locator("//select[@name='address-ui-widgets-countryCode']");
      this.fullName = page.locator("//input[@id='address-ui-widgets-enterAddressFullName']");
      this.mobileNo = page.locator("//input[@id='address-ui-widgets-enterAddressPhoneNumber']");
      this.streetAddress1 = page.locator("//input[@id='address-ui-widgets-enterAddressLine1']");
      this.streetAddress2 = page.locator("//input[@id='address-ui-widgets-enterAddressLine2']");
      this.suiteNumber = page.locator("//input[@name='address-ui-widgets-enterAddressLine2']");
      this.city = page.locator("//input[@name='address-ui-widgets-enterAddressCity']");
      this.state = page.locator("//input[@name='address-ui-widgets-enterAddressStateOrRegion']");
      this.zipcode = page.locator("//input[@id='address-ui-widgets-enterAddressPostalCode']");

   }


   async clickOnAddToNewDiliveryAddress() {
      await this.click(this.addToNewAddressButton);
   }

   async selectCountry(value: string) {
      await this.selectOptionByValue(this.countryRegion, value);
   }

   async enterFullName(fullNameValue: string) {
      await this.enterText(this.fullName, fullNameValue);
   }


   async enterMobileNo(mobileNoValue: string) {
      await this.enterText(this.mobileNo, mobileNoValue);
   }

   async enterStreetAddress1(streetAddressValue1: string) {
      await this.enterText(this.streetAddress1, streetAddressValue1);
   }

   async enterStreetAddress2(streetAddressValue2: string) {
      await this.enterText(this.streetAddress2, streetAddressValue2);
   }

   async enterSuiteNumber(suiteNoValue: string) {
      await this.enterText(this.suiteNumber, suiteNoValue);
   }

   async enterCity(cityValue: string) {
      await this.enterText(this.city, cityValue);
   }

   async enterState(stateValue: string) {
      await this.enterText(this.state, stateValue);
   }


   async enterZipCode(zipcodeValue: string) {
      await this.enterText(this.zipcode, zipcodeValue);
   }
}
