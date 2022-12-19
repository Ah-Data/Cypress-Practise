export class Home{

visitPage(){
    cy.visit("/");
}

    getCountry(name) {
        cy.get("[id='country-name']").contains(name);
    }

    getPackage(price){
        cy.xpath("//div[@id='currency-lite']/b").should('have.text', price);
    }

    getPackageDetails(Details){
        cy.xpath("//div[@id='currency-lite']/i[2]").should('have.text', Details);
    }

    getPackageClassic(price){
        cy.xpath("//div[@id='currency-classic']/b").should('have.text', price);
    }

    getPackageClassicDetails(Details){
        cy.xpath("//div[@id='currency-classic']/i[2]").should('have.text', Details);
    }

    getPackagePremium(price){
        cy.xpath("//div[@id='currency-premium']/b").should('have.text', price);
    }

    getPackagePremiumDetails(Details){
        cy.xpath("//div[@id='currency-premium']/i[2]").should('have.text', Details);
    }

    getgetPackageClassicDetailsBahrain(Details){
        cy.xpath("//div[@id='currency-classic']/i").should('have.text',Details);

    }

    getgetPackageLiteDetailsBahrain(Details){
        cy.xpath("//div[@id='currency-lite']/i").should('have.text',Details);

    }

    getgetPackagePremiunDetailsBahrain(Details){
        cy.xpath("//div[@id='currency-premium']/i").should('have.text',Details);

    }
    
     
    clickOnDropDown(){
        cy.get('[id="arrow"]').click();

    }

    selectBahrain(){
        cy.get('[id="bh-contry-lable"]').click();
    }

    selectKuwait(){
        cy.get('[id="kw-contry-lable"]').click();
    }
    
    
}


