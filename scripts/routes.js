page('/', (ctx, next) => {
    app.Book.fetchAll(app.bookView.initHome);
});

page.start();