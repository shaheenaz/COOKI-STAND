'use strict'
function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
let array = []
// let cookiesperHour = [];
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm','Daily Location Total']
let container = document.getElementById('cookie')
let table = document.createElement('table')
container.appendChild(table)

function Cookies(cityName, max, min, avarage) {
    this.name = cityName;
    this.max = max;
    this.min = min;
    this.avarage = avarage;
    this.cookiesperHour = [];
    this.total = [];
    //this. hours = ['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:'];
    array.push(this)

}
// console.log(tis.cookiesperHour)

let city1 = new Cookies('seatle', 23, 65, 6.3)
let city2 = new Cookies('tokyo', 24, 3, 1.2)
let city3 = new Cookies('dubai', 38, 11, 3.7)
let city4 = new Cookies('paris', 38, 20, 2.3)
let city5 = new Cookies('lima', 16, 2, 4.6)
//console.log(array)
Cookies.prototype.calcCookies = function () {
    //this.cookiesperHour =(Math.ceil(getRandomIntInclusive(this.max,this.min)*this.avarge))
    for (let i = 0; i < hours.length; i++) {
        let value = Math.ceil(getRandomIntInclusive(this.min, this.max) * this.avarage)
        this.cookiesperHour.push(value)}
        
        // let sum = this.cookeisperHour.reduce((a, b) => a + b, 0)
        // this.total.push(sum)
        //this.cookiesperHours.push 
    
}
// function totalSum(){
//     let num = 0;
//     for(let i = 0 ; i <5; i++){
//         num = Math.ceil(this.cookiesperHour[i]* this.avarage);
//         this.total = this.total[i] + num
//         this.total.push(num)}}

        //this.cookiesperHour.push(num);}
//  Cookies.prototype.sumCookies = function(){
// for (let i = 0; i< hours.length; i++){
//     let sum = this.cookeisperHour.reduce((a, b) => a + b, 0)
//     total.push(sum)
    // this.total.push}
// totalSum()
//  TotalSum()
 console.log()
// calcCookies()
// city1.totalSum()
// city1.sumCookies()
console.log(city2)
city1.calcCookies()
city2.calcCookies()
city3.calcCookies()
    city4.calcCookies()
        city5.calcCookies()
    console.log(array)


function headerraw(){
    let tr = document.createElement('tr')
table.appendChild(tr) 
let empty = document.createElement('th')
tr.appendChild(empty)
for (let i =0; i<hours.length;i++){
    let headerROW = document.createElement('th')
    tr.appendChild(headerROW)
    headerROW.textContent = hours[i]
}


}
headerraw()
// function totalSUMM(){
//     let num = 0;
//     for(let i = 0 ; i <5; i++){
//         num = Math.ceil(this.cookiesperHour[i]* this.avarage);
//         this.total = this.total[i] + num
//         this.total.push(num)}}
//         totalSUMM( )
// for (let i = -1 ; i <= hours.length; i++) {
//     if(i===0){
//         let td= document.createElement('td')
//         tr.appendChild(td)
//         td.textContent = " "
//     }
//     else { let tData1 = document.createElement('td')
//     tr.appendChild(tData1)
//     tData1.textContent = hours[i]

//     }
   


Cookies.prototype.render = function () {

let tr1 = document.createElement('tr')
table.appendChild(tr1)
let td= document.createElement('td')
tr1.appendChild(td)
td.textContent = this.name
// let tdt= document.createElement('td')
// tr1.appendChild(tdt)
// tdt.textContent = this.cookiesperHour[1]
 for( let i = 0;i<hours.length ;i++){
   let td5 = document.createElement('td')
   tr1.appendChild(td5)
   td5.textContent= this.cookiesperHour[i]}


//    let tdt= document.createElement('td')
// tr1.appendChild(tdt)
// tdt.textContent = city1.cookiesperHour[1]

//    let tr2 = document.createElement('tr')
//   td.appendChild(tr2)
//     tr2.textContent = this.name
// let tr7 = document.createElement('tr')
// table.appendChild(tr7)
// let td7 = document.createElement('td')
// tr7.appendChild(td7)
// td7.textContent = "total"
}

city1.render()
 city2.render()
   city3.render()
 city4.render()
    city5.render()

