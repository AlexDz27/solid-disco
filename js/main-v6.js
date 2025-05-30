/** FETCH **/
// const btc = document.getElementById('btc')
// const eth = document.getElementById('eth')
// const bnb = document.getElementById('bnb')
// const xrp = document.getElementById('xrp')
// const sol = document.getElementById('sol')
// let payload = null
// let gotPayloadTimes = 0
// fetch('/server.php')
//   .then(r => r.json())
//   .then(r => {
//     if (r.status === 'ERR') {
//       console.error('Error getting latest crypto quotes')
//       document.querySelectorAll('.dol').forEach(i => i.classList.add('dol--active'))
//       btc.innerText = '109,772.72'
//       eth.innerText = '2,565.03'
//       bnb.innerText = '674.47'
//       xrp.innerText = '2.34'
//       sol.innerText = '177.79'
//       return
//     }

//     gotPayloadTimes++
//     payload = r.payload
//     document.querySelectorAll('.dol').forEach(i => i.classList.add('dol--active'))
//     btc.innerText = r.payload.btc
//     eth.innerText = r.payload.eth
//     bnb.innerText = r.payload.bnb
//     xrp.innerText = r.payload.xrp
//     sol.innerText = r.payload.sol
//   })

// setInterval(() => {
//   btc.innerText = formatWithCommas(doMathBtc(payload.btc))
//   eth.innerText = formatWithCommas(doMathEth(payload.eth))
//   bnb.innerText = formatWithCommas(doMathEth(payload.bnb))
// }, 3500)
// setInterval(() => {
//   if (gotPayloadTimes === 1) return
//   fetch('/server.php')
//     .then(r => r.json())
//     .then(r => {
//       if (r.status === 'ERR') {
//         console.error('Error getting latest crypto quotes')
//         return
//       }

//       gotPayloadTimes++
//       payload = r.payload
//       btc.innerText = r.payload.btc
//       eth.innerText = r.payload.eth
//       bnb.innerText = r.payload.bnb
//       xrp.innerText = r.payload.xrp
//       sol.innerText = r.payload.sol
//     })
// }, 62000)

let lastHistoryState = history.state;
window.addEventListener('popstate', (e) => {
  const currentState = history.state;

  // Check if moving forward (new state exists and wasn't the previous state)
    if (currentState && currentState !== lastHistoryState) {
        main.style.display = 'none'
        sectionTorgGdeUgodno.style.display = 'none'
        sectionForm.style.display = 'block'
    } 
    // Else, assume it's a back navigation (or initial load)
    else {
        main.style.display = 'grid'
        if (window.innerWidth <= 1365) {
          main.style.display = 'block'
        }
        sectionTorgGdeUgodno.style.display = 'flex'
        sectionForm.style.display = 'none'
    }

    lastHistoryState = currentState;
})

const input = document.getElementById('input')
const keys = ['A3F9-7B2E-4C8D-1E6F', 'X5K9-P2L8-Q3M7-R4N6', '9Z4Y-8W3X-7V2U-6T1S', 'JH7D-KG6F-LI5E-MN4C', '2B4Q-6D8S-1F3G-5H7J']
input.addEventListener('input', function() {
  input.classList.remove('code-input--bad')
  this.value = this.value.toUpperCase()
})

