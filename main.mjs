const getData = () => {
  const cities = ['Seoul', 'Tokyo', 'Beijing', 'Paris', 'Berlin', 'London', 'NewYork']
  const randomTemp = () => (Math.random() * 20 + 10).toFixed(1)
  return cities.map(city => ({city, temp: randomTemp()}))
}

const getChart = () => document.getElementById('chart')

const optimize = (event) => {
  const start = performance.now()
  const data = getData()
  const hashData = {}
  data.forEach(d => {
    if (!hashData[d.city.toLocaleLowerCase()]) {
      hashData[d.city.toLocaleLowerCase()] = d.temp
    }
  })
  const $chart = getChart()
  const $bars = document.querySelectorAll('.bar')
  $bars.forEach($bar => {
    const city = $bar.className.replace('bar ', '')
    const temp = parseFloat(hashData[city] * 10) / 300
    $bar.style.transform = `scaleX(${temp})`
    $bar.style.backgroundColor = 'blue'
  })
  const end = performance.now() - start
  document.querySelector('#meter').textContent = `${end}`
}

const optimizeBackground = (event) => {
  const start = performance.now()

  const data = getData()
  const hashData = {}
  data.forEach(d => {
    if (!hashData[d.city.toLocaleLowerCase()]) {
      hashData[d.city.toLocaleLowerCase()] = d.temp
    }
  })
  const $chart = getChart()
  const $bars = document.querySelectorAll('.bar')
  $bars.forEach($bar => {
    const city = $bar.className.replace('bar ', '')
    const temp = parseFloat(hashData[city] * 10) / 300
    $bar.style.transform = `scaleX(${temp})`
    $bar.style.background = 'green'
  })
  const end = performance.now() - start
  document.querySelector('#meter').textContent = `${end}`
}

const unoptimize = (event) => {
  const start = performance.now()

  const data = getData()
  const $chart = getChart()
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    const city = element.city
    const temp = element.temp
    const selector = `.bar.${city.toLowerCase()}`
    const $bar = document.querySelector(selector)
    $bar.style.background = 'red'
    $bar.style.width = `${temp * 10}px`
  }
  const end = performance.now() - start
  document.querySelector('#meter').textContent = `${end}`
}

document.getElementById('unoptimize').addEventListener('click', unoptimize, { passive: true })
document.getElementById('optimize').addEventListener('click', optimize, { passive: true })
document.getElementById('optimize-background').addEventListener('click', optimizeBackground, { passive: true })
document.getElementById('opacity-1').addEventListener('click', (event) => {
  const start = performance.now()
  const $bars = document.querySelectorAll('.bar')
  $bars.forEach($bar => {
    $bar.style.opacity = `1`
  })
  const end = performance.now() - start
  document.querySelector('#meter').textContent = `${end}`
}, { passive: true })
document.getElementById('opacity-0').addEventListener('click', (event) => {
  const start = performance.now()
  const $bars = document.querySelectorAll('.bar')
  $bars.forEach($bar => {
    $bar.style.opacity = `0`
  })
  const end = performance.now() - start
  document.querySelector('#meter').textContent = `${end}`
}, { passive: true })
document.getElementById('visibility-visible').addEventListener('click', (event) => {
  const start = performance.now()
  const $bars = document.querySelectorAll('.bar')
  $bars.forEach($bar => {
    $bar.style.visibility = 'visible'
  })
  const end = performance.now() - start
  document.querySelector('#meter').textContent = `${end}`
}, { passive: true })
document.getElementById('visibility-hidden').addEventListener('click', (event) => {
  const start = performance.now()
  const $bars = document.querySelectorAll('.bar')
  $bars.forEach($bar => {
    $bar.style.visibility = 'hidden'
  })
  const end = performance.now() - start
  document.querySelector('#meter').textContent = `${end}`
}, { passive: true })
