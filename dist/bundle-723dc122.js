(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
navigator.getBattery().then(function (battery) {
  console.log('Battery charging? ' + (battery.charging ? 'Yes' : 'No'))
  console.log('Battery level: ' + battery.level * 100 + '%')
  console.log('Battery charging time: ' + battery.chargingTime + ' seconds')
  console.log('Battery discharging time: ' + battery.dischargingTime + ' seconds')

  renderBatteries(battery)

  battery.addEventListener('chargingchange', function () {
    console.log('Battery charging? ' + (battery.charging ? 'Yes' : 'No'))
    renderBatteries(battery)
  })

  battery.addEventListener('levelchange', function () {
    console.log('Battery level: ' + battery.level * 100 + '%')
    renderBatteries(battery)
  })

  battery.addEventListener('chargingtimechange', function () {
    console.log('Battery charging time: ' + battery.chargingTime + ' seconds')
    renderBatteries(battery)
  })

  battery.addEventListener('dischargingtimechange', function () {
    console.log('Battery discharging time: ' + battery.dischargingTime + ' seconds')
    renderBatteries(battery)
  })

  function renderBatteries (battery) {
    var batts = document.getElementsByClassName('battery')
    var percentlevel = battery.level * 100 + '%'

    for (var i = 0; i < batts.length; i++) {
      // render battery level
      batts[i].firstChild.style.height = percentlevel

      // render charging icon
      battery.charging ? batts[i].classList.add('charging') : batts[i].classList.remove('charging')
    }
  }
})

},{}]},{},[1]);
