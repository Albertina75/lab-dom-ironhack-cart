document.addEventListener('DOMContentLoaded', function() {
  // Tu código JavaScript aquí

  // ITERATION 1
  function updateSubtotal(product) {
    console.log('Calculating subtotal, yey!');

    //... your code goes here

    // Obtenemos la cantidad del producto como un valor numérico
    const quantity = +product.querySelector('.quantity input').value;
    console.log(' ~ file:index js:25 ~ updateSubtotal ~ quantity:', quantity);

    // Recuperamos el valor del producto
    const price = +product.querySelector('.price span').textContent;
    console.log(' ~ file:index js:18 ~ updateSubtotal ~ precio:', price);

    // Cálculo del subtotal del producto
    const subtotal = quantity * price;
    product.querySelector('.subtotal span').textContent = subtotal;
    console.log(' ~ file index.js:19 ~ updateSubtotal ~ subtotal:', subtotal);

    return subtotal;
  }

  // ITERATION 2
  //... your code goes here
  function calculateAll() {
    console.log('Calculate all prices...');

    // Selecciono todos los elementos con clase CSS
    const products = document.querySelectorAll('.product');

    let total = 0;

    products.forEach(product => {
      // Encuentra los elementos necesarios dentro de cada fila
      const totalPriceElement = product.querySelector('.price span');
      const quantityElement = product.querySelector('.quantity input');
      const subtotalElement = product.querySelector('.subtotal span');

      // Obtiene el precio, la cantidad y calcula el subtotal para cada producto
      const price = parseFloat(totalPriceElement.textContent);
      const quantity = parseFloat(quantityElement.value);

      const subtotal = price * quantity;
      subtotalElement.textContent = subtotal.toFixed(2);

      // Suma el subtotal al total
      total += subtotal;
    });

    const totalValue = document.querySelector('#total-value span');
    totalValue.textContent = total.toFixed(2);
  }

  // Asigna el evento click al botón 'Calculate Prices'
  const calculateButton = document.querySelector('#calculate');
  calculateButton.addEventListener('click', calculateAll);
  function removeProduct(event) {
    const target = event.currentTarget;
    const product = target.closest('.product');
    product.remove();
  }
  
  // Asigna la función removeProduct a los botones "Remove"
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(function (button) {
    button.addEventListener('click', removeProduct);
  });
  
});
