
export default {
    components: {

    },

    template: `
        <section class="app-header">
        <h3> Books </h3>

        <nav> 
        <router-link to="/"> Home </router-link> |
        <router-link to="/book"> Books </router-link> |
        <router-link to="/bookadd"> Add </router-link> |
        <router-link to="/about"> About </router-link> 
       
        </nav>
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

    },
};