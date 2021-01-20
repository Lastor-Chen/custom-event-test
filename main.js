console.log('running')

const canvas = document.querySelector('#canvas')
const context = canvas.getContext('2d')
const output = document.querySelector('#output')
const custom = document.querySelector('#custom')

// 繪製 2d 圖
const rectA = {
  color: 'red',
  left: 25,
  top: 0,
  width: 100,
  height: 100,
}

const rectB = {
  color: 'blue',
  left: rectA.left + rectA.width + 50,
  top: 0,
  width: 100,
  height: 100,
}

context.fillStyle = rectA.color
context.fillRect(rectA.left, rectA.top, rectA.width, rectA.height)

context.fillStyle = rectB.color
context.fillRect(rectB.left, rectB.top, rectB.width, rectB.height)

// onClick
function checkPosition(x, y, rect) {
  return (
    rect.left < x &&
    x < rect.left + rect.width &&
    rect.top < y &&
    y < rect.top + rect.height
  )
}

canvas.addEventListener('click', (e) => {
  // 滑鼠點擊位置
  const x = e.pageX - canvas.offsetLeft
  const y = e.pageY - canvas.offsetTop
  console.log(x, y)

  const isRectA = checkPosition(x, y, rectA)
  const isRectB = checkPosition(x, y, rectB)

  if (isRectA) {
    output.innerText = 'Click Red'
    return canvas.dispatchEvent(reactAEvent)
  }

  if (isRectB) {
    output.innerText = 'Click Blue'
    return canvas.dispatchEvent(reactBEvent)
  }
})

// 自訂 Event =============================
var reactAEvent = new CustomEvent('reactA', {
  detail: {
    target: 'reactA',
  },
})

var reactBEvent = new CustomEvent('reactB', {
  detail: {
    target: 'reactB',
  },
})

canvas.addEventListener('reactA', (e) => {
  custom.innerText = e.detail.target
})

canvas.addEventListener('reactB', (e) => {
  custom.innerText = e.detail.target
})
