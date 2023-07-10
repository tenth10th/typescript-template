const { expect } = require('chai')
const { describe, it, before, after, beforeEach } = require('mocha')

describe('Mocha test framework', () => {

    before( function() {
        // console.log("Runs once, before any test cases in this block")
    })

    beforeEach( function() {
        // console.log("    Runs before each individual test case (it)")
    })

    it('successfully finds and runs BDD-style tests', function() {
        // This test case doesn't do anything
        // (other than being a mocha-style BDD test)
    })

    it('supports chai "expects" syntax', function() {
        expect( () => true ).to.not.throw(Error)
    })

    beforeEach( function() {
        // console.log("    Runs after each individual test case (it)")
    })

    after( function() {
        // console.log("Runs once, after all test cases in this block")
    })
})

// Example of a "root hook" that runs before each test case
// (sort of a global beforeEach)

// exports.mochaHooks = {
//     beforeEach(done) {
//       // do something before every test
//       done();
//     }
// };