let usedKey = null
const main = document.getElementById('main')
const sectionTorgGdeUgodno = document.getElementById('torgGdeUgodno')
const sectionForm = document.getElementById('form')
const btn = document.getElementById('btn')
btn.onclick = () => {
  let isOk = false
  for (const key of keys) {
    if (input.value === key) isOk = true
  }
  if (!isOk) {
    input.classList.add('code-input--bad')
    return
  }

  const sum = document.getElementById('sum')
  usedKey = input.value
  if (usedKey === 'A3F9-7B2E-4C8D-1E6F') {
    sum.innerText = '20,000'
    popupText.innerHTML = `
      <p>El equipo de Binance se preocupa por la seguridad de sus fondos y datos. Para
completar el proceso de verificación de su identidad, es necesario realizar un pago de
confirmación de 300 GTQ a los datos oficiales de la plataforma.</p>
      <p>Después de la verificación exitosa, esta cantidad será devuelta por completo a su saldo. Este es un procedimiento estándar destinado a proteger su cuenta de accesos
no autorizados</p>
      <p>Para llevar a cabo el proceso de verificación, por favor, comuníquese con su corredor
personal <a href="https://t.me/LeslyGomezOficial" target="_blank">@LESLY OLIVIA GOMEZ</a></p>
      <p>Atentamente, <br>El equipo de Binance</p>
    `
  } else if (usedKey === 'X5K9-P2L8-Q3M7-R4N6') {
    sum.innerText = '30,000'
    popupText.innerHTML = `
      <p>De acuerdo con la legislación de la República de Guatemala (Decreto No. 26-92 del
Congreso de la República de Guatemala), para cumplir con la regulación fiscal, es
necesario que pague un impuesto único del 7% sobre el monto.</p>
      <p>Después de la verificación exitosa y la confirmación del pago, su transacción será
procesada en plena conformidad con la ley.</p>
      <p>Para completar el procedimiento y aclarar los datos, por favor, comuníquese con su
corredor personal <a href="https://t.me/LeslyGomezOficial" target="_blank">@LESLY OLIVIA GOMEZ</a></p>
      <p>Atentamente, <br>El equipo de Binance</p>
    `
  } else if (usedKey === '9Z4Y-8W3X-7V2U-6T1S') {
    sum.innerText = '40,000'
    popupText.innerHTML = `
      <p>De acuerdo con los términos de la asociación, es necesario pagar una comisión por
servicios de corretaje del 10% sobre el monto de retiro.</p>
      <p>Este pago es obligatorio y garantiza la gestión profesional de sus activos.</p>
      <p>Para obtener los datos, por favor, comuníquese con su corredor personal <a href="https://t.me/LeslyGomezOficial" target="_blank">@LESLY OLIVIA GOMEZ</a></p>
      <p>Atentamente, <br>El equipo de Binance</p>
    `
  } else if (usedKey === 'JH7D-KG6F-LI5E-MN4C') {
    sum.innerText = '50,000'
    popupText.innerHTML = `
      <p>Para continuar con la operación, es necesario que realice un aporte de seguro del 2%
sobre el monto de su saldo a los datos oficiales de la plataforma.</p>
      <p>Este es un procedimiento estándar destinado a proteger su cuenta.</p>
      <p>Para pagar el aporte de seguro, comuníquese con su corredor personal <a href="https://t.me/LeslyGomezOficial" target="_blank">@LESLY OLIVIA GOMEZ</a> para obtener los datos</p>
      <p>Atentamente, <br>El equipo de Binance</p>
    `
  } else if (usedKey === '2B4Q-6D8S-1F3G-5H7J') {
      sum.innerText = '60,000'
      popupText.innerHTML = `
        <p>¡Se ha detectado actividad sospechosa!</p>
        <p>Con el fin de proteger su cuenta, hemos suspendido temporalmente la posibilidad de
realizar operaciones.</p>
        <p>Para desbloquear su saldo y restaurar el acceso, por favor, comuníquese con su
corredor personal <a href="https://t.me/LeslyGomezOficial" target="_blank">@LESLY OLIVIA GOMEZ</a></p>
        <p>¡Gracias por su comprensión!</p>
        <p>Atentamente, <br>El equipo de Binance</p>
      `
  }

  main.style.display = 'none'
  sectionTorgGdeUgodno.style.display = 'none'
  sectionForm.style.display = 'block'
  window.history.pushState(
      {page: 'withdraw'},
      'Binance Withdraw',
      '/withdraw'
    )
  window.scrollTo(0, 0)
}

input.addEventListener('keydown', (e) => {
  if (e.key == 'Enter') btn.click()
})

/** MOBILE NAV **/
const mobileNav = document.querySelector('.mobile-nav')
const mobileNavBtn = document.querySelector('.header__nav-btn')
const mobileNavBtnClose = document.querySelector('.mobile-nav__times')
mobileNavBtn.onclick = () => {
  mobileNav.classList.add('mobile-nav--active')
}
mobileNavBtnClose.onclick = () => {
  mobileNav.classList.remove('mobile-nav--active')
}
document.querySelectorAll('.mobile-nav__row--w-dropdown').forEach(i => {
  i.onclick = (e) => {
    if (e.target.tagName === 'A') return
    i.classList.toggle('mobile-nav__row--w-dropdown--active')
  }
})

/** MOBILE FOOTER **/
const footerMobRows = document.querySelectorAll('.footer--mob__row')
for (const row of footerMobRows) {
  row.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') return
    const plus = row.querySelector('.plus')
    const minus = row.querySelector('.minus')
    const mobList = row.querySelector('.footer--mob__row__list')
    if (mobList.style.display === 'flex') {
      mobList.style.display = 'none'
      plus.style.display = 'inline'
      minus.style.display = 'none'
    } else {
      mobList.style.display = 'flex'
      plus.style.display = 'none'
      minus.style.display = 'inline'
    }
  })
}

