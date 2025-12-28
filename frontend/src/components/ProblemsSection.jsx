import './ProblemsSection.css'

const problems = [
    {
        icon: '⏰',
        title: 'زمان‌بر بودن کارها',
        description: 'کارهای تکراری و روزمره وقت زیادی از شما می‌گیرند و فرصت تمرکز روی رشد کسب‌وکار را نمی‌دهند.'
    },
    {
        icon: '💰',
        title: 'هزینه نیروی انسانی',
        description: 'استخدام و نگهداری نیروی متخصص هزینه‌بر است و مدیریت تیم چالش‌های خودش را دارد.'
    },
    {
        icon: '📝',
        title: 'تولید محتوا',
        description: 'تولید محتوای با کیفیت برای سایت، شبکه اجتماعی و تبلیغات نیاز به زمان و تخصص دارد.'
    },
    {
        icon: '🎧',
        title: 'پشتیبانی مشتری',
        description: 'پاسخگویی ۲۴ ساعته به سوالات مشتریان و رسیدگی به شکایات خسته‌کننده است.'
    },
    {
        icon: '📊',
        title: 'تحلیل داده‌ها',
        description: 'اطلاعات زیادی دارید ولی نمی‌دانید چطور از آن‌ها برای تصمیم‌گیری استفاده کنید.'
    },
    {
        icon: '🎯',
        title: 'جذب مشتری جدید',
        description: 'رقابت در بازار سخت شده و پیدا کردن مشتری‌های جدید هر روز چالش‌برانگیزتر می‌شود.'
    }
]

function ProblemsSection() {
    return (
        <section id="problems" className="problems-section section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">😓 دردسرهای آشنا</span>
                    <h2 className="section-title">مشکلات رایج کسب‌وکارها</h2>
                    <p className="section-subtitle">
                        این مشکلات رو می‌شناسی؟ تقریباً همه کسب‌وکارها باهاشون دست و پنجه نرم می‌کنن.
                    </p>
                </div>

                <div className="problems-grid">
                    {problems.map((problem, index) => (
                        <div
                            key={index}
                            className="problem-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="problem-icon">{problem.icon}</div>
                            <h3 className="problem-title">{problem.title}</h3>
                            <p className="problem-desc">{problem.description}</p>
                        </div>
                    ))}
                </div>

                <div className="problems-cta">
                    <p>خبر خوب اینه که هوش مصنوعی می‌تونه بیشتر این مشکلات رو حل کنه...</p>
                    <a href="#solutions" className="btn btn-secondary">
                        <span className="btn-icon">✨</span>
                        راه‌حل‌ها رو ببین
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ProblemsSection
