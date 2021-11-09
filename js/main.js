import bookHeader from "./cmps/app-header.cmp.js";
import bookFooter from "./cmps/app-footer.cmp.js";
import userMsg from "./cmps/user-msg.cmp.js";
import { router } from "./routes.js";
// import header, footer & userMsg which we have in all pages, and import router, which contains path to all our pages

const options = {
    el: '#app',
    router,
    components: {
        bookHeader,
        bookFooter,
        userMsg,
    },
    template: `
        <section>
            <book-header/>
            <user-msg/>
            <router-view/>
            <book-footer/>
        </section>
    `,

};

new Vue(options);

