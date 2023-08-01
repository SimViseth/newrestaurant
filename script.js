
document.addEventListener('DOMContentLoaded', function() {
    var buyButtons = document.querySelectorAll('.buy-button');
    var paymentForm = document.getElementById('payment-form');
    var okButton = document.getElementById('ok-button');
    var cancelButton = document.getElementById('cancel-button');
    var foodNameInput = document.getElementById('food-name-input');
    var priceInput = document.getElementById('price-input');

    buyButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            paymentForm.style.display = 'block'; // Display the payment form

            // Retrieve the product information associated with the clicked button
            var productDiv = button.closest('.shadow-sm');
            var productName = productDiv.querySelector('p').textContent;
            var productPrice = productDiv.querySelector('p').textContent;

            // Set the product information in the payment form
            foodNameInput.value = productName;
            priceInput.value = productPrice;
        });
    });

    okButton.addEventListener('click', function() {
        
    });

    cancelButton.addEventListener('click', function(event) {
        event.preventDefault();
        paymentForm.style.display = 'none'; // Hide the payment form
    });
});
