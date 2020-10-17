const router = require('express').Router()

const {getUsers} = require("./userModeluserModel")


router.get("/all",  async (req,res,next) => {
    try {
        const users = await getUsers()
        res.status(200).json(users)
    } catch(err){
        next(err)
    }
})

module.exports = router