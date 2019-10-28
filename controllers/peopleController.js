const People = require('../model/People')

exports.getPeople = async (req, res) => {
	const people = await People.find({})

	try {
		res.status(200).json({
			success: true,
			count: people.length,
			data: people,
		})
	} catch (error) {
		res.status(400).json({
			success: false,
			error: error.message,
		})
	}
}
exports.getPerson = async (req, res) => {
	const { id } = req.params
	try {
		const person = await People.findById(id)

		if (!person) {
			return res.status(400).json({
				success: false,
			})
		}
		res.status(200).json({
			success: true,
			data: person,
		})
	} catch (error) {
		res.status(400).json({
			success: false,
			error: error.message,
		})
	}
}
exports.createPerson = async (req, res) => {
	const { body } = req

	try {
		const person = await People.create(body)

		res.status(201).json({
			success: true,
			data: person,
		})
	} catch (error) {
		res.status(400).json({
			success: false,
			error: error.message,
		})
	}
}
exports.UpdatePerson = async (req, res) => {
	const { id } = req.params
	const { body } = req.body

	try {
		const person = await People.findByIdAndUpdate(id, body, {
			new: true,
			runValidators: true,
		})

		if (!person) {
			return res.status(400).json({
				success: true,
			})
		}
		res.status(200).json({
			success: true,
			data: person,
		})
	} catch (error) {
		res.status(400).json({ success: false, error: error.message })
	}
}
exports.DeletePerson = async (req, res) => {
	const { id } = req.params

	try {
		const person = await People.findByIdAndDelete(id)

		if (!person) {
			return res.status(400).json({
				success: true,
			})
		}
		res.status(200).json({
			success: true,
			data: person,
		})
	} catch (error) {
		res.status(400).json({ success: false, error: error.message })
	}
}
