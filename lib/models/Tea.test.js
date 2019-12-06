const Tea = require('./Tea.js');

describe('Tea model', () => {
    describe('Tea type', () => {
        it('requires a type', () => {
            const tea = new Tea({
                name: 'Peppermint',
                caffine: true
            });
    
            const { errors } = tea.validateSync();
            expect(errors.type.message).toEqual('Path `type` is required.');
        });

        it('type needs to be "Green" "Black" or "Herbal"', () => {
            const tea = new Tea({
                type: 'Yummy',
                name: 'Peppermint',
                caffine: true
            });
    
            const { errors } = tea.validateSync();
            expect(errors.type.message).toEqual('`Yummy` is not a valid enum value for path `type`.');
        });
    });
});
