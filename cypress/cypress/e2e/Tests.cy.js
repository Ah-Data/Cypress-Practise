///<reference types="cypress" />
import { Home } from "..//Pages/Home";
const home = new Home()
beforeEach(() => {
    
  
  home.visitPage();
})
describe('Saudia Arabia', () => {

  it('Saudi Packages', () => {

    home.getCountry("KSA");
    
    // Lite Package Validation
  
    home.getPackage('15');
    home.getPackageDetails("SAR/month");
    

    // Classic package validation
    home.getPackageClassic('25');
    home.getPackageClassicDetails("SAR/month");
    // Premium package validation
    home.getPackagePremium('60');
    home.getPackagePremiumDetails("SAR/month");
    
  })
})

describe('Bahrain', () => {
  it('Bahrain Packages', () => {
  
    
    home.clickOnDropDown();
    home.selectBahrain();
    home.getCountry("Bahrain");
    
    // Lite Package Validation
    
    home.getPackage('2');
    home.getgetPackageLiteDetailsBahrain("BHD/month");
   

    // Classic package validation
    home.getPackageClassic('3');
    home.getgetPackageClassicDetailsBahrain("BHD/month");
    
    
    // Premium package validation
    home.getPackagePremium('6');
    home.getgetPackagePremiunDetailsBahrain("BHD/month");
    
    
  })
})

describe('Kuwait', () => {
  it('Kuwait Packages', () => {
    home.clickOnDropDown();
    home.selectKuwait();
    home.getCountry("Kuwait");
    
    // Lite Package Validation
    
    home.getPackage('1.2');
    home.getgetPackageLiteDetailsBahrain("KWD/month");
   

    // Classic package validation
    home.getPackageClassic('2.5');
    home.getgetPackageClassicDetailsBahrain("KWD/month");
    
    
    // Premium package validation
    home.getPackagePremium('4.8');
    home.getgetPackagePremiunDetailsBahrain("KWD/month");
    
    
  })
})



