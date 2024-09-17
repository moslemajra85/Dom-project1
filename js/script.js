const cards = document.querySelectorAll('.card');
const totalPrice = document.querySelector('.total');
let prices = [];
let quantities = [];

function calculateTotalPrice() {
  let total = 0;
  const pricesEl = document.querySelectorAll('.unit-price');

  // convert pricesEl which is a NodeList into an array
  // map the array into an array of numbers
  prices = Array.from(pricesEl).map((price) => parseInt(price.textContent));

  const quantitiesEl = document.querySelectorAll('.quantity');

  // convert quantitiesEl which is a NodeList into an array
  // map the array into an array of numbers
  quantities = Array.from(quantitiesEl).map((quantity) =>
    parseInt(quantity.textContent)
  );

  // calculate Total Price
  for (let i = 0; i < prices.length; i++) {
    total += prices[i] * quantities[i];
  }

  return total;
}

cards.forEach((card) => {
  const plusIcon = card.querySelector('.fa-plus-circle');
  const minusIcon = card.querySelector('.fa-minus-circle');
  const heartIcon = card.querySelector('.fa-heart');
  const trashIcon = card.querySelector('.fa-trash-alt');

  const qty = card.querySelector('.quantity');
  let qytValue = parseInt(qty.textContent);

  // add event listener on plus icon
  plusIcon.addEventListener('click', () => {
    qytValue++;
    qty.textContent = qytValue;
    totalPrice.textContent = calculateTotalPrice();
  });

  // add event listener on minus icon
  minusIcon.addEventListener('click', () => {
    if (qytValue > 0) {
      qytValue--;
      qty.textContent = qytValue;
      totalPrice.textContent = calculateTotalPrice();
    }
  });

  // add Event listener on heart icons
  heartIcon.addEventListener('click', () => {
    heartIcon.classList.toggle('liked');
  });

  // add Event listener on trash icons
  trashIcon.addEventListener('click', () => {
    card.remove();
    totalPrice.textContent = calculateTotalPrice();
  });
});
