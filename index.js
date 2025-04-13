// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"]
const writeCards = (names, event) => {
    let messagesArray = []
    for (let i = 0; i < names.length; i++){
        messagesArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return messagesArray
}
console.log(writeCards(names, "surprise"))

countDown = () => {
    const array = [0,1,2,3,4,5,6,7,8,9,10]
    for(let i = array.length - 1; i >= 0; i--){
        console.log(array[i])
    }
}
console.log(countDown(10))



// for (let age = 30; age < 40; age++){
//     console.log(`I'm ${age} years old. Happy birthday to me!`)
// }
// const gifts = ["teddy bear", "drone", "doll"]
// function wrapGifts(gifts){
//     for (let i = 0; i < gifts.length; i++){
//         console.log(`wrapped ${gifts[i]} and added a bow`)
//     }
// }
// wrapGifts(gifts)

// const countDown = (i) => {
//     for (let i = 10; i >= 0; i--){
//         console.log(countDown(i));
//     }
    
// }
// countDown(5)