Cookies.prototype.render2 = function (){
    let tr7 = document.createElement('tr')
table.appendChild(tr7)
let td7 = document.createElement('td')
tr7.appendChild(td7)
td7.textContent = "total"
let td8 = document.createElement('td')
tr7.appendChild(td8)
td8.textContent = city1.cookiesperHour[0] + city2.cookiesperHour[0] + city3.cookiesperHour[0] + city4.cookiesperHour[0] + city5.cookiesperHour[0]
let td9 = document.createElement('td')
tr7.appendChild(td9)
td9.textContent = city1.cookiesperHour[1] + city2.cookiesperHour[1] + city3.cookiesperHour[1] + city4.cookiesperHour[1] + city5.cookiesperHour[1]
let td10 = document.createElement('td')
tr7.appendChild(td10)
td10.textContent = city1.cookiesperHour[2] + city2.cookiesperHour[2] + city3.cookiesperHour[2] + city4.cookiesperHour[2] + city5.cookiesperHour[2]
let td11 = document.createElement('td')
tr7.appendChild(td11)
td11.textContent = city1.cookiesperHour[3] + city2.cookiesperHour[3] + city3.cookiesperHour[3] + city4.cookiesperHour[3] + city5.cookiesperHour[3]
let td12 = document.createElement('td')
tr7.appendChild(td12)
td12.textContent = city1.cookiesperHour[4] + city2.cookiesperHour[4] + city3.cookiesperHour[4] + city4.cookiesperHour[4] + city5.cookiesperHour[4]
let td13 = document.createElement('td')
tr7.appendChild(td13)
td13.textContent = city1.cookiesperHour[5] + city2.cookiesperHour[5] + city3.cookiesperHour[5] + city4.cookiesperHour[5] + city5.cookiesperHour[5]
let td14 = document.createElement('td')
tr7.appendChild(td14)
td14.textContent = city1.cookiesperHour[6] + city2.cookiesperHour[6] + city3.cookiesperHour[6] + city4.cookiesperHour[6] + city5.cookiesperHour[6]
let td15= document.createElement('td')
tr7.appendChild(td15)
td15.textContent = city1.cookiesperHour[7] + city2.cookiesperHour[7] + city3.cookiesperHour[7] + city4.cookiesperHour[7] + city5.cookiesperHour[7]
let td16 = document.createElement('td')
tr7.appendChild(td16)
td16.textContent = city1.cookiesperHour[8] + city2.cookiesperHour[8] + city3.cookiesperHour[8] + city4.cookiesperHour[8] + city5.cookiesperHour[8]
let td17 = document.createElement('td')
tr7.appendChild(td17)
td17.textContent = city1.cookiesperHour[9] + city2.cookiesperHour[9] + city3.cookiesperHour[9] + city4.cookiesperHour[9] + city5.cookiesperHour[9]
let td18 = document.createElement('td')
tr7.appendChild(td18)
td18.textContent = city1.cookiesperHour[10] + city2.cookiesperHour[10] + city3.cookiesperHour[10] + city4.cookiesperHour[10] + city5.cookiesperHour[10]
let td19 = document.createElement('td')
tr7.appendChild(td19)
td10.textContent = city1.cookiesperHour[11] + city2.cookiesperHour[11] + city3.cookiesperHour[11] + city4.cookiesperHour[11] + city5.cookiesperHour[11]
let td21 = document.createElement('td')
tr7.appendChild(td21)
td21.textContent = city1.cookiesperHour[12] + city2.cookiesperHour[12] + city3.cookiesperHour[12] + city4.cookiesperHour[12] + city5.cookiesperHour[12]
let td20 = document.createElement('td')
tr7.appendChild(td20)
td20.textContent = city1.cookiesperHour[13] + city2.cookiesperHour[13] + city3.cookiesperHour[13] + city4.cookiesperHour[13] + city5.cookiesperHour[13]
let td22 = document.createElement('td')
tr7.appendChild(td22)
td22.textContent = city1.cookiesperHour[14] + city2.cookiesperHour[14] + city3.cookiesperHour[14] + city4.cookiesperHour[14] + city5.cookiesperHour[14]
let td23 = document.createElement('td')
tr7.appendChild(td23)

}
city1.render2()






// const seatle = {
// max:65,
// min:23,
// avarge:6.3,
// total:0,
// hours:['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:'],
// cookeisperHour:[],
// calcCookies:function(){
// for(let i=0; i<14 ; i++){
// this.cookeisperHour.push(Math.ceil(getRandomIntInclusive(23,65)*this.avarge))

// }},
// createList:function(){
// let container = document.getElementById('cookie');
// let h2 = document.createElement('h2')
// container.appendChild(h2);
// h2.textContent ="seatle"
// let lists = document.createElement('ul')
// container.appendChild(lists)
// for(let i=0; i<this.hours.length ;i++){
//     let li = document.createElement('li')
//     lists.appendChild(li)
//     // console.log(this.cookeisperHour)
//     li.textContent = this.hours [i] + this.cookeisperHour[i] 
//     //console.log(this.hours.length)

// }let li = document.createElement('li')
// this.total = this.cookeisperHour.reduce((a, b) => a + b, 0)
// lists.appendChild(li) 
// li.textContent =`total ${this.total}`
// console.log(this.cookeisperHour.reduce((a, b) => a + b, 0))

// },

// }
// seatle.calcCookies()
// seatle.createList()

// function getRandomIntInclusive(min, max){
//     return Math.floor(Math.random() * (max - min + 1) + min)}


// const tokyo = {
// max:24,
// min:3,
// avarge:1.2,
// total:0,
// hours:['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:'],
// cookeisperHour:[],
// calcCookies:function(){
// for(let i=0; i<14 ; i++){
// this.cookeisperHour.push(Math.ceil(getRandomIntInclusive(23,65)*this.avarge))

