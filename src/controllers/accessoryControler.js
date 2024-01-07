const router = require('express').Router();

const accessoryMenager = require('../managers/accessoryMeneger');

router.get('/create', (req, res) => {
    res.render('accessory/create');
});

router.post('/create', async (req, res) =>{
    const { name, description, imageUrl } = req.body;

    await accessoryMenager.create({name, description, imageUrl});

    res.redirect('/');
});

module.exports = router;