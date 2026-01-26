"use client";

import React from "react";

export default function AboutPage(): React.ReactElement {
    return (
        <main style={{ 
            minHeight: "100vh",
            background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
            padding: "0px",
            fontFamily: "system-ui, -apple-system, Roboto, 'Segoe UI', sans-serif",
            overflow: "hidden",
            position: "relative"
        }}>
            {/* Animated background shapes */}
            <div style={{
                position: "absolute",
                top: "-100px",
                right: "-100px",
                width: "300px",
                height: "300px",
                background: "radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)",
                borderRadius: "50%",
                animation: "float 6s ease-in-out infinite"
            }}></div>
            <div style={{
                position: "absolute",
                bottom: "-50px",
                left: "-50px",
                width: "250px",
                height: "250px",
                background: "radial-gradient(circle, rgba(118, 75, 162, 0.1) 0%, transparent 70%)",
                borderRadius: "50%",
                animation: "float 8s ease-in-out infinite reverse"
            }}></div>

            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 32px", position: "relative", zIndex: 1 }}>
                {/* Header Section */}
                <header style={{ 
                    textAlign: "center", 
                    color: "white",
                    marginBottom: 100,
                    animation: "fadeInDown 1s ease-out",
                    marginTop: 40
                }}>
                    <div style={{
                        display: "inline-block",
                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        padding: "20px 40px",
                        borderRadius: "50px",
                        marginBottom: 30,
                        animation: "slideInRight 1s ease-out"
                    }}>
                        <span style={{ fontSize: 20, fontWeight: 600 }}>Welcome</span>
                    </div>
                    <h1 style={{ 
                        fontSize: 72, 
                        fontWeight: 800,
                        marginBottom: 24,
                        letterSpacing: "-2px",
                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text"
                    }}>About Us</h1>
                    <p style={{ 
                        fontSize: 22,
                        color: "rgba(255, 255, 255, 0.8)",
                        marginTop: 0,
                        fontWeight: 300,
                        maxWidth: 600,
                        margin: "0 auto"
                    }}>
                        We craft digital experiences that inspire, engage, and drive results.
                    </p>
                </header>

                {/* Stats Section */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: 24,
                    marginBottom: 100,
                    animation: "fadeInUp 1.2s ease-out"
                }}>
                    {[
                        { number: "500+", label: "Projects Completed" },
                        { number: "99%", label: "Client Satisfaction" },
                        { number: "10+", label: "Years Experience" }
                    ].map((stat, idx) => (
                        <div key={idx} style={{
                            background: "rgba(255, 255, 255, 0.05)",
                            backdropFilter: "blur(10px)",
                            border: "1px solid rgba(102, 126, 234, 0.2)",
                            borderRadius: 16,
                            padding: 32,
                            textAlign: "center",
                            transition: "all 0.3s ease"
                        }}>
                            <div style={{
                                fontSize: 48,
                                fontWeight: 800,
                                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                marginBottom: 12
                            }}>{stat.number}</div>
                            <div style={{
                                fontSize: 16,
                                color: "rgba(255, 255, 255, 0.7)"
                            }}>{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Main Content Grid */}
                <div style={{ 
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: 32,
                    marginBottom: 60,
                    animation: "fadeInUp 1.4s ease-out"
                }}>
                    {/* Mission Card */}
                    <div style={{ 
                        background: "linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%)",
                        border: "1px solid rgba(102, 126, 234, 0.3)",
                        borderRadius: 20,
                        padding: 48,
                        backdropFilter: "blur(10px)",
                        transition: "all 0.4s ease",
                        cursor: "pointer",
                        position: "relative",
                        overflow: "hidden"
                    }}>
                        <div style={{
                            position: "absolute",
                            top: 0,
                            right: 0,
                            width: 200,
                            height: 200,
                            background: "radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)",
                            borderRadius: "50%",
                            transform: "translate(50%, -50%)"
                        }}></div>
                        <div style={{
                            fontSize: 64,
                            marginBottom: 24,
                            position: "relative",
                            zIndex: 2
                        }}>🎯</div>
                        <h2 style={{ 
                            fontSize: 32,
                            margin: "0 0 16px 0",
                            color: "#fff",
                            fontWeight: 700,
                            position: "relative",
                            zIndex: 2
                        }}>Our Mission</h2>
                        <p style={{ 
                            color: "rgba(255, 255, 255, 0.8)",
                            fontSize: 17,
                            lineHeight: 1.8,
                            margin: 0,
                            position: "relative",
                            zIndex: 2
                        }}>
                            Deliver fast, reliable, and maintainable applications that transform businesses and delight users.
                        </p>
                    </div>

                    {/* Vision Card */}
                    <div style={{ 
                        background: "linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%)",
                        border: "1px solid rgba(102, 126, 234, 0.3)",
                        borderRadius: 20,
                        padding: 48,
                        backdropFilter: "blur(10px)",
                        transition: "all 0.4s ease",
                        cursor: "pointer",
                        position: "relative",
                        overflow: "hidden"
                    }}>
                        <div style={{
                            position: "absolute",
                            top: 0,
                            right: 0,
                            width: 200,
                            height: 200,
                            background: "radial-gradient(circle, rgba(118, 75, 162, 0.2) 0%, transparent 70%)",
                            borderRadius: "50%",
                            transform: "translate(50%, -50%)"
                        }}></div>
                        <div style={{
                            fontSize: 64,
                            marginBottom: 24,
                            position: "relative",
                            zIndex: 2
                        }}>🚀</div>
                        <h2 style={{ 
                            fontSize: 32,
                            margin: "0 0 16px 0",
                            color: "#fff",
                            fontWeight: 700,
                            position: "relative",
                            zIndex: 2
                        }}>Our Vision</h2>
                        <p style={{ 
                            color: "rgba(255, 255, 255, 0.8)",
                            fontSize: 17,
                            lineHeight: 1.8,
                            margin: 0,
                            position: "relative",
                            zIndex: 2
                        }}>
                            Be the trusted partner that brings bold ideas to life through innovative, accessible technology.
                        </p>
                    </div>

                    {/* Values Card */}
                    <div style={{ 
                        background: "linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%)",
                        border: "1px solid rgba(102, 126, 234, 0.3)",
                        borderRadius: 20,
                        padding: 48,
                        backdropFilter: "blur(10px)",
                        transition: "all 0.4s ease",
                        cursor: "pointer",
                        position: "relative",
                        overflow: "hidden",
                        gridColumn: "1 / -1"
                    }}>
                        <div style={{
                            position: "absolute",
                            top: 0,
                            right: 0,
                            width: 200,
                            height: 200,
                            background: "radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)",
                            borderRadius: "50%",
                            transform: "translate(50%, -50%)"
                        }}></div>
                        <h2 style={{ 
                            fontSize: 32,
                            margin: "0 0 32px 0",
                            color: "#fff",
                            fontWeight: 700,
                            position: "relative",
                            zIndex: 2,
                            display: "flex",
                            alignItems: "center",
                            gap: 16
                        }}>
                            <span style={{ fontSize: 56 }}>⭐</span>
                            Core Values
                        </h2>
                        <ul style={{ 
                            listStyle: "none",
                            padding: 0,
                            margin: 0,
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                            gap: 24,
                            position: "relative",
                            zIndex: 2
                        }}>
                            {[
                                { icon: "⚡", title: "Performance-First", desc: "Speed and efficiency at our core" },
                                { icon: "♿", title: "Accessibility", desc: "Inclusive design for everyone" },
                                { icon: "🎨", title: "Clean Code", desc: "Maintainable and elegant solutions" },
                                { icon: "🤝", title: "Collaboration", desc: "Working together for excellence" }
                            ].map((value, idx) => (
                                <div key={idx} style={{
                                    padding: 20,
                                    background: "rgba(255, 255, 255, 0.05)",
                                    borderRadius: 12,
                                    border: "1px solid rgba(102, 126, 234, 0.2)"
                                }}>
                                    <div style={{ fontSize: 32, marginBottom: 12 }}>{value.icon}</div>
                                    <div style={{ fontSize: 18, fontWeight: 600, color: "#fff", marginBottom: 6 }}>{value.title}</div>
                                    <div style={{ fontSize: 14, color: "rgba(255, 255, 255, 0.6)" }}>{value.desc}</div>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* CTA Section */}
                <div style={{
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    borderRadius: 20,
                    padding: 60,
                    textAlign: "center",
                    animation: "fadeInUp 1.6s ease-out",
                    position: "relative",
                    overflow: "hidden"
                }}>
                    <div style={{
                        position: "absolute",
                        top: "-50px",
                        right: "-50px",
                        width: 200,
                        height: 200,
                        background: "rgba(255, 255, 255, 0.1)",
                        borderRadius: "50%"
                    }}></div>
                    <h2 style={{
                        fontSize: 40,
                        color: "white",
                        margin: "0 0 16px 0",
                        fontWeight: 700,
                        position: "relative",
                        zIndex: 2
                    }}>Ready to Work Together?</h2>
                    <p style={{
                        fontSize: 18,
                        color: "rgba(255, 255, 255, 0.9)",
                        margin: "0 0 32px 0",
                        position: "relative",
                        zIndex: 2
                    }}>Let's create something amazing together.</p>
                    <a href="mailto:hello@example.com" style={{
                        display: "inline-block",
                        padding: "16px 40px",
                        background: "white",
                        color: "#667eea",
                        textDecoration: "none",
                        borderRadius: 12,
                        fontWeight: 700,
                        fontSize: 16,
                        transition: "all 0.3s ease",
                        position: "relative",
                        zIndex: 2,
                        border: "2px solid white"
                    }}>
                        Get in Touch →
                    </a>
                </div>
            </div>

            <style>{`
                @keyframes fadeInDown {
                    from {
                        opacity: 0;
                        transform: translateY(-40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(-40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(30px);
                    }
                }

                a:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                }
            `}</style>
        </main>
    );
}