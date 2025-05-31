import NavigationBar from "./NavigationBar";

export default function AboutUs() {
  return (
    <>
      <NavigationBar />

      <section className="about-content">
        <h2>Welcome To GetAll</h2>
        <p className="ta-center">Looking for the latest gadgets, electronics, and home appliances in Nepal?</p>
      </section>

      <main className="about-section"> {/* Changed to main as it seems like the primary content */}
        <h1>Greetings From GetAll</h1>
        <p>The ultimate destination for electronics, home appliances, and gadgets. We take great pride in providing a wide selection of products, an effortless online shopping experience, excellent customer support, and a safe online shopping environment.</p>
        <p>We're aware of it. It can be a little challenging to find the best online electronics store in Nepal. You must compare costs in this crowded shopping environment and expect to find the best offer. At Mobilemandu, we're dedicated to giving our clients the greatest possible purchasing experiences at the lowest prices.</p>
        {/* The content below was part of the duplicated main, but now integrated here or moved to a dedicated section */}
        <p>Since the experience is as vital as the product itself, we at GetAll place the utmost importance on quality and authenticity. In addition to superior products from trusted brands, we offer an easy and effortless shopping experience. We've partnered with leading brands to provide you authentic items, so you can buy with confidence.</p>
      </main>

      <section className="why-section">
        <h2>Why GetAll?</h2>
        <p>Since the experience is as vital as the product itself, we at GetAll place the utmost importance on quality and authenticity. In addition to superior products from trusted brands, we offer an easy and effortless shopping experience. We've partnered with leading brands to provide you authentic items, so you can buy with confidence.</p>
      </section>

      <section className="start-shopping-section">
        <h2 className="ta-center">Start Your Shopping Today!</h2>
        <p>Shop today and experience the difference. Shop from top brands you trust, all in one place.</p>
      </section>

      <section className="delivery-section">
        <h2>Nationwide Delivery</h2>
        <p>Enjoy your shopping through Your Trusted Online Electronics Store in Nepal, without leaving the comfort of your home. We deliver your order directly to your location, no matter where you are in Nepal. Simply choose what you want to buy from our website, and we'll deliver it right to your door.</p>
      </section>

      <section className="customer-service-section">
        <h2>Excellent Customer Service</h2>
        <p>Our dedicated customer support team is always available to answer your questions and assist you with your orders.</p>
      </section>

      <section className="returns-section">
        <h2>Hassle-Free Returns</h2>
        <p>Not satisfied with your purchase? We offer an easy return policy for your convenience, in the event that the product does not look or function as advertised.</p>
      </section>

      <section className="secure-shopping-section">
        <h2>Convenient And Secure Shopping</h2>
        <p>You can easily browse items, compare characteristics, and make secure online payments with our user-friendly website without worrying about any security issues.</p>
      </section>
    </>
  );
}