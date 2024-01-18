import { expect } from "chai"
import pkg from "supertest"
import DATA from '../../data/userData.js'

describe('Post Request Example', async () => {
    const response = pkg ('https://petstore.swagger.io/v2')
            .post('/user')
            .send(DATA.CREATE_USER_DATA)

    it('response status equal to 200', async () => {
        // Check response status sama dengan 200
        expect((await response).status).to.equal(200)
    })

    it('response body to haveOwnProperty', async () => {
        // Expect dalam body response terdapat value 'message'
        expect((await response).body).to.haveOwnProperty('message')
    })

    // Reporting in mochawesome
})