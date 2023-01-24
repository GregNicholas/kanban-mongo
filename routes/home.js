// Handle initial GET request for homepage
// Handle POST method request for adding a new item

const express = require("express")
const router = express.Router()
const homeController = require('../controllers/home')

router.get('/', homeController.getIndex) //readonly route
router.post('/new', homeController.createItem) //create route
router.post('/addBoard', homeController.createBoard) // create board

module.exports = router