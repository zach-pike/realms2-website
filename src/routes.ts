import Home from "./Pages/Home.svelte";
import About from "./Pages/About.svelte";
import Contact from "./Pages/Contact.svelte"

// FML
import { Route } from "svelte-router-spa/types/components/router";

const routes: Route[] = [
    {
        name: '/',
        component: Home,
    },
    {
        name: 'about',
        component: About,
    },
    {
        name: 'contact',
        component: Contact
    }
]

export { routes};