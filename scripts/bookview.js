'use strict';

var app = app || {};

(function (module) {
    const bookView = {};

    bookView.initHome = () => {
        $('main section').hide();
        $('#books').empty().show();
        app.Book.all.map(b => $('#books').append(b.toHtml()));

        $('button[data-method]').hide();
    };

    bookView.initDetailPage = (ctx) => {
        $('main section').hide();
        $('#books').empty().show();
        $('button[data-method]').show();
        console.log(ctx.book);
        $('#books').append(ctx.book.toHtml());
        $('button[data-method="update"]').on('click', function () {
            page(`/books-client/books/${ctx.book.id}/update`);
        });
    };

    bookView.initNewBook = () => {
        $('main section').hide();
        $('#new').show();
        $('#new-form').on('submit', bookView.submit);
    };

    bookView.initUpdatePage = (ctx) => {
        $('main-section').hide();
        $('#update-form').parent().show();
        const book = ctx.book;
        $('#update-form input[name="title"]').val(book.title);
        $('#update-form input[name="author"]').val(book.author);
        $('#update-form input[name="isbn"]').val(book.isbn);
        $('#update-form input[name="cover-url"]').val(book.image_url);
        $('#update-form textarea[name="description"]').val(book.description);
        $('#update-form').on('submit', function () {
            event.preventDefault();
            const updatedData = {
                title: $('#update-form input[name="title"]').val(),
                author: $('#update-form input[name="author"]').val(),
                isbn: $('#update-form input[name="isbn"]').val(),
                image_url: $('#update-form input[name="cover-url"]').val(),
                description: $('#update-form textarea[name="description"]').val(),
            };
            app.Book.update(book.id, updatedData);
        });
    };

    bookView.submit = event => {
        event.preventDefault();
        const newBook = {
            title: $('#new-form input[name="book-title"]').val(),
            author: $('#new-form input[name="book-author"]').val(),
            isbn: $('#new-form input[name="isbn"]').val(),
            image_url: $('#new-form input[name="book-cover-url"]').val(),
            description: $('#new-form textarea[name="book-description"]').val()
        };
        app.Book.insertRecord(newBook);
    };
    module.bookView = bookView;
})(app);