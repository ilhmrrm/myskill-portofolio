import {assert} from 'chai'
import app from '../../assert.js'

describe("Welcome Test", function(){
    it('app should return welcome message', function(){
        assert.equal(app(),"welcome to QA course at myskill")
    })
})