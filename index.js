const days =document.getElementById("day")
const hours =document.getElementById("hour")
const minutes =document.getElementById("min")
const seconds =document.getElementById("second")


const newYear = "1 January 2024"

function countDown(){
    const newYearDate = new Date(newYear)
    const currentDate = new Date()
    
    const totalSeconds = (newYearDate - currentDate) / 1000
   
    const day = Math.floor(totalSeconds / 3600/ 24)
    const hour = Math.floor(totalSeconds / 3600) % 24
    const minute = Math.floor(totalSeconds / 60) % 60
    const second = Math.floor(totalSeconds) % 60




  days.innerHTML = day
  hours.innerHTML = formateDate(hour)
  minutes.innerHTML = formateDate(minute)
  seconds.innerHTML = formateDate(second)
    
}

function formateDate(time){
    return time < 10 ? `0${time}` : time
}


countDown()

setInterval(countDown, 1000)