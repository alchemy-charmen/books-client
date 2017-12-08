'use strict';
var app = app || {};

const API_URL = 'https://charmenbooks.herokuapp.com/api/v1';
// const API_URL = 'http://localhost:3000/api/v1';

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

    Book.fetchAll = (callback) => {
        $.get(`${API_URL}/books`)

            .then(results => {
                Book.loadAll(results);
                callback();
            });
    };

    Book.initHome = () => {
        // Book.fetchAll();
        Book.all.forEach(a => $('#books').append(a.toHtml()));
    };

    module.Book = Book;
}) (app);
