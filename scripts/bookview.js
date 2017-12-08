'use strict';

var app = app || {};

(function (module) {
    const bookView = {};

    bookView.initHome = () => {
        $('main section').hide();
        $('#books').empty().show();
        app.Book.all.map(b => $('#books').append(b.toHtml()));
    };

    module.bookView = bookView;
})(app);