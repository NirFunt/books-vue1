

export default {
    components: {

    },
    props: ['book'],
    template: `
        <section class="book-preview">
       <p> {{book.title}} </p>
       <img :src="book.thumbnail">
       <p :class="priceColorToShow" > {{amountToShow}} </p>
       <router-link :to="'/details/'+book.id"> Details </router-link>
        </section>
    `,

    data() {
        return {

        };
    },
    created() {

    },
    methods: {


    },
    computed: {
        amountToShow() {
            if (this.book.listPrice.currencyCode === 'EUR') return this.book.listPrice.amount + '€';
            else if (this.book.listPrice.currencyCode === 'ILS') return this.book.listPrice.amount + '₪';
            else if (this.book.listPrice.currencyCode === 'USD') return this.book.listPrice.amount + '$';
        },
        priceColorToShow() {
            if (this.book.listPrice.amount >150) return 'red';
            if (this.book.listPrice.amount <20) return 'green';
        }

    },
};