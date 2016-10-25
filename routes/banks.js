var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");
var db = mongojs('mongodb://cardb:NvIEWzpvuy5JTFIyR46l7JXZJhsV6Cs05H4U8naF37BAhRZ6ewOagmMKEbBJtrcEyyTdmQxlM7nnrzSFZ07msA==@cardb.documents.azure.com:10250/?ssl=true');

// Get All Banks
router.get("/banks", function(req, res, next){
    db.banks.find(function(err, banks){
        if(err){
            res,send(err);
        }
        res.json(banks);
    });
});

// Get Single Bank
router.get("/bank/:id", function(req, res, next){
    db.banks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, bank){
        if(err){
            res.send(err);
        }
        res.json(bank);
    });
});

// Save Bank
router.post("/bank", function(req, res, next){
    var bank = req.body;
    if(!bank.bankName){
        res.status(400);
        res.json({
            error: "Bad Data"
        });
    } else{
        db.banks.save(bank, function(err, bank){
            if(err){
            res.send(err);
        }
        res.json(bank);
        });
    }
});

// Delete Bank
router.delete("/bank/:id", function(req, res, next){
    db.banks.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, bank){
        if(err){
            res.send(err);
        }
        res.json(bank);
    });
});

// Update Bank
router.put("/bank/:id", function(req, res, next){
    var bank = req.body;
    var updBank = {};

    if(bank.bankName){
        updBank.bankName = bank.bankName;
    };

    if(!updBank){
        res.status(400);
        res.json({
            error: "Bad Data"
        });
    } else {
        db.banks.update({_id: mongojs.ObjectId(req.params.id)}, updBank, {}, function(err, bank){
        if(err){
            res.send(err);
        }
        res.json(bank);
    });
    }

    
});

module.exports = router;
