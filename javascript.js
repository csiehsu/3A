const button = document.getElementById('query-button')
const text = document.getElementById('input-text')
const table = document.getElementById('result-table')
const tableBody = document.getElementById('result-table-body')
const alert = document.getElementById('alert')

button.addEventListener('click', event => {
  const email = text.value
  table.classList.add('d-none')
  button.innerHTML = '查詢中...'
  //google.script.run.withSuccessHandler(querySuccess).withFailureHandler(queryFail).getCertifications(email)
  //table.classList.remove('d-none')
  alert.classList.remove('d-none')
})

function querySuccess(status) {
  button.innerHTML = '查詢完畢'
}

function queryFail(status) {
  button.innerHTML = status
}
