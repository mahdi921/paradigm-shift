import HeroSection from '../components/HeroSection'
import ProblemsSection from '../components/ProblemsSection'
import AICapabilities from '../components/AICapabilities'
import BusinessCards from '../components/BusinessCards'
import ContactForm from '../components/ContactForm'
import './HomePage.css'

function HomePage() {
    return (
        <div className="home-page">
            <HeroSection />
            <ProblemsSection />
            <AICapabilities />
            <BusinessCards />

            {/* Contact CTA Section */}
            <section id="contact" className="contact-cta-section section">
                <div className="container">
                    <div className="contact-cta-grid">
                        <div className="contact-cta-text">
                            <h2>آماده تحول دیجیتال هستید؟</h2>
                            <p>
                                با ما تماس بگیرید و ببینید چطور هوش مصنوعی می‌تونه کسب‌وکار شما رو متحول کنه.
                                مشاوره اولیه کاملاً رایگانه.
                            </p>
                            <ul className="cta-benefits">
                                <li>
                                    <span className="benefit-icon">✓</span>
                                    مشاوره رایگان و بدون تعهد
                                </li>
                                <li>
                                    <span className="benefit-icon">✓</span>
                                    بررسی اختصاصی کسب‌وکار شما
                                </li>
                                <li>
                                    <span className="benefit-icon">✓</span>
                                    ارائه راه‌حل‌های عملی
                                </li>
                            </ul>
                        </div>
                        <div className="contact-cta-form">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage
