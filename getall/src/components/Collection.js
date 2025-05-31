import NavigationBar from "./NavigationBar";

export default function Collection() {
    return(
        <>
        <NavigationBar />
         <section class="hero-section">
        <div class="hero-content">
            <h1>Explore Our Diverse Collections</h1>
            <p>Discover a wide range of electronics, gadgets, and home appliances, meticulously curated to meet your needs.</p>
            <a href="#featured-collections" class="btn btn-primary">Browse All Collections</a>
        </div>
    </section>

    <main class="main-content">

        <section class="collection-category" id="mobiles-collection">
            <h2 class="category-title">Mobiles</h2>
            <p class="category-description">Stay connected with the latest smartphones from top brands. Find your perfect device.</p>
            <div class="product-grid">
                <div class="product-card">
                    <img src="https://placehold.co/300x200/E0E0E0/333333?text=Smartphone+X" alt="Smartphone X" class="product-image"/>
                    <h3 class="product-name">Smartphone X Pro</h3>
                    <p class="product-description">High-performance, sleek design with an amazing camera.</p>
                    <span class="product-price">NPR 75,000</span>
                    <button class="btn btn-secondary">View Details</button>
                </div>
                <div class="product-card">
                    <img src="https://placehold.co/300x200/E0E0E0/333333?text=Smartphone+Y" alt="Smartphone Y" class="product-image"/>
                    <h3 class="product-name">Smartphone Y Lite</h3>
                    <p class="product-description">Budget-friendly, long battery life, perfect for everyday use.</p>
                    <span class="product-price">NPR 35,000</span>
                    <button class="btn btn-secondary">View Details</button>
                </div>
                <div class="product-card">
                    <img src="https://placehold.co/300x200/E0E0E0/333333?text=Smartphone+Z" alt="Smartphone Z" class="product-image"/>
                    <h3 class="product-name">Smartphone Z Ultra</h3>
                    <p class="product-description">Flagship model with cutting-edge technology and display.</p>
                    <span class="product-price">NPR 120,000</span>
                    <button class="btn btn-secondary">View Details</button>
                </div>
            </div>
        </section>

        <section class="collection-category" id="laptops-collection">
            <h2 class="category-title">Laptops</h2>
            <p class="category-description">Powerful laptops for work, study, and entertainment. Choose from ultrabooks to gaming rigs.</p>
            <div class="product-grid">
                <div class="product-card">
                    <img src="https://placehold.co/300x200/E0E0E0/333333?text=Laptop+A" alt="Laptop A" class="product-image"/>
                    <h3 class="product-name">Ultrabook Pro 13</h3>
                    <p class="product-description">Ultra-portable and powerful, ideal for professionals on the go.</p>
                    <span class="product-price">NPR 90,000</span>
                    <button class="btn btn-secondary">View Details</button>
                </div>
                <div class="product-card">
                    <img src="https://placehold.co/300x200/E0E0E0/333333?text=Laptop+B" alt="Laptop B" class="product-image"/>
                    <h3 class="product-name">Gaming Beast 15</h3>
                    <p class="product-description">Gaming beast with stunning graphics and high refresh rate display.</p>
                    <span class="product-price">NPR 150,000</span>
                    <button class="btn btn-secondary">View Details</button>
                </div>
                <div class="product-card">
                    <img src="https://placehold.co/300x200/E0E0E0/333333?text=Laptop+C" alt="Laptop C" class="product-image"/>
                    <h3 class="product-name">Student Edition 14</h3>
                    <p class="product-description">Reliable and affordable for students and everyday tasks.</p>
                    <span class="product-price">NPR 60,000</span>
                    <button class="btn btn-secondary">View Details</button>
                </div>
            </div>
        </section>

        <section class="collection-category" id="home-appliances-collection">
            <h2 class="category-title">Home Appliances</h2>
            <p class="category-description">Modernize your home with our range of efficient and smart home appliances.</p>
            <div class="product-grid">
                <div class="product-card">
                    <img src="https://placehold.co/300x200/E0E0E0/333333?text=Smart+TV" alt="Smart TV" class="product-image"/>
                    <h3 class="product-name">Smart LED TV 55"</h3>
                    <p class="product-description">Immersive viewing experience with 4K resolution and smart features.</p>
                    <span class="product-price">NPR 85,000</span>
                    <button class="btn btn-secondary">View Details</button>
                </div>
                <div class="product-card">
                    <img src="https://placehold.co/300x200/E0E0E0/333333?text=Refrigerator" alt="Refrigerator" class="product-image"/>
                    <h3 class="product-name">Double Door Refrigerator</h3>
                    <p class="product-description">Energy-efficient and spacious, perfect for modern kitchens.</p>
                    <span class="product-price">NPR 70,000</span>
                    <button class="btn btn-secondary">View Details</button>
                </div>
                <div class="product-card">
                    <img src="https://placehold.co/300x200/E0E0E0/333333?text=Washing+Machine" alt="Washing Machine" class="product-image"/>
                    <h3 class="product-name">Automatic Washing Machine</h3>
                    <p class="product-description">Advanced washing cycles for clean and fresh laundry every time.</p>
                    <span class="product-price">NPR 45,000</span>
                    <button class="btn btn-secondary">View Details</button>
                </div>
            </div>
        </section>

        <section class="collection-category" id="wearables-collection">
            <h2 class="category-title">Wearables</h2>
            <p class="category-description">Track your fitness, stay connected, and express your style with our smart wearables.</p>
            <div class="product-grid">
                <div class="product-card">
                    <img src="https://placehold.co/300x200/E0E0E0/333333?text=Fitness+Tracker" alt="Fitness Tracker" class="product-image"/>
                    <h3 class="product-name">Advanced Fitness Tracker</h3>
                    <p class="product-description">Monitor heart rate, steps, sleep, and more for a healthier life.</p>
                    <span class="product-price">NPR 8,000</span>
                    <button class="btn btn-secondary">View Details</button>
                </div>
                <div class="product-card">
                    <img src="https://placehold.co/300x200/E0E0E0/333333?text=Smart+Ring" alt="Smart Ring" class="product-image"/>
                    <h3 class="product-name">Smart Notification Ring</h3>
                    <p class="product-description">Subtle alerts for calls and messages, stylish and functional.</p>
                    <span class="product-price">NPR 6,500</span>
                    <button class="btn btn-secondary">View Details</button>
                </div>
                <div class="product-card">
                    <img src="https://placehold.co/300x200/E0E0E0/333333?text=AR+Glasses" alt="AR Glasses" class="product-image"/>
                    <h3 class="product-name">Augmented Reality Glasses</h3>
                    <p class="product-description">Experience a new dimension of interaction and entertainment.</p>
                    <span class="product-price">NPR 110,000</span>
                    <button class="btn btn-secondary">View Details</button>
                </div>
            </div>
        </section>

        <section class="collection-category" id="gaming-collection">
            <h2 class="category-title">Gaming</h2>
            <p class="category-description">Dive into immersive worlds with our high-performance gaming consoles, accessories, and gear.</p>
            <div class="product-grid">
                <div class="product-card">
                    <img src="https://placehold.co/300x200/E0E0E0/333333?text=Gaming+Console" alt="Gaming Console" class="product-image"/>
                    <h3 class="product-name">Next-Gen Gaming Console</h3>
                    <p class="product-description">Unleash powerful graphics and lightning-fast loading times.</p>
                    <span class="product-price">NPR 60,000</span>
                    <button class="btn btn-secondary">View Details</button>
                </div>
                <div class="product-card">
                    <img src="https://placehold.co/300x200/E0E0E0/333333?text=Gaming+Headset" alt="Gaming Headset" class="product-image"/>
                    <h3 class="product-name">Surround Sound Headset</h3>
                    <p class="product-description">Crystal-clear audio and comfortable design for long gaming sessions.</p>
                    <span class="product-price">NPR 9,500</span>
                    <button class="btn btn-secondary">View Details</button>
                </div>
                <div class="product-card">
                    <img src="https://placehold.co/300x200/E0E0E0/333333?text=Gaming+Chair" alt="Gaming Chair" class="product-image"/>
                    <h3 class="product-name">Ergonomic Gaming Chair</h3>
                    <p class="product-description">Ultimate comfort and support for competitive and casual gamers.</p>
                    <span class="product-price">NPR 25,000</span>
                    <button class="btn btn-secondary">View Details</button>
                </div>
            </div>
        </section>

        <section class="collection-category" id="accessories-collection">
            <h2 class="category-title">Accessories</h2>
            <p class="category-description">Enhance your devices with our range of accessories, including headphones, smartwatches, and more.</p>
            <div class="product-grid">
                <div class="product-card">
                    <img src="https://placehold.co/300x200/E0E0E0/333333?text=Headphones" alt="Wireless Headphones" class="product-image"/>
                    <h3 class="product-name">Wireless Headphones X</h3>
                    <p class="product-description">Immersive sound experience with noise cancellation.</p>
                    <span class="product-price">NPR 12,000</span>
                    <button class="btn btn-secondary">View Details</button>
                </div>
                <div class="product-card">
                    <img src="https://placehold.co/300x200/E0E0E0/333333?text=Smartwatch" alt="Smartwatch Z" class="product-image"/>
                    <h3 class="product-name">Smartwatch Z Pro</h3>
                    <p class="product-description">Track your fitness, receive notifications, and stay organized.</p>
                    <span class="product-price">NPR 18,000</span>
                    <button class="btn btn-secondary">View Details</button>
                </div>
                <div class="product-card">
                    <img src="https://placehold.co/300x200/E0E0E0/333333?text=Power+Bank" alt="Power Bank" class="product-image"/>
                    <h3 class="product-name">High-Capacity Power Bank</h3>
                    <p class="product-description">Keep your devices charged on the go with fast charging.</p>
                    <span class="product-price">NPR 4,500</span>
                    <button class="btn btn-secondary">View Details</button>
                </div>
            </div>
        </section>

    </main>

    <section class="cta-section">
        <h2>Ready to Find Your Next Gadget?</h2>
        <p>Browse all our collections and take advantage of our nationwide delivery and excellent customer service!</p>
        <a href="#" class="btn btn-primary">Shop All Products</a>
    </section>
    
        </>
    );
}