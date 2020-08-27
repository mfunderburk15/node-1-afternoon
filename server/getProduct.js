const getProduct = require('../products.json')

module.exports = {
    getProduct: (request, response) => {
        const { id } = request.params
        console.log(id)

        const item = getProduct.find(element => element.id === parseInt(id))

        if (!item) {
            return response.status(500).send('Item is not in list')
        }
        response.status(200).send(item)
    }
}