const express = require("express")
const router = express.Router()
const editController = require('../controllers/edit')

router.get('/:id', editController.getEdit) // get edit page with item id that we want to edit
router.get('/delete/:id', editController.deleteItem) // delete item
router.post('/update/:id', editController.updateItem) // update the item using data from the form
// router.get('/deleteBoard/:id', editController.deleteBoard) // delete board
// router.post('/updateBoard/:id', editController.updateBoard)
module.exports = router