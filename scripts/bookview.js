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
        console.log('I heard you');
    };

    module.bookView = bookView;
})(app);