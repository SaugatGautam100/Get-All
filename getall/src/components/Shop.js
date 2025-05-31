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
         <main class="container main-content">
    <aside class="sidebar">
      <button class="category-btn">Category</button>
      <div class="popular">
        <h3>Popular</h3>
        <ul>
          <li>
            <img src={smartwatch} alt="Watch"/>
            <span>Smart Watch - £22.00</span>
          </li>
          <li>
            <img src={headphone} alt="Headphones"/>
            <span>Headphones - £35.00</span>
          </li>
          <li>
            <img src={smartphone} alt="Smartphone"/>
            <span>Smartphone - £79.00</span>
          </li>
          <li>
            <img src={laptop} alt="Laptop"/>
            <span>Laptop - £84.00</span>
          </li>
        </ul>
      </div>
    </aside>

    <section class="hero-section">
      <img id="camera-banner-shop" src={camera} alt="Camera"/>
      <br/>
      <div class="hero-text">
        <h2 className="ta-center">Professional Camera</h2>
        <p className="ta-center">Shoot for the best</p>
        <a href="#"><button className="btn-shop">Buy Now</button></a>
      </div>
    </section>

    <aside class="offers">
      <div>📦 Join Risk Free</div>
      <div>🔒 100% Safe</div>
      <div>💬 24x7 Support</div>
      <div>🔥 Best Offers</div>
      <div>🚚 Free Shipping</div>
    </aside>
  </main>

  <section class="banner">
    <p className="ta-center">Big offers on new collection <a href="#">Know More</a></p>
  </section>
        </>
    );
}