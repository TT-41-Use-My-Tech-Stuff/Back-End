const router = require('express').Router()
const knex = require("knex")
const config = require("../knexfile")
const {getRentals, getRental, updateRental, removeRental, postRental} = require("../user-rentals/userRentalsModel")
const authenticate = require('../auth/authMiddleware')


router.get("/",  authenticate(), async (req,res) => {
    try {
        const rentals = await getRentals()
        res.status(200).json(rentals)
    } catch{
        res.status(500).json({ message: 'Could not retrieve the list of rentals' }); 
    }
})
router.get('/:id', authenticate(), async(req, res) => {
    try {
        const id = Number(req.params.id)
        const rental = await getRental(id)
        res.status(200).json(rental)

    } catch {
        res.status(404).json({ message: 'Rental not found' })
    }
})
router.put('/edit/:id', authenticate(), async (req, res) => {
    try{
        const id = Number(req.params.id)
        const changes = req.body
        const update = await updateRental(id, changes)
        res.status(200).json({message: "rental successfully updated!"})

    } catch(err){
        res.status(500).json({message: 'Could not update the account'});
    }
})
router.post('/add', authenticate(), async (req, res) => {
    try {
        if (req.body){
            const {user_id,item_name,item_description,img_url,category,rate} = req.body
            const rental = {user_id,item_name,item_description,img_url,category,rate}
            await postRental(rental)
            res.status(201).json({message: "rental added successfully"})
        }

    } catch (err){
        res.status(500).json({message: err});
        
    }

})
router.delete('/delete/:id', authenticate(), async(req, res) => {
    
    try {
        const id = Number(req.params.id)
        const removal = await removeRental(id)
        res.status(200).json({ message: `Rental with id of ${id} deleted!` });  
    }
    catch{
        res.status(500).json({ message: 'Could not remove the Rental' });
    }

})


module.exports = router