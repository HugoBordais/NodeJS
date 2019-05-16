'use strict';

const request = require('request')
const readline = require('readline')


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let user

function getRandomInt (max){
    return Math.floor(Math.random() * Math.floor(max))
}



rl.question('Choisir un prenom - nom : ', (answer) => {
    request('https://jsonplaceholder.typicode.com/users', (error, response, body) => {
        const users = JSON.parse(body)
        user = users.find(u => u.name === answer)
        if(!user){
            console.log('404 User not found')
            return
        }
        request('https://jsonplaceholder.typicode.com/posts', (error, response, body) => {
            const posts = JSON.parse(body)
            let userPosts = posts.filter(p => p.userId === user.id)
            let post = userPosts[getRandomInt(userPosts.length)]

            request(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`, (error, response, body) => {
                const comments = JSON.parse(body)
                console.log(comments[getRandomInt(comments.length)])
            })
        })
    })
    rl.close();
})