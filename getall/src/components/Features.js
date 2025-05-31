import NavigationBar from "./NavigationBar";

export default function Features() {
    return(
        <>
        <NavigationBar />
         <div class="container mx-auto px-4 py-8 md:py-12">
        <header class="text-center mb-12 md:mb-16">
            <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                Welcome to <span class="text-red-600">Get All</span> - Your Ultimate Shopping Destination!
            </h1>
            <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                At <strong class="text-red-600">Get All</strong>, we're more than just an e-commerce website; we're your dedicated partner in finding everything you need with ease, confidence, and value. We've meticulously crafted our platform with a suite of powerful features designed to transform your online shopping experience from ordinary to extraordinary.
            </p>
            <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-4">
                Discover what makes <strong class="text-red-600">Get All</strong> the smart choice for savvy shoppers:
            </p>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <section class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 class="text-2xl font-semibold text-gray-800 mb-4 section-title">
                    Expansive Product Catalog & Quality Assurance
                </h3>
                <ul class="space-y-3 text-gray-700">
                    <li class="flex items-start">
                        <svg class="w-6 h-6 text-red-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <div>
                            <strong class="font-medium">A World of Choice at Your Fingertips:</strong> Dive into an unparalleled selection spanning thousands of products across diverse categories. From the latest electronics and trendy fashion to unique home decor and essential everyday items, if you need it, you can "Get All" of it here!
                        </div>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-6 h-6 text-red-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <div>
                            <strong class="font-medium">Curated Quality:</strong> We partner exclusively with reputable brands and verified sellers to ensure every product listed on <strong class="text-red-600">Get All</strong> meets stringent quality standards. Shop with peace of mind, knowing you're investing in authentic, high-quality goods.
                        </div>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-6 h-6 text-red-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <div>
                            <strong class="font-medium">Fresh Finds Daily:</strong> Our catalog is constantly updated with new arrivals and trending products, ensuring you always have access to the latest innovations and styles.
                        </div>
                    </li>
                </ul>
            </section>

            <section class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 class="text-2xl font-semibold text-gray-800 mb-4 section-title">
                    Effortless & Intuitive Shopping Experience
                </h3>
                <ul class="space-y-3 text-gray-700">
                    <li class="flex items-start">
                        <svg class="w-6 h-6 text-red-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <div>
                            <strong class="font-medium">Intelligent Search & Filtering:</strong> Say goodbye to endless scrolling! Our advanced search engine, coupled with comprehensive filters (by price, brand, color, size, customer rating, and more), helps you pinpoint exactly what you're looking for in seconds.
                        </div>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-6 h-6 text-red-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <div>
                            <strong class="font-medium">Personalized Recommendations:</strong> Our smart algorithm learns your preferences and browsing history to offer tailored product suggestions you'll truly love, making discovery exciting and relevant.
                        </div>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-6 h-6 text-red-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <div>
                            <strong class="font-medium">Detailed Product Insights:</strong> Make informed decisions with rich product pages featuring high-resolution images, in-depth descriptions, specifications, compatibility details, and authentic customer reviews and ratings.
                        </div>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-6 h-6 text-red-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <div>
                            <strong class="font-medium">Seamless Navigation:</strong> Enjoy a clean, intuitive interface designed for effortless browsing, adding to cart, and checkout, whether you're on desktop or mobile.
                        </div>
                    </li>
                </ul>
            </section>

            <section class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 class="text-2xl font-semibold text-gray-800 mb-4 section-title">
                    Smart Savings & Exclusive Deals
                </h3>
                <ul class="space-y-3 text-gray-700">
                    <li class="flex items-start">
                        <svg class="w-6 h-6 text-red-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <div>
                            <strong class="font-medium">Unbeatable Value:</strong> We are committed to offering competitive pricing across our entire range, ensuring you always get the best possible deal.
                        </div>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-6 h-6 text-red-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <div>
                            <strong class="font-medium">Daily Deals & Flash Sales:</strong> Keep an eye out for our exciting daily deals and limited-time flash sales, offering significant discounts on popular products. Don't miss your chance to grab incredible bargains!
                        </div>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-6 h-6 text-red-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <div>
                            <strong class="font-medium">Exclusive Promotions:</strong> As a valued <strong class="text-red-600">Get All</strong> customer, you'll gain access to special promotions, bundle offers, and discounts available only on our platform.
                        </div>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-6 h-6 text-red-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <div>
                            <strong class="font-medium">Loyalty Rewards Program (Coming Soon!):</strong> Earn points with every purchase and redeem them for future discounts, exclusive access, and special perks. Your loyalty will always be rewarded!
                        </div>
                    </li>
                </ul>
            </section>

            <section class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 class="text-2xl font-semibold text-gray-800 mb-4 section-title">
                    Secure & Convenient Transactions
                </h3>
                <ul class="space-y-3 text-gray-700">
                    <li class="flex items-start">
                        <svg class="w-6 h-6 text-red-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <div>
                            <strong class="font-medium">Multiple Secure Payment Options:</strong> Choose the payment method that suits you best, including major credit/debit cards, secure digital wallets, and more. All transactions are processed through encrypted gateways.
                        </div>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-6 h-6 text-red-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <div>
                            <strong class="font-medium">Robust Security Measures:</strong> Your privacy and financial data are paramount. <strong class="text-red-600">Get All</strong> employs industry-leading encryption and security protocols to protect your personal information at every step.
                        </div>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-6 h-6 text-red-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <div>
                            <strong class="font-medium">Real-Time Order Tracking:</strong> From the moment you place your order until it arrives at your doorstep, stay informed with real-time tracking updates accessible directly from your account.
                        </div>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-6 h-6 text-red-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <div>
                            <strong class="font-medium">Hassle-Free Returns & Refunds:</strong> Your satisfaction is guaranteed. Our straightforward return and refund policy ensures a smooth process if a product doesn't meet your expectations.
                        </div>
                    </li>
                </ul>
            </section>

            <section class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 class="text-2xl font-semibold text-gray-800 mb-4 section-title">
                    Dedicated Customer-Centric Support
                </h3>
                <ul class="space-y-3 text-gray-700">
                    <li class="flex items-start">
                        <svg class="w-6 h-6 text-red-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <div>
                            <strong class="font-medium">Responsive Customer Service:</strong> Our friendly and knowledgeable support team is always ready to assist you. Reach out via live chat, email, or phone for prompt and helpful solutions to any queries or concerns.
                        </div>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-6 h-6 text-red-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <div>
                            <strong class="font-medium">Comprehensive Help Center:</strong> Find quick answers to common questions and detailed guides in our extensive online help center.
                        </div>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-6 h-6 text-red-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <div>
                            <strong class="font-medium">Community-Powered Reviews:</strong> Benefit from the collective wisdom of our shopping community. Read genuine reviews from other buyers and contribute your own experiences to help others make smart choices.
                        </div>
                    </li>
                </ul>
            </section>

            <section class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 class="text-2xl font-semibold text-gray-800 mb-4 section-title">
                    Optimized for Every Device
                </h3>
                <ul class="space-y-3 text-gray-700">
                    <li class="flex items-start">
                        <svg class="w-6 h-6 text-red-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <div>
                            <strong class="font-medium">Shop Anywhere, Anytime:</strong> Our website is fully responsive and optimized for a seamless experience across all devices – desktop, tablet, and smartphone. Enjoy the same great features and easy navigation, no matter how you choose to shop.
                        </div>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-6 h-6 text-red-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <div>
                            <strong class="font-medium">Get All Mobile App (Coming Soon!):</strong> For an even faster, more personalized, and exclusive shopping journey, download our dedicated mobile app with push notifications for deals and order updates.
                        </div>
                    </li>
                </ul>
            </section>

        </div>

        <footer class="text-center mt-12 md:mt-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to experience the future of online shopping?
            </h2>
            <a href="#" class="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                Start Exploring Get All Today!
            </a>
        </footer>
    </div>
        </>
    );
}