const express = require('express');
const router = express.Router();
const adminLayouts = '../views/layouts/admin'



router.get('/dashboard', async(req, res) => {
    try{
        res.render('admin/dashboard', {layout: adminLayouts});
    }catch(error){
        console.log(error);
    }
});



module.exports = router;