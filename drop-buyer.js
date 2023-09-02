const price_list = document.querySelector("#price-list");
const highest_price_input = document.querySelector("#highest-price");
const drop_by_input = document.querySelector("#drop-by");
const drop_btn = document.querySelector("#drop-btn");



let highest_price = highest_price_input.value * 1;

let dropby = drop_by_input.value * 1 // 1 for 1%
dropby = (dropby / 100 );




function renderList(){
  price_list.innerHTML = "";
  for(let i = 0; i <= 105; i++){
  const one_percent_of_highest = (highest_price*dropby).toFixed(2);
  
  const droped_price = (highest_price - one_percent_of_highest).toFixed(2);
  console.log(droped_price)

  price_list.innerHTML += `${droped_price} <br>`;
  
  highest_price = droped_price;
}
}
renderList();

drop_btn.addEventListener("click",e =>{
  e.preventDefault();
  highest_price = highest_price_input.value * 1;
  dropby = drop_by_input.value * 1;
  dropby = (dropby / 100 );
  
  renderList();
  
})

