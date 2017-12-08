'use strict';
var app = app || {};

(function (module) {
    function Book (obj) {
        this.id = obj.id;
        this.author = obj.author;
        this.title = obj.title;
        this.isbn = obj.isbn;
        this.image_url = obj.image_url;
        this.description = obj.description;
    }
    Book.all = [];

    Book.fetchAll = () => {
        $.get('https://charmenbooks.herokuapp.com/api/v1/books')
            .done(console.log);
    }

    module.Book = Book;
}) (app);
app.Book.fetchAll();