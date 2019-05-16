'use strict';

const request = require('request')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

const requestUser = (username) => new Promise((resolve, reject) => {
    request('https://jsonplaceholder.typicode.com/users', (_, __, body) => {
        const users = JSON.parse(body)
        const user = users.find(u => u.name === username)

        if (!user) {
            reject(new Error('404 User not found'))
            return
        }

        resolve(user)
    })
})

const requestPost = (user) => new Promise((resolve, reject) => {
    request('https://jsonplaceholder.typicode.com/posts', (_, __, body) => {
        const posts = JSON.parse(body)
        const userPosts = posts.filter(p => p.userId === user.id)
        const post = userPosts[getRandomInt(userPosts.length)]

        if (!post) {
            reject(new Error('404 Post not found'))
            return
        }

        resolve(post)
    })
})

const requestComments = (post) => new Promise((resolve, reject) => {
    request(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`, (_, __, body) => {
        let comments = JSON.parse(body)
        comments = comments.filter(comment => comment.postId === post.id)

        if (!comments) {
            reject(new Error('404 Comment not found'))
            return
        }

        const comment = comments[getRandomInt(comments.length)]
        resolve(comment)
    })
})

rl.question('Choisir un prenom - nom : ', async (answer) => {

    //  With Try/Catch and Await/Async
    try {
        const user = await requestUser(answer)
        const post = await requestPost(user)
        const comment = await requestComments(post)

        console.log(comment)
    } catch (e) {
        console.log(e)
    }
})

    // With Then
// rl.question('Choisir un prenom - nom : ', (answer) => {
//     // With Then
//     requestUser(answer)
//         .then(user => {
//             return requestPost(user)
//         })
//         .then(post => {
//             return requestComments(post)
//         })
//         .then(comment => {
//             console.log(comment)
//         })
//         .catch(e => {
//             console.log(e)
//         })
// })