const input = document.getElementById('input')
input.addEventListener('input', function() {
  this.value = this.value.toUpperCase()
})