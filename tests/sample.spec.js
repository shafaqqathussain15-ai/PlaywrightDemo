const {test,expect} = require('@playwright/test')

test('This is First Test',async function({page}){
    expect(10).toBe(10)
})
test('This is Second Test',async function({page}){
    expect(100).toBe(101)
})