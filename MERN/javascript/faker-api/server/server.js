const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

class User {
    constructor() {
        this.password = faker.internet.password,
            this.email = faker.internet.email(),
            this.phoneNumber = faker.phone.phoneNumber(),
            this.lastName = faker.name.lastName(),
            this.firstName = faker.name.firstName(),
            this._id = faker.datatype.uuid()
    }
}

class Company {
    constructor() {
        this._id = faker.datatype.uuid(),
            this.name = faker.company.companyName(),
            this.address = {
                street: faker.address.streetAddress(),
                city: faker.address.city(),
                state: faker.address.state(),
                zipCode: faker.address.zipCode(),
                country: faker.address.country()
            };
    }
}

app.get("/api/users/new", (req, res) => {
    res.json(new User());
});

app.get("/api/companies/new", (req, res) => {
    res.json(new Company());
});

app.get("/api/user/company", (req, res) => {
    res.json({ user: new User(), company: new Company() });
})

app.listen(port, () => console.log(`Listening on port: ${port}`));