page('/', (ctx, next) => {
    app.Book.fetchAll(app.bookView.initHome);
});

page('/books/:id', app.Book.fetchOne, app.bookView.initDetailPage);

page('/books/new', app.bookView.initNewBook);

page.start();