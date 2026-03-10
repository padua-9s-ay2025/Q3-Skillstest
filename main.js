function checkFees () { 
    const TICKET_PRICE = 250; 
    const ADMIN_FEE = 50;
    let ticketQuantity = document.getElementById("ticketQuantity").value; 
    let subtotal = TICKET_PRICE * ticketQuantity;
    let totalPrice = subtotal + ADMIN_FEE;
    document.getElementById("totalPrice").innerText = "Total Price: ₱" + totalPrice.toFixed(2);
    document.getElementById("subtotal").innerText = "Subtotal: ₱" + subtotal.toFixed(2);
    document.getElementById("ADMIN_FEE").innerText = "Admin Fee: ₱" + ADMIN_FEE.toFixed(2);
}