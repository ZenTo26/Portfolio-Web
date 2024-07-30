import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";

const app = createApp(App);

app.component("navbar-navbar", Navbar);
app.component("home-home", Home);
app.component("about-about", About);
app.component("contact-contact", Contact);

app.component('footer-footer', Footer);

app.mount("#app");
