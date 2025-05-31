import NavigationBar from "./NavigationBar";
import email from "./email.jpg";

export default function Contact() {
    return (
        <>
        <NavigationBar />
        <section class="contact-section">
        <div class="contact-container">
            <h2>Have Some Questions?</h2>
            <p class="address">Address : 1234 Project Street, Atlanta, GA 30301</p>
            <p class="contactNumber">Contact : +977 9866294492</p>
            
            <div class="form-and-image">
                <div class="contact-image">
                    <img src={email} alt="Envelope Illustration"/>
                </div>
                <form class="contact-form">
                    <input type="text" placeholder="Full Name" required/>
                    <input type="email" placeholder="Email Address" required/>
                    <input type="text" placeholder="Subject" required/>
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    </section>
        </>
    );
}