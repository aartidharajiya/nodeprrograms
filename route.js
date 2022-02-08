var express=require('express');
var router=express.Router();
var bodyparser =require('body-parser')
var Product=require('./model/product');
//empty array
router.get("/products",async(req,res)=>{

    const iproducts=await Product.find();
    res.send(iproducts);
    console.log(iproducts);
})
// POST method used for inserting data in database through api
router.post('/products',async(req,res)=>{
    const iproducts = new Product({
        name : req.body.name,
        price:req.body.price,
        rating:req.body.rating
    })
    await iproducts.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else
        {
            res.status(200).json({
                "message":msg
            })
            
        }
    })
})

// api for updating data in database using patch method

router.patch('/products/:name',async (req,res)=>{
    const iproduct = await Product.findOne({_id:req.params.name})
    iproduct.name = req.body.name
    iproduct.rating = req.body.rating
    iproduct.price = req.body.price
    await iproduct.save((err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }
    })

})

//delete api

router.delete("/products/:name",async(req,res)=>{
    await Product.deleteOne({name:req.params.name},(err,msg)=>{
    //   const imovie = await Movie.deleteOne({name:req.params.name});
    //     if(imovie.deletedCount==1)
    //     {
    //         res.status(200).json({
    //             "msg":"Successfully deleted"
    //         })
    //  }
    //     else
    // {
    //         res.status(500).json({
    //             "msg":"Failed For delete"
    //         })
    //  }

        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }

    })
})

module.exports=router;