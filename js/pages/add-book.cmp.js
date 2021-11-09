import { bookService } from "../services/book.service.js";

export default {
    template: `
<section class="book-add">
     <h3> Search For New Books </h3>
     <input type="text" v-model="searchedInput" >
     <button @click="goSearch"> Search </button>
     
     <ul v-if="googleBooks"> <li v-for="book in googleBooks"> {{book.volumeInfo.title}} 
         <button @click="addGoogleBook(book)"> + </button> </li> 
    </ul>

</section>
    `,
    data() {
        return {
            searchedInput: '',
            googleBooks: ''
        };
    },
    created() {

    },
    destroyed() {

    },
    methods: {
        goSearch() {
            console.log(this.searchedInput);
            bookService.getFromAPI(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${this.searchedInput}`)
            .then(googleBooks => {
                console.log(googleBooks);
                this.googleBooks = googleBooks.items;
            });
        },
        addGoogleBook (book) {
            console.log(book);
            this.googleBooks = this.googleBooks.filter(googleBook => googleBook.id !== book.id);
            bookService.addGoogleBook(book);
        }
    },

}