page('/', app.Book.fetchAll, app.bookView.initHome);


page('/books', app.Book.fetchAll, app.bookView.initHome);
page('/books/new', app.bookView.initNewBook);
page('/books/:id', app.Book.fetchOne, app.bookView.initDetailPage);
page('/books/:id/update', app.Book.fetchOne, app.bookView.initUpdatePage);

// page('/about', app.aboutView.initAboutPage);

page.base('/books-client');
page.start();