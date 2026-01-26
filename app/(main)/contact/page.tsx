'use client';
import React, { useId, useState } from 'react'



export default function ContactPage() {
    const id = useId()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [error, setError] = useState<string | null>(null)

    const validateEmail = (value: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError(null)
        setStatus('idle')

        if (!name.trim() || !email.trim() || !message.trim()) {
            setError('Please complete all fields.')
            return
        }
        if (!validateEmail(email)) {
            setError('Please enter a valid email address.')
            return
        }

        setLoading(true)
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() }),
            })

            if (!res.ok) {
                const payload = await res.json().catch(() => null)
                throw new Error(payload?.error || 'Submission failed')
            }

            setStatus('success')
            setName('')
            setEmail('')
            setMessage('')
        } catch (err: any) {
            setStatus('error')
            setError(err?.message || 'Something went wrong.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <main style={{ 
            minHeight: "100vh",
            background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
            padding: "80px 32px",
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

            <div style={{ maxWidth: 720, margin: "0 auto", position: "relative", zIndex: 1 }}>
                {/* Header */}
                <header style={{
                    textAlign: "center",
                    color: "white",
                    marginBottom: 60,
                    animation: "fadeInDown 1s ease-out",
                    marginTop: 40
                }}>
                    <div style={{
                        display: "inline-block",
                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        padding: "12px 32px",
                        borderRadius: "50px",
                        marginBottom: 24,
                        animation: "slideInRight 1s ease-out"
                    }}>
                        <span style={{ fontSize: 16, fontWeight: 600 }}>Get In Touch</span>
                    </div>
                    <h1 style={{ 
                        fontSize: 60, 
                        fontWeight: 800,
                        marginBottom: 16,
                        letterSpacing: "-1px",
                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text"
                    }}>Contact Us</h1>
                    <p style={{ 
                        fontSize: 18,
                        color: "rgba(255, 255, 255, 0.8)",
                        marginTop: 0,
                        fontWeight: 300
                    }}>
                        Send us a message and we will get back to you as soon as possible.
                    </p>
                </header>

                {/* Form Container */}
                <form onSubmit={handleSubmit} aria-labelledby={`${id}-title`} style={{
                    background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
                    border: "1px solid rgba(102, 126, 234, 0.2)",
                    borderRadius: 20,
                    padding: 48,
                    backdropFilter: "blur(10px)",
                    animation: "fadeInUp 1.2s ease-out"
                }}>
                    <div style={{ marginBottom: 32 }}>
                        <label htmlFor={`${id}-name`} style={{ 
                            display: 'block', 
                            marginBottom: 12,
                            color: "#fff",
                            fontWeight: 600,
                            fontSize: 16
                        }}>
                            Name
                        </label>
                        <input
                            id={`${id}-name`}
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            style={{ 
                                width: '100%', 
                                padding: '14px 16px', 
                                boxSizing: 'border-box',
                                background: "rgba(255, 255, 255, 0.1)",
                                border: "1px solid rgba(102, 126, 234, 0.3)",
                                borderRadius: 10,
                                color: "#fff",
                                fontSize: 16,
                                transition: "all 0.3s ease",
                                fontFamily: "inherit"
                            }}
                            onFocus={(e) => {
                                e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
                                e.currentTarget.style.borderColor = "rgba(102, 126, 234, 0.6)";
                            }}
                            onBlur={(e) => {
                                e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                                e.currentTarget.style.borderColor = "rgba(102, 126, 234, 0.3)";
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: 32 }}>
                        <label htmlFor={`${id}-email`} style={{ 
                            display: 'block', 
                            marginBottom: 12,
                            color: "#fff",
                            fontWeight: 600,
                            fontSize: 16
                        }}>
                            Email
                        </label>
                        <input
                            id={`${id}-email`}
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{ 
                                width: '100%', 
                                padding: '14px 16px', 
                                boxSizing: 'border-box',
                                background: "rgba(255, 255, 255, 0.1)",
                                border: "1px solid rgba(102, 126, 234, 0.3)",
                                borderRadius: 10,
                                color: "#fff",
                                fontSize: 16,
                                transition: "all 0.3s ease",
                                fontFamily: "inherit"
                            }}
                            onFocus={(e) => {
                                e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
                                e.currentTarget.style.borderColor = "rgba(102, 126, 234, 0.6)";
                            }}
                            onBlur={(e) => {
                                e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                                e.currentTarget.style.borderColor = "rgba(102, 126, 234, 0.3)";
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: 32 }}>
                        <label htmlFor={`${id}-message`} style={{ 
                            display: 'block', 
                            marginBottom: 12,
                            color: "#fff",
                            fontWeight: 600,
                            fontSize: 16
                        }}>
                            Message
                        </label>
                        <textarea
                            id={`${id}-message`}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            rows={6}
                            style={{ 
                                width: '100%', 
                                padding: '14px 16px', 
                                boxSizing: 'border-box',
                                resize: 'vertical',
                                background: "rgba(255, 255, 255, 0.1)",
                                border: "1px solid rgba(102, 126, 234, 0.3)",
                                borderRadius: 10,
                                color: "#fff",
                                fontSize: 16,
                                transition: "all 0.3s ease",
                                fontFamily: "inherit"
                            }}
                            onFocus={(e) => {
                                e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
                                e.currentTarget.style.borderColor = "rgba(102, 126, 234, 0.6)";
                            }}
                            onBlur={(e) => {
                                e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                                e.currentTarget.style.borderColor = "rgba(102, 126, 234, 0.3)";
                            }}
                        />
                    </div>

                    {error && (
                        <div role="alert" style={{ 
                            color: '#ff6b6b', 
                            marginBottom: '24px',
                            background: "rgba(255, 107, 107, 0.1)",
                            border: "1px solid rgba(255, 107, 107, 0.3)",
                            padding: 16,
                            borderRadius: 10,
                            fontSize: 15
                        }}>
                            ⚠️ {error}
                        </div>
                    )}
                    {status === 'success' && (
                        <div role="status" style={{ 
                            color: '#51cf66', 
                            marginBottom: '24px',
                            background: "rgba(81, 207, 102, 0.1)",
                            border: "1px solid rgba(81, 207, 102, 0.3)",
                            padding: 16,
                            borderRadius: 10,
                            fontSize: 15
                        }}>
                            ✅ Message sent successfully!
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            width: '100%',
                            padding: '16px 24px',
                            background: loading ? "rgba(102, 126, 234, 0.5)" : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            color: '#fff',
                            border: 'none',
                            borderRadius: 10,
                            cursor: loading ? 'not-allowed' : 'pointer',
                            fontSize: 16,
                            fontWeight: 700,
                            transition: "all 0.3s ease",
                            letterSpacing: "0.5px"
                        }}
                        onMouseEnter={(e) => {
                            if (!loading) {
                                e.currentTarget.style.transform = "translateY(-2px)";
                                e.currentTarget.style.boxShadow = "0 10px 30px rgba(102, 126, 234, 0.4)";
                            }
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "none";
                        }}
                    >
                        {loading ? '⏳ Sending...' : '📧 Send Message'}
                    </button>
                </form>
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

                input::placeholder, textarea::placeholder {
                    color: rgba(255, 255, 255, 0.5);
                }
            `}</style>
        </main>
    )
}