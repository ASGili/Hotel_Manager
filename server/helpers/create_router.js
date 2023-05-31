const express = require('express');
const ObjectId = require('mongodb').ObjectId;

const createRouter = (collection)=> {
    const router = express.Router()

    router.get("/", (req,res)=>{
        collection
        .find()
        .toArray()
        .then((docs)=>res.json(docs))
    })

    router.get("/:id", (req,res)=>{
        const id = req.params.id;
        collection.findOne({ _id: new ObjectId(id) })
        .then((doc) => res.json(doc))
    })

    router.post("/", (req,res)=>{
        const newBooking = req.body
        collection.insertOne(newBooking)
        .then(result => res.json(result))
    })

    router.delete("/:id", (req,res)=> {
        const id = req.params.id
        collection.deleteOne({_id: new ObjectId(id)})
        .then(result=> res.json(result))
    })

    router.put("/:id"), (req,res)=> {
        const id = req.params.id
        const updateData = req.body
        collection.updateOne({_id: new ObjectId(id)},{$set: updateData})
        .then(result => res.json(result))
    }
    
    return router
}

module.exports = createRouter