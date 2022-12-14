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


function isUserValid(bool) {
    return bool;
}

let answer = isUserValid(true) ? "you may enter" : "Access denied";

let automatedAnswer = "your account # is" + (isUserValid(false)? '1234' : 'not Available')

console.log(automatedAnswer);

function moveCommand(direction) {
    let whatHappens;
    switch (direction) {
        case 'forward':
            whatHappens = 'you encounter a monster';
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            whatHappens = ' you found a river';
            break;
        case "left":
            whatHappens = 'you run into a troll';
            break;
        default:
            whatHappens = 'please enter a valid direction';
    }
    return whatHappens;

}


const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}

const {player, experience} = obj;

let {wizardLevel} = obj;


const first = () => {
    const greet = 'hi';
    const second = () => {
        alert(greet);
    }
    return second;
}
 const newFunc = first();
 newFunc();

 //curried function

 const multiply = (a) => (b) => a * b;
 const multiplyByFive = multiply(5);
 // This creates a function that will always multiply by 5;
 console.log(multiplyByFive(6));

 // compose function

 const compose = (f, g) => (a) => f(g(a));

 const sum = (num) => num + 1;

 compose(sum, sum)(5);

 //Avoid side effects (affects outside world) and functional purity (always return something/same thing) -- Deterministic


 const array = [1, 2, 3, 5];

 const double = [];
 const newArray = array.forEach((num) => {
    
    double.push(num * 2);
 })

 console.log(newArray);

 //map, filter, reduce would be used daily

 const mapArray = array.map((num) => {
    return num * 2;
 })
 */

 const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  
  ];

  const excitedUsers = [];
  array.forEach((user) => {
    let {username} = user;
    username = username + '!';
    excitedUsers.push(username);
  })

  console.log(excitedUsers);
 


  const curiousUsers = array.map((user, i) => {
    let { username } = user;
    return username + '?'
 })

 console.log(curiousUsers);

 const redTeam = array.filter(user => {
   return user.team === 'red';
 })

 console.log(redTeam);

 const totalScore = array.reduce((acc, user) => {return acc + user.score}, 0);

 console.log(totalScore);