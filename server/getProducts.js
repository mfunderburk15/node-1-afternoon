const products = require('../products.json')

module.exports = {
    getProducts: (request, response) => {
        const { price } = request.query

        if (price) {
            const items = products.filter(element => element.price >= parseInt(price))
            return response.status(200).send(products)
        }
        response.status(200).send(products)
    }
}
