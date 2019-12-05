const ZeldaGames = require('./ZeldaGames.js');

describe('ZeldaGame model', () => {
    describe('ZeldaGame title', () => {
        it('requires a title', () => {
            const zeldaGame = new ZeldaGames({
                yearReleased: 1986,
            });
    
            const { errors } = zeldaGame.validateSync();
            expect(errors.title.message).toEqual('Path `title` is required.');
        });
    });
});
