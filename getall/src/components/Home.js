import NavigationBar from "./NavigationBar";
import laptop from "./laptop.png";
import smartphones from "./smartphones.png";
import cameras from "./cameras.png";
import headphone from "./headphone.png";
import tablets from "./tablets.png";
import smartwatches from "./smartwatches.png";
import apple from "./apple.png";
import hp from "./hp.png";
import dell from "./dell.png";
import lenevo from "./lenevo.png";
import samsung from "./samsung.png";
import heroImage1 from "./herosectionImage1.png";
import newArrivalsImageMouse from "./newArrivalsImageMouse.png";
import newArrivalsImageHeadset from "./newArrivalsImageHeadset.png";
import logo from "./logo.png";
import { tab } from "@testing-library/user-event/dist/tab";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <section id="section-hero">
        <div class="hero-section">
          <button class="nav-button left">
            <svg viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div class="hero-content">
            <div class="hero-text">
              <h1 className="ta-left">
                Introduction the New Dell <br />
                Laptops Series
              </h1>
              <p>Unmatched performance in a sleek design.</p>
              <a href="#" class="btn">
                Shop Now
              </a>
            </div>
            <div class="hero-image">
              <img src={heroImage1} alt="Dell Laptop" />
            </div>
          </div>
          <button class="nav-button right">
            <svg viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      <section class="arrivals">
        <h2>New Arrivals</h2>
        <div class="products">
          <div class="product-card">
            <img src={newArrivalsImageMouse} alt="Mouse" />
            <h3>Mouse</h3>
            <p class="rating">
              ★★★★★ <span>(3 reviews)</span>
            </p>
            <p class="price">$700</p>
          </div>
          <div class="product-card">
            <img src={laptop} alt="Laptop" />
            <h3>Laptop</h3>
            <p class="rating">
              ★★★★★ <span>(10 reviews)</span>
            </p>
            <p class="price">$500</p>
          </div>
          <div class="product-card">
            <img src={headphone} alt="Headphones" />
            <h3>Headphones</h3>
            <p class="rating">
              ★★★★★ <span>(15 reviews)</span>
            </p>
            <p class="price">$240</p>
          </div>
          <div class="product-card">
            <img src={newArrivalsImageHeadset} alt="Headset" />
            <h3>Headset</h3>
            <p class="rating">
              ★★★★★ <span>(25 reviews)</span>
            </p>
            <p class="price">$230</p>
          </div>
        </div>
      </section>
      <section id="section-popular-categories">
        <div id="home-popular-categories">
          <h1>Popular Categories</h1>
          <div id="popular-catergories-card-container">
            <div id="card">
              <div id="image-background">
                <img src={laptop} alt="laptop" />
              </div>
              <h3>Laptop</h3>
            </div>
            <div id="card">
              <div id="image-background">
                <img src={smartphones} alt="laptop" />
              </div>
              <h3>Smart Phones</h3>
            </div>
            <div id="card">
              <div id="image-background">
                <img src={cameras} alt="laptop" />
              </div>
              <h3>Cameras</h3>
            </div>
            <div id="card">
              <div id="image-background">
                <img src={headphone} alt="laptop" />
              </div>
              <h3>Headphones</h3>
            </div>
            <div id="card">
              <div id="image-background">
                <img src={tablets} alt="laptop" />
              </div>
              <h3>Tablets</h3>
            </div>
            <div id="card">
              <div id="image-background">
                <img src={smartwatches} alt="laptop" />
              </div>
              <h3>Smart Watches</h3>
            </div>
          </div>
        </div>
      </section>

      <section class="promo-banner">
        <div class="promo-text">
          <h1 className="ta-left">Mega Sales Extravaganza!</h1>
          <p >Unbelievable Deals and Discounts Await You At Our Mega Sales</p>
          <a href="#" class="btn">
            Start Shopping
          </a>
        </div>
        <img src={smartphones} alt="iPhone" />
        <div class="promo-code">
          <p>
            Use Code: <strong>FridayDeal</strong>
          </p>
        </div>
      </section>
      <section class="offers">
        <div class="offer-box">
          <div class="offer-text">
            <h2>Laptop Surface Pro 4 Microsoft</h2>
            <p className="ta-left">
              Get ready for unbeatable deals and discounts that will leave you
              amazed
            </p>
            <a href="#" class="btn">
              Up to 30% Off
            </a>
          </div>
          <img src={laptop} alt="Laptop" />
        </div>
        <div class="offer-box">
          <div class="offer-text">
            <h2>Gray HP Flat Screen Monitor</h2>
            <p>
              Limited-time Mega Deals you don't want to miss! Shop now and enjoy
              exclusive discounts on a wide range of products.
            </p>
            <a href="#" class="btn">
              Up to 30% Off
            </a>
          </div>
          <img src={tablets} alt="Monitor" />
        </div>
      </section>
      <section id="section-featured-brands">
        <div id="home-featured-brands">
          <h1>Featured Brands</h1>
          <div id="featured-brands-card-container">
            <div id="featured-brands-card">
              <img src={apple} alt="apple" />
            </div>
            <div id="featured-brands-card">
              <img src={hp} alt="apple" />
            </div>
            <div id="featured-brands-card">
              <img src={dell} alt="apple" />
            </div>
            <div id="featured-brands-card">
              <img src={lenevo} alt="apple" />
            </div>
            <div id="featured-brands-card">
              <img src={samsung} alt="apple" />
            </div>
          </div>
        </div>
      </section>
      <section class="newsletter">
        <img src="images/headset-removebg-preview.png" class="left-bg" alt="" />
        <img src="images/mouse-removebg-preview.png" class="right-bg" alt="" />
        <h2>Newsletter</h2>
        <p>Subscribe to our newsletter to get bonuses for your next purchase</p>
        <div class="newsletter-form">
          <input type="email" placeholder="Your email" />
          <button class="btn">Subscribe</button>
        </div>
      </section>
      <footer class="footer">
        <div class="footer-logo">
          <div id="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div class="footer-links">
          <div>
            <h3>Get Help</h3>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Shipping</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Get Products</h3>
            <ul>
              <li>
                <a href="#">Laptops</a>
              </li>
              <li>
                <a href="#">Headphones</a>
              </li>
              <li>
                <a href="#">Smartphones</a>
              </li>
              <li>
                <a href="#">Cameras</a>
              </li>
              <li>
                <a href="#">Smartwatches</a>
              </li>
              <li>
                <a href="#">Tablets</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Get About Us</h3>
            <ul>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Our Blogs</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
