class UserDelivery {

    constructor(page, delivery) {
        this.page = page;
        this.delivery = delivery;
    }

    async selectDeparment() {
        console.log(this.delivery);
        const selector = '.xborde2 > :nth-child(1) > select'
        await this.page.waitForSelector(selector)
        await this.page.select(selector, this.delivery.department) 
        await this.page.waitFor(1500);
    }

    async selectCity() {
        const selector = '.xborde2 > :nth-child(2) > select'
        await this.page.waitForSelector(selector)
        await this.page.select(selector, this.delivery.city) 
        await this.page.waitFor(1500);
    }

    async typeAddress() {
        const selector = '.txndireccion'
        await this.page.waitForSelector(selector)
        await this.page.type(selector, this.delivery.address) 
    }

    async typePhone() {
        const selector = '.xborde2 > :nth-child(4) .label-pago > input'
        await this.page.waitForSelector(selector)
        await this.page.type(selector, this.delivery.phone) 
    }
}

module.exports = UserDelivery;