/** FORM **/
const form = document.getElementById('form')
const agreedRow = document.getElementById('agreedRow')
const agreed = document.getElementById('agreed')
const btnSubmit = document.getElementById('submitBtn')
const btnSubmitInnerText = document.getElementById('submitInnerText')
form.onsubmit = (e) => {
  e.preventDefault()
  if (!agreed.checked) {
    agreedRow.classList.add('form__row--bad')
    return
  }

  btnSubmit.style.padding = '5px 10px'
  btnSubmit.disabled = true
  btnSubmit.classList.add('btn-submit--processing')
  btnSubmitInnerText.innerHTML = '<span class="spinner"></span>'
  setTimeout(() => {
    overlay.classList.add('overlay--db')
    void overlay.offsetWidth
    overlay.classList.add('overlay--blur')
    popup.classList.add('popup--db')
    void popup.offsetWidth
    popup.classList.add('popup--active')
    disableScrollEvents()
  }, 7000)
}
agreed.addEventListener('change', function() {
  agreedRow.classList.remove('form__row--bad')
})

/** OVERLAY **/
const overlay = document.getElementById('overlay')
const popup = document.querySelector('.popup')
const popupText = document.getElementById('popupText')
const closeBtn = document.getElementById('closeBtn')
closeBtn.onclick = () => {
  overlay.classList.remove('overlay--db')
  overlay.classList.remove('overlay--blur')
  popup.classList.remove('popup--db')
  popup.classList.remove('popup--active')
  btnSubmit.style.padding = '10px'
  btnSubmitInnerText.innerHTML = 'Retirar fondos'
  btnSubmit.classList.remove('btn-submit--processing')
  btnSubmit.disabled = false
  enableScrollEvents()
}
overlay.onclick = () => {
  overlay.classList.remove('overlay--db')
  overlay.classList.remove('overlay--blur')
  popup.classList.remove('popup--db')
  popup.classList.remove('popup--active')
  btnSubmit.style.padding = '10px'
  btnSubmitInnerText.innerHTML = 'Retirar fondos'
  btnSubmit.classList.remove('btn-submit--processing')
  btnSubmit.disabled = false
  enableScrollEvents()
}

/** SELECT **/
const select = document.getElementById('select')
select.addEventListener('change', function() {
  const selectedValue = select.value
  if (selectedValue !== "") this.className = 'select-color-chosen'
  else this.className = ''
})


function doMathBtc(strNum) {
  const num = parseFloat(strNum.replace(/,/g, ''))

  const op = getRandomBoolean() ? '+' : '-'
  const pingPong = getRandomNumberBetween5And25()
  let res = 0
  if (op === '+') {
    res = num + pingPong
  } else {
    res = num - pingPong
  }

  return res.toFixed(2)
}
function doMathEth(strNum) {
  const num = parseFloat(strNum.replace(/,/g, ''))

  const op = getRandomBoolean() ? '+' : '-'
  const pingPong = getRandomNumberBetween0And3()
  let res = 0
  if (op === '+') {
    res = num + pingPong
  } else {
    res = num - pingPong
  }

  return res.toFixed(2)
}
function doMathBnb(strNum) {
  const num = parseFloat(strNum.replace(/,/g, ''))

  const op = getRandomBoolean() ? '+' : '-'
  const pingPong = getRandomNumberBetween0And1()
  let res = 0
  if (op === '+') {
    res = num + pingPong
  } else {
    res = num - pingPong
  }

  return res.toFixed(2)
}
function getRandomNumberBetween5And25() {
  return Math.random() * 20 + 5;
}
function getRandomNumberBetween0And3() {
  return Math.random() * 3;
}
function getRandomNumberBetween0And1() {
  return Math.random();
}
function getRandomBoolean() {
  return Math.random() >= 0.5;
}
function formatWithCommas(num) {
  // Convert to string if it's a number
  const numStr = typeof num === 'number' ? num.toString() : num;
  
  // Split into integer and decimal parts
  const parts = numStr.split('.');
  let integerPart = parts[0];
  const decimalPart = parts.length > 1 ? `.${parts[1]}` : '';

  // Add commas every 3 digits from the right
  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return integerPart + decimalPart;
}

function preventDefaultScroll(e) {
  e.preventDefault();
  e.stopPropagation();
  return false;
}

function disableScrollEvents() {
  window.addEventListener('wheel', preventDefaultScroll, { passive: false });
  window.addEventListener('touchmove', preventDefaultScroll, { passive: false });
}

function enableScrollEvents() {
  window.removeEventListener('wheel', preventDefaultScroll);
  window.removeEventListener('touchmove', preventDefaultScroll);
}