const express= require('express')
const router = express.Router()

// @desk login/landingpage
//@route GET /
router.get("/", function (req,res){
    res.render('login')
})

// @desk login/Dashboard
//@route GET /Dashboard
router.get("/dashboard",(req,res)=>{
    res.render('dashboard')
})

module.exports = router
  