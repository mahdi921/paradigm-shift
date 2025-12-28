import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './BusinessCards.css'

// Category icons for summary view
const categoryData = [
    { id: 'technical-construction', name: 'خدمات فنی و ساختمانی', icon: '🔧', color: '#f59e0b' },
    { id: 'personal-services', name: 'خدمات شخصی و نظافتی', icon: '💇', color: '#ec4899' },
    { id: 'retail', name: 'فروشگاهی و خرده‌فروشی', icon: '🛒', color: '#22c55e' },
    { id: 'automotive', name: 'خدمات خودرویی', icon: '🚗', color: '#3b82f6' },
    { id: 'intermediary-trading', name: 'واسطه‌گری و مالی', icon: '💼', color: '#8b5cf6' },
    { id: 'repair-services', name: 'تعمیرات لوازم', icon: '🛠️', color: '#06b6d4' },
    { id: 'handicrafts', name: 'صنایع دستی و هنری', icon: '🎨', color: '#f43f5e' },
]

function BusinessCards() {
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [businesses, setBusinesses] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchCategories()
    }, [])

    useEffect(() => {
        if (selectedCategory) {
            fetchCategoryDetail(selectedCategory)
        }
    }, [selectedCategory])

    const fetchCategories = async () => {
        try {
            const response = await fetch('/api/categories/')
            const data = await response.json()
            setCategories(data)
        } catch (error) {
            console.error('Error fetching categories:', error)
            // Use static data as fallback
            setCategories(categoryData)
        } finally {
            setLoading(false)
        }
    }

    const fetchCategoryDetail = async (categoryId) => {
        try {
            const response = await fetch(`/api/categories/${categoryId}/`)
            const data = await response.json()
            setBusinesses(data.businesses || [])
        } catch (error) {
            console.error('Error fetching category detail:', error)
        }
    }

    const getCategoryColor = (categoryId) => {
        const cat = categoryData.find(c => c.id === categoryId)
        return cat ? cat.color : '#6366f1'
    }

    return (
        <section id="businesses" className="business-section section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge-blue">🏢 کسب‌وکارها</span>
                    <h2 className="section-title">راه‌حل مخصوص کسب‌وکار شما</h2>
                    <p className="section-subtitle">
                        کسب‌وکار خودتون رو پیدا کنید و ببینید AI چطور می‌تونه کمکتون کنه
                    </p>
                </div>

                {/* Category Pills */}
                <div className="category-pills">
                    <button
                        className={`category-pill ${!selectedCategory ? 'active' : ''}`}
                        onClick={() => {
                            setSelectedCategory(null)
                            setBusinesses([])
                        }}
                    >
                        همه دسته‌ها
                    </button>
                    {(categories.length > 0 ? categories : categoryData).map((cat) => (
                        <button
                            key={cat.id}
                            className={`category-pill ${selectedCategory === cat.id ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(cat.id)}
                            style={{
                                '--pill-color': getCategoryColor(cat.id)
                            }}
                        >
                            <span className="pill-icon">{cat.icon}</span>
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Category Cards or Business List */}
                {!selectedCategory ? (
                    <div className="categories-grid">
                        {(categories.length > 0 ? categories : categoryData).map((cat, index) => (
                            <div
                                key={cat.id}
                                className="category-card"
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                    '--card-color': getCategoryColor(cat.id)
                                }}
                                onClick={() => setSelectedCategory(cat.id)}
                            >
                                <div className="category-icon">{cat.icon}</div>
                                <h3 className="category-name">{cat.name}</h3>
                                <span className="category-count">
                                    {cat.business_count || '۸+'} کسب‌وکار
                                </span>
                                <span className="category-arrow">←</span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="businesses-grid">
                        {businesses.map((business, index) => (
                            <Link
                                key={business.id}
                                to={`/business/${business.id}`}
                                className="business-card"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                <div className="business-icon">{business.icon}</div>
                                <div className="business-info">
                                    <h4 className="business-name">{business.name}</h4>
                                    <span className="business-name-en">{business.name_en}</span>
                                </div>
                                <span className="business-arrow">←</span>
                            </Link>
                        ))}
                    </div>
                )}

                {selectedCategory && businesses.length === 0 && !loading && (
                    <div className="loading-state">
                        <p>در حال بارگذاری...</p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default BusinessCards
