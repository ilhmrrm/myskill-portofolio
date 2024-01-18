import pkg from "supertest";
import app from '../../env.js'
const request = pkg(app);

describe('Post Request example', () => {
    it('Returns pet inventories by status', async () => {
        const response = await request
            .post('/user')
            .send({
                "id": 1,
                "username": "johndoe",
                "firstName": "john",
                "lastName": "doe",
                "email": "johndoe@mail.com",
                "password": "123456",
                "phone": "628123456",
                "userStatus": 1
            })
        console.log((await response).status)
        console.log((await response).body)
    })
})