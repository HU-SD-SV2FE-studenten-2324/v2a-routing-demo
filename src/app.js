import { Router } from '@vaadin/router';

console.log(import.meta.env.MODE);

const BASE = import.meta.env.BASE_URL ?? '/';  // see vite.config.js for the BASE_URL
const outlet = document.querySelector('#output');
const router = new Router(outlet);

export { router, BASE };