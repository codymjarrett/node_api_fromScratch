const faker = require('faker')
const fs = require('fs')

let x = 25
const dir = './_data'
const firstName = faker.name.firstName
const lastName = faker.name.lastName
const phoneNumber = faker.phone.phoneNumber
const exampleEmail = faker.internet.exampleEmail
const streetName = faker.address.streetName
const streetAddress = faker.address.streetAddress
const secondaryAddress = faker.address.secondaryAddress
const city = faker.address.city
const state = faker.address.state
const zipCode = faker.address.zipCode
const companyName = faker.company.companyName
const catchPhrase = faker.company.catchPhrase
const jobTitle = faker.name.jobTitle
const data = []

const createData = () => {
    while (x > 0) {
        data[x - 1] = {
            firstName: firstName(),
            lastName: lastName(),
            phoneNumber: phoneNumber(),
            exampleEmail: exampleEmail(),
            streetName: streetName(),
            streetAddress: streetAddress(),
            secondaryAddress: secondaryAddress(),
            city: city(),
            state: state(),
            zipCode: zipCode(),
            companyName: companyName(),
            catchPhrase: catchPhrase(),
            jobTitle: jobTitle(),
        }
        x--
    }
    return data
}

const getData = () => {
	if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
       const data = createData()
		fs.writeFile(`${dir}/data.json`, JSON.stringify(data), err => {
			if (err) {
				throw err
			}
			console.log(`${data.length} files have been written.`)
		})
	} else {
        const data = createData()
		fs.writeFile(`${dir}/data.json`, JSON.stringify(data), err => {
			if (err) {
				throw err
			}
			console.log(`${data.length} files have been written.`)
		})
	}
}

getData()