// }},
// createList:function(){
// let container = document.getElementById('cookie');
// let h2 = document.createElement('h2')
// container.appendChild(h2);
// h2.textContent ="tokyo"
// let lists = document.createElement('ul')
// container.appendChild(lists)
// for(let i=0; i<this.hours.length ;i++){
//     let li = document.createElement('li')
//     lists.appendChild(li)
//     // console.log(this.cookeisperHour)
//     li.textContent = this.hours [i] + this.cookeisperHour[i] 
//     //console.log(this.hours.length)

// }let li = document.createElement('li')
// this.total = this.cookeisperHour.reduce((a, b) => a + b, 0)
// lists.appendChild(li) 
// li.textContent =`total ${this.total}`
// console.log(this.cookeisperHour.reduce((a, b) => a + b, 0))

// },

// }
// tokyo.calcCookies()
// tokyo.createList()

// function getRandomIntInclusive(min, max){
//     return Math.floor(Math.random() * (max - min + 1) + min)}

// const dubai = {
// max:38,
// min:11,
// avarge:3.7,
// total:0,
// hours:['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:'],
// cookeisperHour:[],
// calcCookies:function(){
// for(let i=0; i<14 ; i++){
// this.cookeisperHour.push(Math.ceil(getRandomIntInclusive(23,65)*this.avarge))

// }},
// createList:function(){
// let container = document.getElementById('cookie');
// let h2 = document.createElement('h2')
// container.appendChild(h2);
// h2.textContent ="Dubai"
// let lists = document.createElement('ul')
// container.appendChild(lists)
// for(let i=0; i<this.hours.length ;i++){
//     let li = document.createElement('li')
//     lists.appendChild(li)
//     // console.log(this.cookeisperHour)
//     li.textContent = this.hours [i] + this.cookeisperHour[i] 
//     //console.log(this.hours.length)

// }let li = document.createElement('li')
// this.total = this.cookeisperHour.reduce((a, b) => a + b, 0)
// lists.appendChild(li) 
// li.textContent =`total ${this.total}`
// console.log(this.cookeisperHour.reduce((a, b) => a + b, 0))

// },

// }
// dubai.calcCookies()
// dubai.createList()

// function getRandomIntInclusive(min, max){
//     return Math.floor(Math.random() * (max - min + 1) + min)}

// const paris = {
// max:38,
// min:20,
// avarge:2.3,
// total:0,
// hours:['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:'],
// cookeisperHour:[],
// calcCookies:function(){
// for(let i=0; i<14 ; i++){
// this.cookeisperHour.push(Math.ceil(getRandomIntInclusive(23,65)*this.avarge))

// }},
// createList:function(){
// let container = document.getElementById('cookie');
// let h2 = document.createElement('h2')
// container.appendChild(h2);
// h2.textContent ="paris"
// let lists = document.createElement('ul')
// container.appendChild(lists)
// for(let i=0; i<this.hours.length ;i++){
//     let li = document.createElement('li')
//     lists.appendChild(li)
//     // console.log(this.cookeisperHour)
//     li.textContent = this.hours [i] + this.cookeisperHour[i] 
//     //console.log(this.hours.length)

// }let li = document.createElement('li')
// this.total = this.cookeisperHour.reduce((a, b) => a + b, 0)
// lists.appendChild(li) 
// li.textContent =`total ${this.total}`
// console.log(this.cookeisperHour.reduce((a, b) => a + b, 0))

// },

// }
// paris.calcCookies()
// paris.createList()

// function getRandomIntInclusive(min, max){
//     return Math.floor(Math.random() * (max - min + 1) + min)}

// const lima = {
// max:16,
// min:2,
// avarge:4.6,
// total:0,
// hours:['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:'],
// cookeisperHour:[],
// calcCookies:function(){
// for(let i=0; i<14 ; i++){
// this.cookeisperHour.push(Math.ceil(getRandomIntInclusive(23,65)*this.avarge))

// }},
// createList:function(){
// let container = document.getElementById('cookie');
// let h2 = document.createElement('h2')
// container.appendChild(h2);
// h2.textContent ="lima"
// let lists = document.createElement('ul')
// container.appendChild(lists)
// for(let i=0; i<this.hours.length ;i++){
//     let li = document.createElement('li')
//     lists.appendChild(li)
//     // console.log(this.cookeisperHour)
//     li.textContent = this.hours [i] + this.cookeisperHour[i] 
//     //console.log(this.hours.length)

// }let li = document.createElement('li')
// this.total = this.cookeisperHour.reduce((a, b) => a + b, 0)
// lists.appendChild(li) 
// li.textContent =`total ${this.total}`
// console.log(this.cookeisperHour.reduce((a, b) => a + b, 0))

// },

// }
// lima.calcCookies()
// lima.createList()

// function getRandomIntInclusive(min, max){
//     return Math.floor(Math.random() * (max - min + 1) + min)}