import './AICapabilities.css'

const capabilities = [
    {
        icon: '🤖',
        title: 'اتوماسیون هوشمند',
        description: 'انجام خودکار کارهای تکراری مثل صورت‌حساب، یادآوری و گزارش‌گیری',
        features: ['زمان‌بندی خودکار', 'گزارش‌های هوشمند', 'یکپارچه‌سازی']
    },
    {
        icon: '📊',
        title: 'تحلیل داده',
        description: 'تبدیل اطلاعات خام به بینش‌های کاربردی برای تصمیم‌گیری بهتر',
        features: ['داشبورد تحلیلی', 'پیش‌بینی فروش', 'تحلیل مشتری']
    },
    {
        icon: '💬',
        title: 'چت‌بات هوشمند',
        description: 'پاسخگویی ۲۴ ساعته به سوالات مشتریان با هوش مصنوعی',
        features: ['پشتیبانی ۲۴/۷', 'پاسخ فوری', 'یادگیری مداوم']
    },
    {
        icon: '✍️',
        title: 'تولید محتوا',
        description: 'نوشتن متن، طراحی و تولید محتوا برای همه پلتفرم‌ها',
        features: ['متن تبلیغاتی', 'پست اجتماعی', 'توصیف محصول']
    },
    {
        icon: '📈',
        title: 'پیش‌بینی فروش',
        description: 'پیش‌بینی تقاضا و فروش بر اساس داده‌های تاریخی',
        features: ['مدیریت موجودی', 'برنامه‌ریزی تولید', 'بودجه‌بندی']
    },
    {
        icon: '🎯',
        title: 'بازاریابی هدفمند',
        description: 'شناسایی و جذب مشتریان با پتانسیل بالا',
        features: ['تبلیغات هوشمند', 'شخصی‌سازی', 'تحلیل رقبا']
    }
]

function AICapabilities() {
    return (
        <section id="solutions" className="capabilities-section section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge-green">✨ راه‌حل‌های هوشمند</span>
                    <h2 className="section-title">AI چه کارهایی می‌تونه بکنه؟</h2>
                    <p className="section-subtitle">
                        هوش مصنوعی دیگه فقط برای شرکت‌های بزرگ نیست. با ابزارهای ما، هر کسب‌وکاری می‌تونه از قدرت AI استفاده کنه.
                    </p>
                </div>

                <div className="capabilities-grid">
                    {capabilities.map((cap, index) => (
                        <div
                            key={index}
                            className="capability-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="capability-icon">{cap.icon}</div>
                            <h3 className="capability-title">{cap.title}</h3>
                            <p className="capability-desc">{cap.description}</p>
                            <ul className="capability-features">
                                {cap.features.map((feature, i) => (
                                    <li key={i}>
                                        <span className="feature-check">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AICapabilities
