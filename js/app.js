'use strict'
function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
let array = []
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'dailey location Total']
let container = document.getElementById('cookie')
let table = document.createElement('table')
container.appendChild(table)

function Cookies(cityName, max, min, avarage) {
    this.name = cityName;
    this.max = max;
    this.min = min;
    this.avarage = avarage;
    this.cookiesperHour = [];
    this.total = 0;
    this.TOTAL = 0;
    array.push(this)

}


let city1 = new Cookies('seatle', 23, 65, 6.3)
let city2 = new Cookies('tokyo', 24, 3, 1.2)
let city3 = new Cookies('dubai', 38, 11, 3.7)
let city4 = new Cookies('paris', 38, 20, 2.3)
let city5 = new Cookies('lima', 16, 2, 4.6)

Cookies.prototype.calcCookies = function () {
    // console.log(this.total)
    for (let i = 0; i < hours.length -1; i++) {
        let value = Math.ceil(getRandomIntInclusive(this.min, this.max) * this.avarage)
        this.cookiesperHour.push(value)
        this.total += value
        // this.TOTAL += this.total
        // console.log(this.total)
        // console.log(this.TOTAL)
    }

    console.log(this.total)

}

console.log(city2)
city1.calcCookies()
city2.calcCookies()
city3.calcCookies()
city4.calcCookies()
city5.calcCookies()
console.log(array)


function headerraw() {
    let tr = document.createElement('tr')
    table.appendChild(tr)
    let empty = document.createElement('th')
    tr.appendChild(empty)
    for (let i = 0; i < hours.length ; i++) {
        let headerROW = document.createElement('th')
        tr.appendChild(headerROW)
        headerROW.textContent = hours[i]
    }


}

headerraw()




Cookies.prototype.render = function () {

    let tr1 = document.createElement('tr')
    table.appendChild(tr1)
    let td = document.createElement('td')
    tr1.appendChild(td)
    td.textContent = this.name

    for (let i = 0; i < hours.length -1; i++) {
        let td5 = document.createElement('td')
        tr1.appendChild(td5)
        td5.textContent = this.cookiesperHour[i]

    }
    let totaldata = document.createElement('td')
    tr1.appendChild(totaldata)
    totaldata.textContent = this.total



}

city1.render()
city2.render()
city3.render()
city4.render()
city5.render()


function lastrow () {
    let lastrrrow = document.createElement('tr')
    table.appendChild(lastrrrow)
    let firstTotal = document.createElement('td')
    lastrrrow.appendChild(firstTotal)
    firstTotal.textContent = "total"
    let summ = 0
    let td = null
    let totalOF = 0
     for (let i = 0; i <hours.length -1; i++){
         summ=0
    for (let j = 0; j<array.length -1; j++){
        // for (let i = 0; i < 13; i++){
        summ += array[j].cookiesperHour[i] 
        // td = document.createElement('td')
        // lastrrrow.appendChild(td)
        // td.textContent = summ


    } td = document.createElement('td')
    lastrrrow.appendChild(td)
    td.textContent = summ
     totalOF += summ

}
console.log(totalOF)
td= document.createElement('td')
lastrrrow.appendChild(td)
td.textContent = totalOF
}

lastrow()

const form = document.getElementById('salmonform')
form.addEventListener('submit', handleSubmit)
function handleSubmit(event) {
    event.preventDefault()
    let theCity = event.target.cityname.value
    console.log(theCity)
    let maxnum = event.target.maxNum.value
    console.log(maxnum)
    let minnum = event.target.minNum.value
    console.log(minnum)
    let theavarge = event.target.avarge.value
    console.log(theavarge)
    let newcity = new Cookies(theCity, maxnum, minnum, theavarge)
    newcity.calcCookies()
    newcity.render()
    
    
}

// $( "<p>Test</p>" ).insertBefore( ".inner
// function deleterow(cookie) {
//     var table = document.getElementById(cookie);
//     var rowCount = table.hours.length;

//     table.deleteRow(rowCount -1);
// }
