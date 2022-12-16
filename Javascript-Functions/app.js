"use strict"

/*
const list = ['tiger', 'cat', 'bear', 'bird'];
console.log(list[1]);

console.log(list);

// EXERCISE 6

const array = ["Banana", "Apples", "Oranges", 'Blueberries'];

array.shift();
array.sort();
console.log(array.push('Kiwi'));
array.shift();
array.reverse();
console.log(array);

const array2 = ['Banana', ['Apples', ['Oranges'], 'Blueberries']];

console.log(array2[1][1][0]);


const user = {
    name: 'John',
    age: 34,
    hobby: 'Soccer',
    isMarried: false,
    shout: function() {
        console.log("Ahhhh!");
    }
}

const list = [
    {
        username: 'andy',
        password: 'secret'
    },
    {
        username: 'jess',
        password: '123'
    }
]

console.log(list[0].password);

user.favoriteFood = "Spinach"
;

user.isMarried = true;

console.log(user);

//A Function inside an object is called a "method"
console.log(user.shout());


const duckFart = {
    userName: 'duckfart',
    password: 'chickenqueef'
}

const database = [duckFart]

console.log(database[0].userName)

const newsfeed = [
    {
        username: 'buckslayer',
        timeline: ''
    },

    {
        username: 'hardkordann',
        timeline: ''
    },

    {
        username: 'kmae222',
        timeline: ''
    }
]
*/

const database = [
    {
        username: 'andrei',
        password: 'supersecret'
    }
];

const newsfeed = [
    {
        username: 'Bobby',
        timeline: 'So tired from all that learning'
    },
    {
        username: 'Sally',
        timeline: 'Javascript is sooooooo cool!'
    }
];

const userNamePrompt = prompt("What's your username?");
const passwordPrompt = prompt("What's your password?");

function signIn(username, pass) {
    if (username === database[0].username && pass === database[0].password) {
        console.log(newsfeed);
    } else {
        alert('Sorry, the username or password were incorrect');
    }
}

signIn(userNamePrompt, passwordPrompt)