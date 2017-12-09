const github = require('./api/github');
jest.mock(`./__mocks__/request.js`);

describe('#getUser() using Promises', () => {
   it('should load user data', () => {
      return github.getUser('vnglst')
         .then(data => {
            expect(data).toBeDefined()
            expect(data.entity.name).toEqual('Koen van Gilst')
         })
   })
})