class UserPayer {

    constructor(page, user) {
        this.page = page;
        this.user = user;
    }

    async typeEmail() {
        const selector = ':nth-child(1) > .label-pago > input';
        await this.page.waitForSelector(selector)
        await this.page.type(selector, this.user.email) 
    }

    async typeDocument() {
        const selector = '.xborde > :nth-child(2) > .label-pago > input'
        await this.page.waitForSelector(selector)
        await this.page.type(selector, this.user.document) 
    }

    async typeName() {
        const selector = '.xborde > :nth-child(3) > .label-pago > input'
        await this.page.waitForSelector(selector)
        await this.page.type(selector, this.user.name) 
    }

    async typeLastName() {
        const selector = '.xborde > :nth-child(4) > .label-pago > input' 
        await this.page.waitForSelector(selector)
        await this.page.type(selector, this.user.lastname) 
    }
}

module.exports = UserPayer;