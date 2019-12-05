const Pokemon = require('./Pokemon.js');

describe('Pokemon model', () => {
    describe('Pokemon name', () => {
        it('requires a name', () => {
            const pokemon = new Pokemon({
                red: 255,
                green: 0,
                blue: 0
            });
    
            const { errors } = pokemon.validateSync();
            expect(errors.name.message).toEqual('Path `name` is required.');
        });
    });
});

