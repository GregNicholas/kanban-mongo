const Items = require("../models/Item")

module.exports = {
    getIndex: async (req, res) => {
        try {
            const items = await Items.find()
            res.render("index.ejs", {itemList: items})
        }catch(err) {
            return res.status(500).send(err)
        }
    },
    createItem: async (req, res) => {
        const newItem = new Items(
            {
                nameInput: req.body.nameInput,
                qtyInput: req.body.qtyInput,
                description: req.body.description
            }
        )
        try {
            await newItem.save()
            console.log(newItem)
            res.redirect('/')
        }catch(err) {
            return res.status(500).send(err)
            res.redirect('/')
        }
    }
}