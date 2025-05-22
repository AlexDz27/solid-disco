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

/** FOOTER MOBILE **/
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
form.onsubmit = (e) => {
  e.preventDefault()
  if (!agreed.checked) {
    agreedRow.classList.add('form__row--bad')
    return
  }

  console.log('able to send form (todo: show error)')
  overlay.classList.add('overlay--db')
  void overlay.offsetWidth
  overlay.classList.add('overlay--blur')
  setTimeout(() => {
    alert("ОЖИДАЮ ОПЛАТУ: 250 БЕЛ. РУБЛЕЙ")
    overlay.classList.remove('overlay--db')
    overlay.classList.remove('overlay--blur')
  }, 600)
}
agreed.addEventListener('change', function() {
  agreedRow.classList.remove('form__row--bad')
})

/** OVERLAY **/
const overlay = document.getElementById('overlay')
// setTimeout(() => {
//   overlay.classList.add('overlay--db')
//   void overlay.offsetWidth
//   overlay.classList.add('overlay--blur')
// }, 1000)

/** FETCH **/
fetch('/server.php')
  .then(r => r.json())
  .then(r => console.log(r))