const Items = require("../models/Item")
const Boards = require("../models/Board")

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
    getEditBoard: async (req, res) => {
        const id = req.params.id;
        try {
            const boardToEdit = await Boards.findById(id)
            res.render("edit.ejs", {board: boardToEdit, boardId: id})
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
    deleteBoard: async (req, res) => {
        const id = req.params.id
        try{
            await Boards.findByIdAndDelete(id)
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
    },
    updateBoard: async (req, res) => {
        console.log(req.body)
        const id = req.params.id
        const boardToEdit = await Boards.findById(id)
    // const newBoard = { name: req.body.boardName, columns: [{name: req.body.columns[0]}, {name: req.body.columns[1]}] }
        boardToEdit.name = req.body.boardName;
        boardToEdit.columns[0].name = req.body.columns[0]
        boardToEdit.columns[1].name = req.body.columns[1]

        try{
            await Boards.findByIdAndUpdate(id, boardToEdit)
            res.redirect("/")
        }catch(err){
            if(err) return res.status(500).send(err)
            res.redirect("/")
        }
    }
}