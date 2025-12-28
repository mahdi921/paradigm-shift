import { useState } from 'react'
import './ContactForm.css'

const businessTypes = [
    'خدمات فنی و ساختمانی',
    'خدمات شخصی و نظافتی',
    'فروشگاهی و خرده‌فروشی',
    'خدمات خودرویی',
    'واسطه‌گری و مالی',
    'تعمیرات لوازم',
    'صنایع دستی و هنری',
    'سایر'
]

function ContactForm({ embedded = false }) {
    const [formData, setFormData] = useState({
        name: '',
        business_type: '',
        problem: '',
        contact: ''
    })
    const [status, setStatus] = useState({ type: '', message: '' })
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setStatus({ type: '', message: '' })

        try {
            const response = await fetch('/api/contact/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json()

            if (response.ok) {
                setStatus({
                    type: 'success',
                    message: data.message || 'اطلاعات شما با موفقیت ثبت شد!'
                })
                setFormData({ name: '', business_type: '', problem: '', contact: '' })
            } else {
                setStatus({
                    type: 'error',
                    message: data.error || 'خطایی رخ داد. لطفاً دوباره تلاش کنید.'
                })
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'خطا در ارتباط با سرور. لطفاً دوباره تلاش کنید.'
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className={`contact-form-wrapper ${embedded ? 'embedded' : ''}`}>
            {!embedded && (
                <div className="form-header">
                    <h3>مشاوره رایگان دریافت کنید</h3>
                    <p>شماره‌تون رو بذارید، خودمون تماس می‌گیریم</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name" className="form-label">
                        نام شما
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="مثال: علی محمدی"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="business_type" className="form-label">
                        نوع کسب‌وکار
                    </label>
                    <select
                        id="business_type"
                        name="business_type"
                        value={formData.business_type}
                        onChange={handleChange}
                        className="form-select"
                        required
                    >
                        <option value="">انتخاب کنید...</option>
                        {businessTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="problem" className="form-label">
                        مشکل اصلی شما (اختیاری)
                    </label>
                    <textarea
                        id="problem"
                        name="problem"
                        value={formData.problem}
                        onChange={handleChange}
                        className="form-textarea"
                        placeholder="به طور خلاصه بگید چه مشکلی دارید..."
                        rows="3"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="contact" className="form-label">
                        شماره تماس یا ایمیل
                    </label>
                    <input
                        type="text"
                        id="contact"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="۰۹۱۲۱۲۳۴۵۶۷ یا email@example.com"
                        required
                    />
                </div>

                {status.message && (
                    <div className={`form-status ${status.type}`}>
                        {status.type === 'success' ? '✓' : '✕'} {status.message}
                    </div>
                )}

                <button
                    type="submit"
                    className="btn btn-primary btn-lg submit-btn"
                    disabled={loading}
                >
                    {loading ? (
                        <>
                            <span className="spinner"></span>
                            در حال ارسال...
                        </>
                    ) : (
                        <>
                            <span className="btn-icon">📞</span>
                            ارسال درخواست مشاوره
                        </>
                    )}
                </button>
            </form>
        </div>
    )
}

export default ContactForm
