// src/pages/Home/index.tsx
import { Link } from 'react-router-dom';
// @ts-ignore
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* 顶部导航栏 */}
            <header style={{
                backgroundColor: '#f8f9fa',
                padding: '1rem 2rem',
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <img
                        src="/images/logo.png"
                        alt="公司Logo"
                        style={{ height: '40px' }}
                    />
                    <h1 style={{ margin: 0, fontSize: '1.5rem', color: '#333' }}>安戈普罗科技有限公司</h1>
                </div>
                <nav style={{ marginLeft: 'auto', display: 'flex', gap: '2rem' }}>
                    <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>已上线服务</Link>
                    <Link to="/about" style={{ textDecoration: 'none', color: '#333' }}>关于我们</Link>
                    <Link to="/contact" style={{ textDecoration: 'none', color: '#333' }}>联系我们</Link>
                </nav>
            </header>

            {/* 轮播图区域 */}

            <div style={{
                flex: 1,
                margin: '2rem 0',
                display: 'flex',
                justifyContent: 'center',     // 新增
                alignItems: 'center',         // 新增
                width: '100%'                 // 确保容器宽度
            }}>
                <Slider {...sliderSettings} style={{ width: '100%', maxWidth: '1200px' }}> {/* 新增maxWidth */}
                    {[1, 2, 3, 4, 5].map((num) => (
                        <div key={num} style={{ padding: '0 15%' }}> {/* 新增两侧留白 */}
                            <img
                                src={`/images/${num}.jpg`}
                                alt={`轮播图 ${num}`}
                                style={{
                                    width: '100%',      // 改为100%填满容器
                                    height: '700px',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                    margin: '0 auto'    // 新增自动外边距
                                }}
                            />
                        </div>
                    ))}
                </Slider>
            </div>

            {/* 公司介绍 */}
            <section style={{
                padding: '3rem 2rem',
                backgroundColor: '#fff',
                margin: '2rem 0'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2rem'
                }}>
                    <img
                        src="/images/logo.png"
                        alt="公司Logo"
                        style={{ height: '120px' }}
                    />
                    <div>
                        <h2 style={{ color: '#333' }}>关于我们</h2>
                        <p style={{ lineHeight: 1.6, color: '#666' }}>
                            我们是一家专注于技术创新的科技企业，致力于为客户提供优质的解决方案。
                            成立于2020年，已服务超过500家客户，覆盖多个行业领域...
                        </p>
                    </div>
                </div>
            </section>

            {/* 底部联系方式 */}
            <footer style={{
                backgroundColor: '#333',
                color: '#fff',
                padding: '2rem',
                textAlign: 'center'
            }}>
                <div>
                    <p style={{ margin: 0 }}>
                        联系电话：021-12345678 |
                        电子邮箱：info@company.com |
                        办公地址：上海市浦东新区科技园
                    </p>
                    <p style={{ margin: '1rem 0 0 0' }}>
                        © 2024 公司名称 版权所有
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Home;