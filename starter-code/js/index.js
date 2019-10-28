// ITERATION 1



function updateSubtotal($product) {
  const $price = parseFloat($product.querySelector('.price span').innerText);
  const $quantity = $product.querySelector('.quantity input').valueAsNumber;
  const $subtotal = $price * $quantity;
  return $product.querySelector('.subtotal span').innerText = $subtotal;
}


function calculateAll() {
  let $allRows = document.querySelectorAll('#cart tbody tr');
  let $total = 0;
  for ($row of $allRows) {
    $total += updateSubtotal($row);
  }
  document.querySelector('#total-value span').innerText = $total;
}

const $calculateTrigger = document.getElementById('calculate');

$calculateTrigger.addEventListener('click', calculateAll);

// ITERATION 445

function addProductRemoveListener($removeButton) {
  // ...
}

// ITERATION 5

function createProduct(event) {
  // ...
}