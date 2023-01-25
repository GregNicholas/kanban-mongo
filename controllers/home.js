const Items = require("../models/Item")
const Boards = require("../models/Board")

module.exports = {
    getIndex: async (req, res) => {
        try {
            const boards = await Boards.find()
            res.render("index.ejs", {boards: boards})
        }catch(err) {
            return res.status(500).send(err)
        }
    },
    createBoard: async (req, res) => {
        const columns = req.body.columns.map(column => {
            return {name: column, tasks: []}
        })
        console.log(req.body.columns, req.body.boardName)
        const newBoard = new Boards(
            {
                name: req.body.boardName,
                columns: columns,
            }
        )
        try {
            await newBoard.save()
            console.log(newBoard)
            res.redirect('/')
        }catch(err) {
            return res.status(500).send(err)
            res.redirect('/')
        }
    },
    getBoard: async (req, res) => {
        const id = req.params.id;
        try {
            const board = await Boards.findById(id)
            res.render("board.ejs", {board: board})
        }catch(err) {
            if(err) return res.status(500).send(err)
            res.redirect("/")
        }
    }
}