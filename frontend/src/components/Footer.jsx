import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <span className="logo-icon">🧠</span>
                            <span className="logo-text">پارادایم شیفت</span>
                        </Link>
                        <p className="footer-desc">
                            هوش مصنوعی برای کسب‌وکارهای ایرانی
                            <br />
                            کاهش هزینه، افزایش فروش
                        </p>
                    </div>

                    <div className="footer-links">
                        <h4>دسترسی سریع</h4>
                        <a href="#problems">مشکلات رایج</a>
                        <a href="#solutions">راه‌حل‌های AI</a>
                        <a href="#businesses">کسب‌وکارها</a>
                        <Link to="/contact">تماس با ما</Link>
                    </div>

                    <div className="footer-links">
                        <h4>خدمات</h4>
                        <a href="#">اتوماسیون هوشمند</a>
                        <a href="#">چت‌بات پشتیبانی</a>
                        <a href="#">تحلیل داده</a>
                        <a href="#">تولید محتوا</a>
                    </div>

                    <div className="footer-contact">
                        <h4>ارتباط با ما</h4>
                        <p>آماده پاسخگویی به سوالات شما هستیم</p>
                        <Link to="/contact" className="btn btn-primary">
                            مشاوره رایگان بگیرید
                        </Link>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} پارادایم شیفت. تمامی حقوق محفوظ است.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
