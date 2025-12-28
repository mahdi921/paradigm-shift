import './NotebookPlaceholder.css'

function NotebookPlaceholder({ title, businessName }) {
    return (
        <div className="notebook-placeholder">
            <div className="notebook-icon">📒</div>
            <h4 className="notebook-title">{title || 'پرزنت هوشمند'}</h4>
            <p className="notebook-desc">
                {businessName
                    ? `پرزنت اختصاصی برای ${businessName}`
                    : 'محتوای NotebookLM در اینجا قرار می‌گیرد'
                }
            </p>
            <div className="notebook-actions">
                <button className="btn btn-secondary">
                    <span className="btn-icon">▶️</span>
                    مشاهده پرزنت کامل
                </button>
            </div>
            <p className="notebook-hint">
                این بخش برای embed کردن NotebookLM یا محتوای تعاملی در نظر گرفته شده
            </p>
        </div>
    )
}

export default NotebookPlaceholder
