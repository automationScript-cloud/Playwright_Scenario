import {Page,Locator} from "@playwright/test";
import { BasePage } from "../utils/BasePage.ts";

export class SearchResultPage extends BasePage{

    private firstProduct:Locator;

    constructor(page:Page){
     super(page)
     this.firstProduct=page.locator("//span[text()='4,098']/ancestor::div[@class='puisg-row']/preceding-sibling::div[contains(@class,'a-section a-spacing-none p')]//span[text()='Pyle 6.5 Inch Dual Marine Speakers - 2 Way Waterproof and Weather Resistant Outdoor Audio Stereo Sound System with 200 Watt Power, Poly Carbon Cone and Butyl Rubber Surround - 1 Pair (White)']").first();
    }


    async clickOnProduct(){
       await this.click(this.firstProduct);
    }

    async scrollToProduct(){
        await this.scrollToModule(this.firstProduct);
    }

}