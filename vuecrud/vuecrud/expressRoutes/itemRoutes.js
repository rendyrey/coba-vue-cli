var express = require('express');
var app = express();
var itemRoutes = express.Router();

// require item model in our routes module
var Item = require('../models/Item');

// defined store route
itemRoutes.route('/add').post(function(req,res){
    var item = new Item(req.body);
    item.save().then(item => {
        res.status(200).json({'item':'Item added successfully'});
    })
    .catch(err => {
        res.status(400).send('Unable to save to database');
    })
});

// defined get data(index or listing) routes
itemRoutes.route('/').get(function(req,res){
    Item.find(function(err,items){
        if(err){
            console.log(err);
        }else{
            res.json(items);
        }
    });
});

// defined edit route
itemRoutes.route('/edit/:id').get(function(req,res){
    var id = req.params.id;
    Item.findById(id,function(err,item){
        res.json(item);
    });
});

// defined update route
itemRoutes.route('/update/:id').post(function(req,res){
    Item.findById(req.params.id,function(err,item){
        if(!item){
            return next(new Error('Could not load Document'));
        }else{
            item.name = req.body.name;
            item.price = req.body.price;
            item.save().then(item => {
                res.json('Update complete');
            })
            .catch(err => {
                res.status(400).send("Unable to update the database");
            });
        }
    });
});

// defined delete | remove | destroy route
itemRoutes.route('/delete/:id').get(function(req,res){
    Item.findByIdAndRemove({_id:req.params.id},function(err,item){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = itemRoutes;