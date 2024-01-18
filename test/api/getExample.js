import pkg from "supertest";
import app from '../../env.js'
const request = pkg(app);

describe('Get Request example', () => {
    it('Returns pet inventories by status', async () => {
        const response = await request
        .get('/store/inventory')
        console.log((await response).status)
        console.log((await response).body)
    })
})
