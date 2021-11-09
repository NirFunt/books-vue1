
export default {
    components: {

    },
    props:[],
    template: `
        <section class="book-filter">
        <input type="text" v-model="filterObj.byName" @input="filter">
        
        <div>
        <input type="range" min="0" max="200" v-model=filterObj.byLowPrice title="low price" @change="filter">
        {{filterObj.byLowPrice}}
        </div>
        <div>
        <input type="range" min="0" max="200" v-model=filterObj.byHighPrice title="high price" @change="filter">
        {{filterObj.byHighPrice}}
        </div>
        </section>
    `,

    data() {
        return {
         filterObj : {byName : '', byLowPrice: 10,byHighPrice: 190},
        };
    },
    created() {

    },
    methods: {
        filter () {
          this.$emit('filtered',{... this.filterObj}); // sufficent deep copy because object key are not object
        //   this.$emit('filtered',JSON.parse(JSON.stringify(filterObj))); very deep copy!!!, would copy object key which are object
        }
     
    },
    computed: {
   
    },
};