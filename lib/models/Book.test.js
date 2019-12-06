const Book = require('./Book.js');

describe('Book model', () => {
    describe('Book name', () => {
        it('requires a title', () => {
            const book = new Book({
                author: 'Frank Herbert',
                pages: 500
            });
    
            const { errors } = book.validateSync();
            expect(errors.title.message).toEqual('Path `title` is required.');
        });
    });
});
