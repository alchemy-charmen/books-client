'use strict';
var app = app || {};

// const API_URL = 'https://charmenbooks.herokuapp.com/api/v1';
const API_URL = 'http://localhost:3000/api/v1';

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

    Book.prototype.toHtml = function () {
        const template = Handlebars.compile($('#book-template').text());
        return template(this);
    };

    Book.loadAll = rawData => {
        Book.all = rawData.map(bookObject =>{
            return new Book(bookObject);
        });
    };

    Book.fetchAll = (ctx, callback) => {
        $.get(`${API_URL}/books`)

            .then(Book.loadAll)
            .then(callback)
            .fail(console.error);
    };

    Book.fetchOne = (ctx, cb) => {
        $.get(`${API_URL}/books/${ctx.params.id}`)
            .then(data => {
                ctx.book = new Book(data[0]);
                cb();
            })
            .fail(console.error);
    };

    Book.update = (id, data) => {
        $.ajax({
            url: `${API_URL}/books/${id}`,
            method: 'PUT',
            data: data
        })
            .then(data => {
                console.log(data);
                page(`/books/${id}`);
            })
            .fail(console.error);
    };

    Book.prototype.insertRecord = function(callback) {
        $.post(`${API_URL}/books`, {
            title: $('#new-form input[name="book-title"]').val(),
            author: $('#new-form input[name="book-author"]').val(),
            isbn: $('#new-form input[name="isbn"]').val(),
            image_url: $('#new-form input[name="book-cover-url"]').val(),
            description: $('#new-form textarea[name="book-description"]').val(),
        });
    };

    module.Book = Book;
})(app);
