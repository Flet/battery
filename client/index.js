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
