  
document.addEventListener('DOMContentLoaded', () => {

  const selectDrop = document.querySelector('#countries');
  // const selectDrop = document.getElementById('countries');


  fetch('https://restcountries.com/v3.1/all').then(res => {
    return res.json();
  }).then(data => {
    let output = "";
      data.forEach(country => {
       // console.log(country)
      output += `
      
      <option value="${country.capital}">${country.capital}</option>`;
    })

    selectDrop.innerHTML = output;
  }).catch(err => {
    console.log(err);
  })


});