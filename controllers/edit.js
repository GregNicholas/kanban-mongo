const Items = require("../models/Item")

module.exports = {
    getEdit: async (req, res) => {
        const id = req.params.id;
        try {
            const itemToEdit = await Items.findById(id)
            res.render("edit.ejs", {item: itemToEdit, itemId: id})
        }catch(err) {
            if(err) return res.status(500).send(err)
            res.redirect("/")
        }
    },
    deleteItem: async (req, res) => {
        const id = req.params.id
        try{
            await Items.findByIdAndDelete(id)
            res.redirect("back")
        }catch(err){
            if(err) return res.status(500).send(err)
            res.redirect("/")
        }
    },
    updateItem: async (req, res) => {
        console.log(req.body)
        const id = req.params.id
        try{
            await Items.findByIdAndUpdate(id, req.body)
            res.redirect("/")
        }catch(err){
            if(err) return res.status(500).send(err)
            res.redirect("/")
        }
    }
}