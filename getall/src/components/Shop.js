import NavigationBar from "./NavigationBar";
import camera from "./shop-camera.webp";
import headphone from "./shop-headphone.jpg";
import smartwatch from "./shop-smartwatch.jpg";
import smartphone from "./shop-smartphone.jpg";
import laptop from "./laptop.png";
export default function Shop() {
    return (
        <>
        <NavigationBar />
        <main id="shop-categories-main" class="container">
        <h1 id="section-title">Explore Our Shop Categories</h1>

        <div id="category-grid">

           
            <div class="category-card">
                <img src="https://placehold.co/400x250/F8F8F8/4A5568?text=Electronics" alt="Electronics Category" class="category-image"/>
                <div class="card-content">
                    <h2 class="card-title">Electronics</h2>
                    <p class="card-description">Discover the latest gadgets, smartphones, laptops, and more.</p>
                    <a href="#" class="shop-now-button">Shop Now</a>
                </div>
            </div>

            
            <div class="category-card">
                <img src="https://placehold.co/400x250/F8F8F8/4A5568?text=Apparel" alt="Apparel Category" class="category-image"/>
                <div class="card-content">
                    <h2 class="card-title">Apparel</h2>
                    <p class="card-description">Find trendy fashion, clothing, shoes, and accessories for all.</p>
                    <a href="#" class="shop-now-button">Shop Now</a>
                </div>
            </div>

           
            <div class="category-card">
                <img src="https://placehold.co/400x250/F8F8F8/4A5568?text=Home+%26+Kitchen" alt="Home & Kitchen Category" class="category-image"/>
                <div class="card-content">
                    <h2 class="card-title">Home & Kitchen</h2>
                    <p class="card-description">Everything you need to decorate and organize your home.</p>
                    <a href="#" class="shop-now-button">Shop Now</a>
                </div>
            </div>

           
            <div class="category-card">
                <img src="https://placehold.co/400x250/F8F8F8/4A5568?text=Books" alt="Books Category" class="category-image"/>
                <div class="card-content">
                    <h2 class="card-title">Books</h2>
                    <p class="card-description">Explore a vast collection of books across all genres.</p>
                    <a href="#" class="shop-now-button">Shop Now</a>
                </div>
            </div>

         
            <div class="category-card">
                <img src="https://placehold.co/400x250/F8F8F8/4A5568?text=Sports+%26+Outdoors" alt="Sports & Outdoors Category" class="category-image"/>
                <div class="card-content">
                    <h2 class="card-title">Sports & Outdoors</h2>
                    <p class="card-description">Gear up for your next adventure with our sports equipment.</p>
                    <a href="#" class="shop-now-button">Shop Now</a>
                </div>
            </div>

            
            <div class="category-card">
                <img src="https://placehold.co/400x250/F8F8F8/4A5568?text=Health+%26+Beauty" alt="Health & Beauty Category" class="category-image"/>
                <div class="card-content">
                    <h2 class="card-title">Health & Beauty</h2>
                    <p class="card-description">Pamper yourself with our wide range of health and beauty products.</p>
                    <a href="#" class="shop-now-button">Shop Now</a>
                </div>
            </div>

          
            <div class="category-card">
                <img src="https://placehold.co/400x250/F8F8F8/4A5568?text=Toys+%26+Games" alt="Toys & Games Category" class="category-image"/>
                <div class="card-content">
                    <h2 class="card-title">Toys & Games</h2>
                    <p class="card-description">Fun for all ages with our collection of toys and games.</p>
                    <a href="#" class="shop-now-button">Shop Now</a>
                </div>
            </div>

            
            <div class="category-card">
                <img src="https://placehold.co/400x250/F8F8F8/4A5568?text=Automotive" alt="Automotive Category" class="category-image"/>
                <div class="card-content">
                    <h2 class="card-title">Automotive</h2>
                    <p class="card-description">Parts, accessories, and tools for your vehicle needs.</p>
                    <a href="#" class="shop-now-button">Shop Now</a>
                </div>
            </div>

        </div>
    </main>
        </>
    );
}