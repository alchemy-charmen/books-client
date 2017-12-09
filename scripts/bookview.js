'use strict';

var app = app || {};

(function (module) {
    const bookView = {};

    bookView.initHome = () => {
        $('main section').hide();
        $('#books').empty().show();
        app.Book.all.map(b => $('#books').append(b.toHtml()));
    };

    bookView.initDetailPage = (ctx) => {
        $('main section').hide();
        $('#books').empty().show();
        console.log(ctx.book);
        $('#books').append(ctx.book.toHtml());
    };

    bookView.initNewBook = () => {
        $('main section').hide();
        $('#new').show();
        $('#new-form').on('submit', bookView.submit);
    };

    bookView.submit = event => {
        event.preventDefault();
        const book = new app.Book({
            author: $('#book-author').val(),
            title: $('#book-title').val(),
            isbn: $('#isbn').val(),
            image_url: $('#book-cover-url').val(),
            description: $('#book-description').val(),
        });
        book.insertRecord();
    };
    module.bookView = bookView;
})(app);