module.exports = {
    launch: {
        headless: true,
        args: [
            "--start-maximized",
            "--no-sandbox",
            "--disable-setuid-sandbox"
        ],
        waitUntil: "networkidle2"
    }
}