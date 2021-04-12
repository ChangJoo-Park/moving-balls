const nextPosition = (id) => {
  const $container = document.querySelector(id)
  const width = $container.clientWidth
  const height = $container.clientHeight
  return { top: Math.random() * height, left: Math.random() * width }
}

document.querySelector('#paint #add-ball').addEventListener('click', (evt) => {
  const $container = document.querySelector('#paint')
  const moveBall = (id) => {
    const position = nextPosition('#paint')
    const $ball =  document.getElementById(id)
    $ball.style.left = `${position.left}px`
    $ball.style.top = `${position.top}px`
    setTimeout(() => {
      moveBall(id)
    }, 1000);
  }
  const createBall = () => {
    const $ball = document.createElement('div')
    $ball.style.width = '10px'
    $ball.style.height = '10px'
    $ball.style.position = 'absolute'
    $ball.style.backgroundColor = 'white'
    $ball.style.borderRadius = '10px'
    $ball.id = performance.now()
    $ball.className = 'ball'
    return $ball
  }
  const count = document.querySelector('#paint #count').value
  for (let index = 0; index < count; index++) {
    setTimeout(() => {
      const $ball = createBall()
      $container.appendChild($ball)
      moveBall($ball.id)
    }, 0);
  }
})

document.querySelector('#transform #add-ball').addEventListener('click', (evt) => {
  const $container = document.querySelector('#transform')
  const moveBall = (id) => {
    const position = nextPosition('#transform')
    const $ball =  document.getElementById(id)
    $ball.style.transform = `translate3d(${position.left}px, ${position.top}px, 0)`
    setTimeout(() => {
      moveBall(id)
    }, 1000);
  }
  const createBall = () => {
    const $ball = document.createElement('div')
    $ball.style.width = '10px'
    $ball.style.height = '10px'
    $ball.style.backgroundColor = 'black'
    $ball.style.position = 'fixed'
    $ball.style.borderRadius = '10px'
    $ball.id = performance.now()
    $ball.className = 'ball'
    return $ball
  }

  const count = document.querySelector('#transform #count').value
  for (let index = 0; index < count; index++) {
    setTimeout(() => {
      const $ball = createBall()
      $container.appendChild($ball)
      moveBall($ball.id)
    }, 0);
  }
})

document.querySelector('#paint #clear-ball').addEventListener('click', (evt) => {
  const balls = document.querySelectorAll('#paint .ball')
  balls.forEach($ball => {
    $ball.remove()
  })
})

document.querySelector('#transform #clear-ball').addEventListener('click', (evt) => {
  const balls = document.querySelectorAll('#transform .ball')
  balls.forEach($ball => {
    $ball.remove()
  })
})
