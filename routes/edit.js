const express = require("express")
const router = express.Router()
const editController = require('../controllers/edit')

router.get('/:id', editController.getEdit) // get edit page with item id that we want to edit
router.get('/delete/:id', editController.deleteItem) // delete item
router.post('/update/:id', editController.updateItem) // update the item using data from the form

module.exports = router