const Items = require("../models/Item")
const Boards = require("../models/Board")

module.exports = {
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
    deleteBoard: async (req, res) => {
        const id = req.params.id
        try{
            await Boards.findByIdAndDelete(id)
            res.redirect("/")
        }catch(err){
            if(err) return res.status(500).send(err)
            res.redirect("/")
        }
    },
    updateBoard: async (req, res) => {
        const id = req.params.id
        const boardToEdit = await Boards.findById(id)
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