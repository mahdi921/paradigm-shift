import ContactForm from '../components/ContactForm'
import './ContactPage.css'

function ContactPage() {
    return (
        <div className="contact-page">
            <section className="contact-hero">
                <div className="container">
                    <h1>تماس با ما</h1>
                    <p>آماده پاسخگویی به سوالات شما هستیم</p>
                </div>
            </section>

            <section className="contact-content section">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <h2>چرا با ما کار کنید؟</h2>

                            <div className="info-cards">
                                <div className="info-card">
                                    <span className="info-icon">🎯</span>
                                    <h3>تخصص در AI</h3>
                                    <p>تیم ما در زمینه هوش مصنوعی و اتوماسیون کسب‌وکار تخصص دارد</p>
                                </div>

                                <div className="info-card">
                                    <span className="info-icon">🇮🇷</span>
                                    <h3>درک بازار ایران</h3>
                                    <p>راه‌حل‌های ما مخصوص نیازها و چالش‌های کسب‌وکارهای ایرانی است</p>
                                </div>

                                <div className="info-card">
                                    <span className="info-icon">💡</span>
                                    <h3>روش ساده</h3>
                                    <p>بدون حرف‌های پیچیده فنی، مستقیم راه‌حل عملی ارائه می‌دهیم</p>
                                </div>

                                <div className="info-card">
                                    <span className="info-icon">🤝</span>
                                    <h3>پشتیبانی مداوم</h3>
                                    <p>در کنار شما هستیم تا مطمئن شویم راه‌حل‌ها به درستی کار می‌کنند</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-section">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactPage
