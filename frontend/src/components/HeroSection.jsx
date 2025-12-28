import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Plyr from 'plyr'
import 'plyr/dist/plyr.css'
import './HeroSection.css'

function HeroSection() {
    const videoRef = useRef(null)
    const playerRef = useRef(null)

    useEffect(() => {
        if (videoRef.current && !playerRef.current) {
            playerRef.current = new Plyr(videoRef.current, {
                controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
                hideControls: true,
                clickToPlay: true,
            })
        }

        return () => {
            if (playerRef.current) {
                playerRef.current.destroy()
            }
        }
    }, [])

    return (
        <section className="hero">
            <div className="hero-bg">
                <div className="hero-gradient"></div>
                <div className="hero-particles"></div>
            </div>

            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <span className="hero-badge">
                            <span className="badge-dot"></span>
                            راه‌حل‌های هوشمند برای کسب‌وکار شما
                        </span>

                        <h1 className="hero-title">
                            هوش مصنوعی چطور می‌تونه
                            <span className="text-gradient"> هزینه‌هات رو کم کنه </span>
                            و
                            <span className="text-gradient"> فروشت رو بیشتر کنه؟</span>
                        </h1>

                        <p className="hero-subtitle">
                            کاربردهای واقعی AI برای کسب‌وکارهای ایرانی، بدون حرف‌های پیچیده.
                            <br />
                            ما دردسرهاتو می‌فهمیم و راه‌حل داریم.
                        </p>

                        <div className="hero-actions">
                            <a href="#businesses" className="btn btn-primary btn-lg">
                                <span className="btn-icon">👀</span>
                                کاربردها رو ببین
                            </a>
                            <Link to="/contact" className="btn btn-secondary btn-lg">
                                <span className="btn-icon">💬</span>
                                مشاوره رایگان
                            </Link>
                        </div>

                        <div className="hero-stats">
                            <div className="stat">
                                <span className="stat-number">۴۳+</span>
                                <span className="stat-label">نوع کسب‌وکار</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">۷</span>
                                <span className="stat-label">دسته‌بندی</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">۲۴/۷</span>
                                <span className="stat-label">پشتیبانی</span>
                            </div>
                        </div>
                    </div>

                    <div className="hero-video">
                        <div className="video-wrapper">
                            <div className="video-placeholder">
                                {/* Video placeholder - Replace src with actual video URL */}
                                <video
                                    ref={videoRef}
                                    className="plyr-video"
                                    playsInline
                                    poster=""
                                >
                                    {/* Add your video source here */}
                                    {/* <source src="/video/intro.mp4" type="video/mp4" /> */}
                                </video>
                                <div className="video-overlay">
                                    <div className="play-button">
                                        <span>▶</span>
                                    </div>
                                    <p>ویدیوی معرفی</p>
                                    <span className="video-hint">برای نمایش ویدیو کلیک کنید</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-scroll-indicator">
                <span>اسکرول کنید</span>
                <div className="scroll-arrow">↓</div>
            </div>
        </section>
    )
}

export default HeroSection
