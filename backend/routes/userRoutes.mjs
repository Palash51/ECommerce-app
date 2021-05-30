import express from 'express';
import User from '../models/userModels.mjs'
const router = express.Router();

router.get("/createadmin", async (req, res) => {
    try {
        const user = new User({
            "name": "palash",
            "email": "test1@test.com",
            "password": 1234,
            "isAdmin": true
        })

        const newUser = await user.save();
        res.send(newUser)
    } catch (error) {
        res.send({ msg: error.message})
    }
})

export default router;