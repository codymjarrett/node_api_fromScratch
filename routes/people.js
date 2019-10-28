const express = require('express')
const {
	getPeople,
	getPerson,
	createPerson,
	UpdatePerson,
	DeletePerson,
} = require('../controllers/peopleController')

const router = express.Router()

router
	.route('/')
	.get(getPeople)
	.post(createPerson)

router
	.route('/:id')
	.get(getPerson)
	.put(UpdatePerson)
	.delete(DeletePerson)

module.exports = router
