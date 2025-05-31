import NavigationBar from "./NavigationBar";

export default function CartSection() {
    return(
        <>
        <NavigationBar />
         <h1>Your Shopping Cart</h1>

    <div class="cart-container">
        <div class="cart-items">
            <h2>Items in Cart</h2>
            <div class="cart-item">
                <img src="https://placehold.co/100x100/d0f0db/43ad67?text=Product+1" alt="Product 1" class="cart-item-image"/>
                <div class="cart-item-details">
                    <h3>Organic Fresh Apples</h3>
                    <p>Category: Fruits</p>
                    <p>Price: $2.99</p>
                    <div class="cart-item-quantity">
                        <button class="decrease-quantity">-</button>
                        <input type="number" value="1" min="1"/>
                        <button class="increase-quantity">+</button>
                    </div>
                </div>
                <div class="cart-item-subtotal">$2.99</div>
                <button class="cart-item-remove"><i class="fas fa-times-circle"></i></button>
            </div>

            <div class="cart-item">
                <img src="https://placehold.co/100x100/d0f0db/43ad67?text=Product+2" alt="Product 2" class="cart-item-image"/>
                <div class="cart-item-details">
                    <h3>Whole Wheat Bread</h3>
                    <p>Category: Bakery</p>
                    <p>Price: $3.50</p>
                    <div class="cart-item-quantity">
                        <button class="decrease-quantity">-</button>
                        <input type="number" value="2" min="1"/>
                        <button class="increase-quantity">+</button>
                    </div>
                </div>
                <div class="cart-item-subtotal">$7.00</div>
                <button class="cart-item-remove"><i class="fas fa-times-circle"></i></button>
            </div>

            <div class="cart-item">
                <img src="https://placehold.co/100x100/d0f0db/43ad67?text=Product+3" alt="Product 3" class="cart-item-image"/>
                <div class="cart-item-details">
                    <h3>Organic Milk (1 Gallon)</h3>
                    <p>Category: Dairy & Eggs</p>
                    <p>Price: $4.75</p>
                    <div class="cart-item-quantity">
                        <button class="decrease-quantity">-</button>
                        <input type="number" value="1" min="1"/>
                        <button class="increase-quantity">+</button>
                    </div>
                </div>
                <div class="cart-item-subtotal">$4.75</div>
                <button class="cart-item-remove"><i class="fas fa-times-circle"></i></button>
            </div>
        </div>

        <div class="cart-summary">
            <h2>Order Summary</h2>
            <div class="summary-row">
                <span>Subtotal:</span>
                <span>$14.74</span>
            </div>
            <div class="summary-row">
                <span>Shipping:</span>
                <span>$5.00</span>
            </div>
            <div class="summary-row">
                <span>Tax (8%):</span>
                <span>$1.18</span>
            </div>
            <div class="summary-row total">
                <span>Total:</span>
                <span>$20.92</span>
            </div>

            <div class="cart-actions">
                <button class="continue-shopping">Continue Shopping</button>
                <button class="checkout">Proceed to Checkout</button>
            </div>
        </div>
    </div>
        </>
    );
}