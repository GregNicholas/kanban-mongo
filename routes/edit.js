const express = require("express")
const router = express.Router()
const editController = require('../controllers/edit')

router.get('/board/:id', editController.getEditBoard)
router.get('/deleteBoard/:id', editController.deleteBoard) // delete board
router.post('/updateBoard/:id', editController.updateBoard)
module.exports = router
