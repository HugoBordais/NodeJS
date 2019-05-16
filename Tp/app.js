'use strict'
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout1
})

const db = {
    todo: [{
        name: 'Faire la vaiselle'
    }, {
        name: 'Aller faire les courses'
    }],
    inprogress: [{
        name: 'Galèrer sur le TP noté'
    }, {
        name: 'Faire le TP noté'
    }],
    done: [{
        name: 'Regarder GOT épisode 5'
    }]
}

function toDoList() {
    console.log('--- TODO LIST - MENU ---')
    console.log('1. todo')
    console.log('2. in progress')
    console.log('3. done')
    console.log('4. remove done')
    console.log('5. help')
    console.log('6. exit')
    console.log('------------------------')
    console.log('Choississez une action à effectuer : ')

    rl.question('', (answer) => {

        switch (answer) {
            case 'todo':
                console.log('Voici la liste des tâches à faire :')
                console.log(db.todo)
                break
            case 'in progress':
                console.log('Voici la liste des tâches en cours :')
                console.log(db.inprogress)
                break
            case 'done':
                console.log('Voici la liste des tâches terminé : ')
                console.log(db.done)
                break
            case 'remove done':
                db.done = []
                console.log('La liste des tâches terminé à été vider')
                console.log(db.done)
                break
            case 'help':
                console.log('Désolé, finalement je ne peux pas vous aider. 🤓')
                break
            case 'exit':
                console.log('Programme quitté')
                return
            default:
                console.log('Veuillez choisir une action en écrivant le mot correspondant.')
        }
        console.log('')
        return toDoList()
    })
}
toDoList()