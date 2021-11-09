export default {
    template: `
<section class="about-page">
  <button @click="toggle"> Toggle Timestemp </button>
  <h3> About us </h3>
    <img src="img/magic-book2.jpg">

    <transition name="fade">
    <div v-if="isShowHeader">TimeStemp = {{timeStemp}} </div>
  </transition>
 
  <hr>
            <nav>
                <router-link to="/about/team">Team</router-link> |
                <router-link to="/about/service">Services</router-link>
            </nav>
            <router-view></router-view>

</section>
    `
    ,
    data() {
        return {
            timeInterval: null,
            timeStemp: null,
            isShowHeader : true,
        };
    },
    created() {
        this.timeInterval = setInterval(() => {
            this.timeStemp = Date.now();
            console.log(this.timeStemp);
        }, 1000)
    },
    destroyed() {
        clearInterval(this.timeInterval);
    },
    methods: {
        toggle () {
            this.isShowHeader = !this.isShowHeader;
        }
    },
 
}