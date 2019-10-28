const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const peopleSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        maxlength: [30, 'Phone number can not be longer than 20 characters']
    },
    exampleEmail: {
        type: String,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
    streetName: {
        type: String,
        required: true,
    },
    secondaryAddress: {
        type: String,
    },
    city:  {
        type: String,
        required: true,
    },
    state:  {
        type: String,
        required: true,
    },
    zipCode:  {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        default: 'n/a'
    },
    catchPhrase: {
        type: String,
        default: 'n/a'
    },
    jobTitle: {
        type: String,
        default: 'n/a'
    },
})

module.exports = mongoose.model('People', peopleSchema)