import { bookService } from "../services/book.service.js";

export default {
    template: `
<section class="book-add">
     <h3> Search For New Books </h3>
     <input type="text" v-model="searchedInput" >
     <button @click="goSearch"> Search </button>
     
     <ul> <li v-for="book in searchedBooks"> {{book.volumeInfo.title}} 
         <button @click="addGoogleBook"> + </button> </li> 
    </ul>

</section>
    `,
    data() {
        return {
            searchedInput: '',
            searchedBooks: ''
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
                this.searchedBooks = googleBooks.items;
            });
        },
        addGoogleBook () {
            console.log('hi')
        }
    },

}