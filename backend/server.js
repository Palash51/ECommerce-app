// import  data  from './data'


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
            numReviews: 10
        },
        {
            _id: '2',
            name: 'Fit Shirts',
            category: 'Shirts',
            image: '/images/d1.jpg',
            price: 50,
            brand: 'Nike',
            rating: 4.0,
            numReviews: 10
        },
        {
            _id: '3',
            name: 'Best Pants',
            category: 'Pants',
            image: '/images/d1.jpg',
            price: 70,
            brand: 'Nike',
            rating: 3.5,
            numReviews: 8
        },
]
}

var express = require("express");
const app = express()

app.get("/api/products", (req, res) =>{
    res.send(data.products)
})

app.listen(5000, () => {console.log("Server started at http://localhost:5000") })
