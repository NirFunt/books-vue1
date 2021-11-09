import { bookService } from "../services/book.service.js";

import bookFilter from "../cmps/book-filter.cmp.js";
import bookList from "../cmps/book-list.cmp.js";


export default {
    components: {
        bookFilter,
        bookList,
    },
    template: `
        <section class="book-app">
        <book-filter @filtered="setFilter" v-if="showBooks"/> 
        <book-list :books="booksToShow" @selected="selectBook" v-if="showBooks"/>
        </section>
    `,

    data() {
        return {
            books: [],
            filterBy: null,
            selectedBook: null,
            showBooks: true,
        };
    },
    created() {
        bookService.query()
        .then (booksList => this.books = booksList)

    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        selectBook(bookId) {
            this.selectedBook = this.books.find(book => bookId === book.id);
            this.showBooks = false;
        },
        closeDetails() {
            this.showBooks = true;
        },
    },
    computed: {
        booksToShow() {
            if(!this.filterBy) return this.books;
            var SearchedStr = this.filterBy.byName.toLowerCase();
            return this.books.filter(book => book.title.toLowerCase().includes(SearchedStr) &&
            book.listPrice.amount > this.filterBy.byLowPrice &&  book.listPrice.amount < this.filterBy.byHighPrice );
        
        }
    },

};

