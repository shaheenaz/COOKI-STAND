'use strict'
const seatle = {
max:65,
min:23,
avarge:6.3,
total:0,
hours:['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:'],
cookeisperHour:[],
calcCookies:function(){
for(let i=0; i<14 ; i++){
this.cookeisperHour.push(Math.ceil(getRandomIntInclusive(23,65)*this.avarge))

}},
createList:function(){
let container = document.getElementById('cookie');
let h2 = document.createElement('h2')
container.appendChild(h2);
h2.textContent ="seatle"
let lists = document.createElement('ul')
container.appendChild(lists)
for(let i=0; i<this.hours.length ;i++){
    let li = document.createElement('li')
    lists.appendChild(li)
    // console.log(this.cookeisperHour)
    li.textContent = this.hours [i] + this.cookeisperHour[i] 
    //console.log(this.hours.length)
    
}let li = document.createElement('li')
this.total = this.cookeisperHour.reduce((a, b) => a + b, 0)
lists.appendChild(li) 
li.textContent =`total ${this.total}`
console.log(this.cookeisperHour.reduce((a, b) => a + b, 0))

},

}
seatle.calcCookies()
seatle.createList()

function getRandomIntInclusive(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)}

    'use strict'
const tokyo = {
max:24,
min:3,
avarge:1.2,
total:0,
hours:['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:'],
cookeisperHour:[],
calcCookies:function(){
for(let i=0; i<14 ; i++){
this.cookeisperHour.push(Math.ceil(getRandomIntInclusive(23,65)*this.avarge))

}},
createList:function(){
let container = document.getElementById('cookie');
let h2 = document.createElement('h2')
container.appendChild(h2);
h2.textContent ="tokyo"
let lists = document.createElement('ul')
container.appendChild(lists)
for(let i=0; i<this.hours.length ;i++){
    let li = document.createElement('li')
    lists.appendChild(li)
    // console.log(this.cookeisperHour)
    li.textContent = this.hours [i] + this.cookeisperHour[i] 
    //console.log(this.hours.length)
    
}let li = document.createElement('li')
this.total = this.cookeisperHour.reduce((a, b) => a + b, 0)
lists.appendChild(li) 
li.textContent =`total ${this.total}`
console.log(this.cookeisperHour.reduce((a, b) => a + b, 0))

},

}
tokyo.calcCookies()
tokyo.createList()

function getRandomIntInclusive(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)}
    'use strict'
const dubai = {
max:38,
min:11,
avarge:3.7,
total:0,
hours:['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:'],
cookeisperHour:[],
calcCookies:function(){
for(let i=0; i<14 ; i++){
this.cookeisperHour.push(Math.ceil(getRandomIntInclusive(23,65)*this.avarge))

}},
createList:function(){
let container = document.getElementById('cookie');
let h2 = document.createElement('h2')
container.appendChild(h2);
h2.textContent ="Dubai"
let lists = document.createElement('ul')
container.appendChild(lists)
for(let i=0; i<this.hours.length ;i++){
    let li = document.createElement('li')
    lists.appendChild(li)
    // console.log(this.cookeisperHour)
    li.textContent = this.hours [i] + this.cookeisperHour[i] 
    //console.log(this.hours.length)
    
}let li = document.createElement('li')
this.total = this.cookeisperHour.reduce((a, b) => a + b, 0)
lists.appendChild(li) 
li.textContent =`total ${this.total}`
console.log(this.cookeisperHour.reduce((a, b) => a + b, 0))

},

}
dubai.calcCookies()
dubai.createList()

function getRandomIntInclusive(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)}
    
const paris = {
max:38,
min:20,
avarge:2.3,
total:0,
hours:['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:'],
cookeisperHour:[],
calcCookies:function(){
for(let i=0; i<14 ; i++){
this.cookeisperHour.push(Math.ceil(getRandomIntInclusive(23,65)*this.avarge))

}},
createList:function(){
let container = document.getElementById('cookie');
let h2 = document.createElement('h2')
container.appendChild(h2);
h2.textContent ="paris"
let lists = document.createElement('ul')
container.appendChild(lists)
for(let i=0; i<this.hours.length ;i++){
    let li = document.createElement('li')
    lists.appendChild(li)
    // console.log(this.cookeisperHour)
    li.textContent = this.hours [i] + this.cookeisperHour[i] 
    //console.log(this.hours.length)
    
}let li = document.createElement('li')
this.total = this.cookeisperHour.reduce((a, b) => a + b, 0)
lists.appendChild(li) 
li.textContent =`total ${this.total}`
console.log(this.cookeisperHour.reduce((a, b) => a + b, 0))

},

}
paris.calcCookies()
paris.createList()

function getRandomIntInclusive(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)}