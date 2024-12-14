import { Link } from "react-router-dom";

const headerStyle = {
    padding: '10px 20px',
    backgroundColor: '#f8f9fa',
    borderBottom: '2px solid #dee2e6',
};

const sectionStyle = {
    marginBottom: '10px',
};

const linkGroupStyle = {
    display: 'flex',
    justifyContent: 'flex-start', // 左寄せ
    gap: '15px', // リンク間の間隔
    margin: '5px 0',
};

const linkStyle = {
    textDecoration: 'none',
    color: '#007BFF',
    fontWeight: 'bold',
    transition: 'color 0.3s',
};

export const Header = ({}) => {
    return (
        <div>
            <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>学習記録</h1>
            <div style={headerStyle}>
                {/* ホームセクション */}
                <div style={sectionStyle}>
                    <h2 style={{ fontSize: '1rem', margin: '5px 0' }}>ホーム</h2>
                    <div style={linkGroupStyle}>
                        <Link to="/" style={linkStyle}>ホーム</Link>
                    </div>
                </div>
                <hr />
                {/* ページ群 */}
                <div style={sectionStyle}>
                    <h2 style={{ fontSize: '1rem', margin: '5px 0' }}>ページ群</h2>
                    <div style={linkGroupStyle}>
                        <Link to="/HTMLLink" style={linkStyle}>HTML</Link>
                        <Link to="/CSSLink" style={linkStyle}>CSS</Link>
                        <Link to="/JavaScriptLink" style={linkStyle}>JavaScript</Link>
                        <Link to="/ReactLink" style={linkStyle}>React</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};