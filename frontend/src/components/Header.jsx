import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
            <div className="container">
                <nav className="nav">
                    <Link to="/" className="logo">
                        <span className="logo-icon">🧠</span>
                        <span className="logo-text">پارادایم شیفت</span>
                    </Link>

                    <div className={`nav-links ${mobileMenuOpen ? 'nav-links-open' : ''}`}>
                        <a href="#problems" className="nav-link">مشکلات رایج</a>
                        <a href="#solutions" className="nav-link">راه‌حل‌های AI</a>
                        <a href="#businesses" className="nav-link">کسب‌وکارها</a>
                        <Link to="/contact" className="btn btn-primary">
                            مشاوره رایگان
                        </Link>
                    </div>

                    <button
                        className="mobile-menu-btn"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="منو"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default Header
