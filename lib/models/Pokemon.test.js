const Pokemon = require('./Pokemon.js');

describe('Pokemon model', () => {
    describe('Pokemon name', () => {
        it('requires a name', () => {
            const pokemon = new Pokemon({
                type: 'fire',
                pokedexNumber: 4
            });
    
            const { errors } = pokemon.validateSync();
            expect(errors.name.message).toEqual('Path `name` is required.');
        });
    });

    describe('Pokemon type', () => {
        it('requires a type', () => {
            const pokemon = new Pokemon({
                name: 'Pikachu',
                pokedexNumber: 25
            });
    
            const { errors } = pokemon.validateSync();
            expect(errors.type.message).toEqual('Path `type` is required.');
        });
    });

    describe('Pokedex number', () => {
        it('requires a number', () => {
            const pokemon = new Pokemon({
                name: 'Pikachu',
                type: 'Electric'
            });
    
            const { errors } = pokemon.validateSync();
            expect(errors.pokedexNumber.message).toEqual('Path `pokedexNumber` is required.');
        });
    });
});

