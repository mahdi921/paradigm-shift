import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import NotebookPlaceholder from '../components/NotebookPlaceholder'
import ContactForm from '../components/ContactForm'
import './BusinessPage.css'

function BusinessPage() {
    const { businessId } = useParams()
    const [business, setBusiness] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchBusiness()
    }, [businessId])

    const fetchBusiness = async () => {
        setLoading(true)
        try {
            const response = await fetch(`/api/businesses/${businessId}/`)
            if (!response.ok) {
                throw new Error('Business not found')
            }
            const data = await response.json()
            setBusiness(data)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return (
            <div className="business-page">
                <div className="container">
                    <div className="loading-state">
                        <div className="spinner-large"></div>
                        <p>در حال بارگذاری...</p>
                    </div>
                </div>
            </div>
        )
    }

    if (error || !business) {
        return (
            <div className="business-page">
                <div className="container">
                    <div className="error-state">
                        <span className="error-icon">😕</span>
                        <h2>کسب‌وکار پیدا نشد</h2>
                        <p>متأسفانه این صفحه وجود ندارد یا حذف شده است.</p>
                        <Link to="/" className="btn btn-primary">
                            بازگشت به صفحه اصلی
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="business-page">
            {/* Hero */}
            <section className="business-hero">
                <div className="container">
                    <Link to="/" className="back-link">
                        → بازگشت به صفحه اصلی
                    </Link>

                    <div className="business-hero-content">
                        <span className="business-badge">{business.category_name}</span>
                        <div className="business-icon-large">{business.icon}</div>
                        <h1 className="business-title">
                            AI چطور به <span className="text-gradient">{business.name}</span> کمک می‌کنه؟
                        </h1>
                        <p className="business-subtitle">{business.name_en}</p>
                    </div>
                </div>
            </section>

            {/* Problems */}
            <section className="business-problems section">
                <div className="container">
                    <div className="section-header">
                        <h2>😓 مشکلات رایج در این صنف</h2>
                        <p>ما دردسرهاتون رو می‌فهمیم</p>
                    </div>

                    <div className="problems-list">
                        {business.problems?.map((problem, index) => (
                            <div key={index} className="problem-item">
                                <span className="problem-number">{index + 1}</span>
                                <span className="problem-text">{problem}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions */}
            <section className="business-solutions section">
                <div className="container">
                    <div className="section-header">
                        <h2>✨ راه‌حل‌های AI</h2>
                        <p>چطور هوش مصنوعی این مشکلات رو حل می‌کنه</p>
                    </div>

                    <div className="solutions-grid">
                        {business.solutions?.map((solution, index) => (
                            <div key={index} className="solution-card">
                                <span className="solution-icon">🎯</span>
                                <span className="solution-text">{solution}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NotebookLM Placeholder */}
            <section className="business-presentation section">
                <div className="container">
                    <div className="section-header">
                        <h2>📊 پرزنت اختصاصی</h2>
                        <p>ببینید دقیقاً چه کارهایی می‌تونیم براتون انجام بدیم</p>
                    </div>

                    <NotebookPlaceholder
                        title={`پرزنت برای ${business.name}`}
                        businessName={business.name}
                    />
                </div>
            </section>

            {/* CTA */}
            <section className="business-cta section">
                <div className="container">
                    <div className="cta-wrapper">
                        <div className="cta-text">
                            <h2>برای {business.name} مشاوره می‌خوام</h2>
                            <p>فقط شماره‌تون رو بذارید، خودمون تماس می‌گیریم و راهنماییتون می‌کنیم</p>
                        </div>
                        <div className="cta-form">
                            <ContactForm embedded />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BusinessPage
