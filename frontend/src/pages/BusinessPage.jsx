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
    const [selectedProblem, setSelectedProblem] = useState(null)
    const [selectedSolution, setSelectedSolution] = useState(null)

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

    const openProblemModal = (index) => {
        setSelectedProblem(index)
        document.body.style.overflow = 'hidden'
    }

    const closeProblemModal = () => {
        setSelectedProblem(null)
        document.body.style.overflow = 'auto'
    }

    const openSolutionModal = (index) => {
        setSelectedSolution(index)
        document.body.style.overflow = 'hidden'
    }

    const closeSolutionModal = () => {
        setSelectedSolution(null)
        document.body.style.overflow = 'auto'
    }

    // Problem details with expanded info
    const problemDetails = [
        { icon: '⏰', impact: 'از دست دادن مشتری و درآمد', aiSolution: 'اتوماسیون و زمان‌بندی هوشمند' },
        { icon: '💰', impact: 'هزینه‌های پنهان و اضافی', aiSolution: 'بهینه‌سازی منابع با AI' },
        { icon: '📊', impact: 'تصمیم‌گیری نادرست', aiSolution: 'تحلیل داده و پیش‌بینی' },
        { icon: '🎯', impact: 'از دست دادن فرصت‌ها', aiSolution: 'شناسایی الگوها با یادگیری ماشین' },
    ]

    // Solution icons
    const solutionIcons = ['🤖', '⚡', '📱', '🎯']

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
            {/* Hero with NotebookLM */}
            <section className="business-hero-extended">
                <div className="hero-bg-overlay"></div>
                <div className="container">
                    <Link to="/" className="back-link">
                        → بازگشت به صفحه اصلی
                    </Link>

                    <div className="hero-grid">
                        <div className="hero-text-content">
                            <span className="business-badge">{business.category_name}</span>
                            <div className="business-icon-large">{business.icon}</div>
                            <h1 className="business-title">
                                AI چطور به <span className="text-gradient">{business.name}</span> کمک می‌کنه؟
                            </h1>
                            <p className="business-subtitle">{business.name_en}</p>

                            <div className="hero-actions">
                                <a href="#problems" className="btn btn-primary btn-lg">
                                    <span className="btn-icon">👀</span>
                                    مشکلات رایج
                                </a>
                                <a href="#contact" className="btn btn-secondary btn-lg">
                                    <span className="btn-icon">💬</span>
                                    مشاوره رایگان
                                </a>
                            </div>
                        </div>

                        <div className="hero-notebook">
                            <div className="notebook-hero-wrapper">
                                <NotebookPlaceholder
                                    title={`پرزنت ${business.name}`}
                                    businessName={business.name}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problems - Clickable Cards */}
            <section id="problems" className="business-problems section">
                <div className="container">
                    <div className="section-header">
                        <h2>😓 مشکلات رایج در این صنف</h2>
                        <p>روی هر کارت کلیک کنید تا جزییات بیشتر ببینید</p>
                    </div>

                    <div className="problems-cards-grid">
                        {business.problems?.map((problem, index) => {
                            // Handle both string and object format
                            const problemTitle = typeof problem === 'string' ? problem : problem.title
                            return (
                                <div
                                    key={index}
                                    className="problem-card"
                                    onClick={() => openProblemModal(index)}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="problem-card-icon">
                                        {problemDetails[index % problemDetails.length]?.icon || '❓'}
                                    </div>
                                    <div className="problem-card-content">
                                        <h3 className="problem-card-title">{problemTitle}</h3>
                                    </div>
                                    <div className="problem-card-arrow">
                                        <span>←</span>
                                    </div>
                                    <div className="problem-card-hint">کلیک برای جزییات</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Problem Modal */}
            {selectedProblem !== null && (() => {
                const problem = business.problems[selectedProblem]
                const problemTitle = typeof problem === 'string' ? problem : problem.title
                const problemDesc = typeof problem === 'string'
                    ? `این مشکل یکی از چالش‌های رایج در این صنفه که با راه‌حل‌های هوشمند قابل حله.`
                    : problem.description

                return (
                    <div className="modal-overlay" onClick={closeProblemModal}>
                        <div className="modal-content modal-simple" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close" onClick={closeProblemModal}>✕</button>

                            <div className="modal-header">
                                <span className="modal-icon">
                                    {problemDetails[selectedProblem % problemDetails.length]?.icon || '❓'}
                                </span>
                            </div>

                            <h3 className="modal-title">{problemTitle}</h3>

                            <p className="modal-description">{problemDesc}</p>
                        </div>
                    </div>
                )
            })()}

            {/* Solutions */}
            <section className="business-solutions section">
                <div className="container">
                    <div className="section-header">
                        <h2>✨ راه‌حل‌های AI</h2>
                        <p>روی هر کارت کلیک کنید تا جزییات بیشتر ببینید</p>
                    </div>

                    <div className="problems-cards-grid">
                        {business.solutions?.map((solution, index) => {
                            const solutionTitle = typeof solution === 'string' ? solution : solution.title
                            return (
                                <div
                                    key={index}
                                    className="problem-card solution-card-new"
                                    onClick={() => openSolutionModal(index)}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="problem-card-icon">
                                        {solutionIcons[index % solutionIcons.length]}
                                    </div>
                                    <div className="problem-card-content">
                                        <h3 className="problem-card-title">{solutionTitle}</h3>
                                    </div>
                                    <div className="problem-card-arrow">
                                        <span>←</span>
                                    </div>
                                    <div className="problem-card-hint">کلیک برای جزییات</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Solution Modal */}
            {selectedSolution !== null && (() => {
                const solution = business.solutions[selectedSolution]
                const solutionTitle = typeof solution === 'string' ? solution : solution.title
                const solutionDesc = typeof solution === 'string'
                    ? `این راه‌حل با استفاده از هوش مصنوعی به بهبود کسب‌وکار شما کمک می‌کنه.`
                    : solution.description

                return (
                    <div className="modal-overlay" onClick={closeSolutionModal}>
                        <div className="modal-content modal-simple modal-solution" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close" onClick={closeSolutionModal}>✕</button>

                            <div className="modal-header">
                                <span className="modal-icon">
                                    {solutionIcons[selectedSolution % solutionIcons.length]}
                                </span>
                            </div>

                            <h3 className="modal-title">{solutionTitle}</h3>

                            <p className="modal-description">{solutionDesc}</p>
                        </div>
                    </div>
                )
            })()}

            {/* CTA */}
            <section id="contact" className="business-cta section">
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
