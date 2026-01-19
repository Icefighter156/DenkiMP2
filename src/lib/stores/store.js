import { writable } from 'svelte/store';

export const score = writable({
    correct: 0,
    wrong: 0
});

export const email1 = writable({
    tipped: "",
    actually: "Fake"
});


export const email2 = writable({
    tipped: "",
    actually: "Fake"
});

export const email3 = writable({
    tipped: "",
    actually: "Real"
});

export const email4 = writable({
    tipped: "",
    actually: "Fake"
});


export const email5 = writable({
    tipped: "",
    actually: "Real"
});