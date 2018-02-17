// .setTimeout(() => {alert("HAMMERTIME")}, 5000)


function hammerTime (time) {
  window.setTimeout(callback, time)
  function callback () {
    alert(`${time} is hammertime!`)
  }
}

hammerTime(5000)
