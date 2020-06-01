const puppeteer = require('puppeteer')

const UserPayer = require('../shared/models/user/user-payer')
const UserDelivery = require('../shared/models/user/user-delivery')

const juanito = require('../shared/models/user/juanito.json');

describe("should buy product", () => {
    const navigationPromise = null;
    const path_screenshoot = './screenshot/buy-article'
    beforeAll(async () => {
        // navigationPromise = page.waitForNavigation()
        await page.goto(URL)
        await page.setViewport({ width: 1600, height: 1200 })
        await page.screenshot({ path: `${path_screenshoot}/produtcs.png` })
    })

    it("should chose product", async () => {
        await page.waitForSelector('.row > .column:nth-child(2) > .xcard > .text-center > img')
        await page.click('.row > .column:nth-child(2) > .xcard > .text-center > img')
        // await page.waitForNavigation()
    })

    it("should clicked Comprar ahora", async () => {
        await page.waitForSelector('.column > .row > .column > .button-prid > .button')
        await page.click('.column > .row > .column > .button-prid > .button')
        // await page.waitForNavigation()
    })

    it('should full user payer', async () => {
        const userPayer = new UserPayer(page, juanito.payer);
        await userPayer.typeEmail()
        await userPayer.typeDocument()
        await userPayer.typeName()
        await userPayer.typeLastName()
        await page.screenshot({ path: `${path_screenshoot}/full-user-payer.png` })
    })

    it('should full user delivery', async () => {
        const userDelivery = new UserDelivery(page, juanito.delivery);
        await userDelivery.selectDeparment()
        await userDelivery.selectCity()
        await userDelivery.typeAddress()
        await userDelivery.typePhone()
        await page.screenshot({ path: `${path_screenshoot}/full-user-delivery.png` })
    })

    it('shoud confirm pay', async () => {
        await page.click('.xresumen > a.button.btn-finalizar-compra')
        // await page.waitForNavigation()
    })

    it('choose payment method', async () => {
        await this.page.waitFor(1500);
        await page.waitForSelector('.grid-x > .cell:nth-child(3) > .el-radio > .el-radio__input > .el-radio__inner')
        await page.click('.grid-x > .cell:nth-child(3) > .el-radio > .el-radio__input > .el-radio__inner')
        await page.screenshot({ path: `${path_screenshoot}/payment-method.png` })
    })
})