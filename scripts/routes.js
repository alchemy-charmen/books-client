page('/', (ctx, next) => {
    app.Book.fetchAll(app.bookView.initHome);
});

page('/books/new', app.bookView.initNewBook);

page('/books/:id', app.Book.fetchOne, app.bookView.initDetailPage);
page('/books/:id/update', app.book.fetchOne, app.bookView.initUpdatePage);

page.base('/books-client');
page.start();