import bookApp from './pages/book-app.cmp.js';
import homePage from './pages/home-page.cmp.js';
import aboutPage from './pages/about-page.cmp.js';
import bookDetails from './pages/book-details.cmp.js';
import bookAdd from './pages/add-book.cmp.js';
import aboutTeam from './pages/about-team.cmp.js';
import aboutService from './pages/about-service.cmp.js';

// routes.js is mapping all the pages, therefore we import all pages, and them componenet name and path, 
// and then export rounter to main.js

const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/about',
        component: aboutPage,
        children: [
            {
                path: 'team',
                component: aboutTeam
            },
            {
                path: 'service',
                component: aboutService
            }
        ],
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/details/:bookId',
        component: bookDetails
    },
    {
        path: '/bookadd',
        component: bookAdd
    }
]

export const router = new VueRouter({ routes });