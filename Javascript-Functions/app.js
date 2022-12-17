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


const todos = [
    "clean room",
    'brush teeth',
    'exercise',
    'study javascript',
    'eat healthy'
];

todos.forEach(function(todo, i) {
    console.log(todo, i)
})

// for (let i = 0; i < todos.length; i++) {
//     todos[i] = todos[i] + '!'
// }

// let counterOne = 0;
// while (counterOne < 10) {
//     console.log(++counterOne);
// }

// let counterTwo = 10;
// do {
//     console.log(counterTwo);
//     counterTwo--;
// } while (counterTwo > 0);

console.log(todos);

*/

const database = [
    {
        username: 'andrei',
        password: 'supersecret'
    },
    {
        username: 'sally',
        password: '123'
    },
    {
        username: 'ingrid',
        password: '777'
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

function isUserValid(username, password) {
    for (let i = 0; i < database.length; i++) {
    if(database[i].username === username &&
        database[i].password === password) {
         return true;
        } 
    }return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsfeed);
    } else {
        alert('Sorry, the username or password were incorrect');
    }
}

signIn(userNamePrompt, passwordPrompt)