import User from '../models/user';

// describe function defines a test block,
describe('just testing the user', () => {
    // actual test are written in it functions
    it('a new user should be offline', () => {
        const sam = new User();
        // expect something to happen 
        expect(sam.onlineStatus).toBe(false);
    });
});