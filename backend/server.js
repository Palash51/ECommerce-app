const data = {
    products: [
        {
            _id: '1',
            name: 'Slim Shirts',
            category: 'Shirts',
            image: '/images/d1.jpg',
            price: 60,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 6
        },
        {
            _id: '2',
            name: 'Fit Shirts',
            category: 'Shirts',
            image: '/images/d1.jpg',
            price: 50,
            brand: 'Nike',
            rating: 4.0,
            numReviews: 10,
            countInStock: 4
        },
        {
            _id: '3',
            name: 'Best Pants',
            category: 'Pants',
            image: '/images/d1.jpg',
            price: 70,
            brand: 'Nike',
            rating: 3.5,
            numReviews: 8,
            countInStock: 0
        },
]
}

var express = require("express");
const app = express()

app.post("/api/products", (req, res) =>{
    res.send(data.products)
})

app.post("/api/products/:id", (req, res) =>{
    const productId = req.params.id;
    const product = data.products.find(x => x._id === productId);
    product ? res.send(product) : res.status(404).send({ msg : "Product Not Found." })
    
})

app.listen(5000, () => {console.log("Server started at http://localhost:5000") })
