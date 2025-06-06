import React, { useState } from 'react';
import './AuthPage.css';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isLogin) {
            console.log('Login data:', { email: formData.email, password: formData.password });
        } else {
            if (formData.password !== formData.confirmPassword) {
                alert("Passwords don't match!");
                return;
            }
            console.log('Signup data:', {
                name: formData.name,
                email: formData.email,
                password: formData.password
            });
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-toggle">
                    <button
                        className={`toggle-btn ${isLogin ? 'active' : ''}`}
                        onClick={() => setIsLogin(true)}
                    >
                        Login
                    </button>
                    <button
                        className={`toggle-btn ${!isLogin ? 'active' : ''}`}
                        onClick={() => setIsLogin(false)}
                    >
                        Sign Up
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="auth-form">
                    {!isLogin && (
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Enter your full name"
                            />
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            placeholder="Enter your password"
                            minLength={6}
                        />
                    </div>

                    {!isLogin && (
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                                placeholder="Confirm your password"
                                minLength={6}
                            />
                        </div>
                    )}

                    <button type="submit" className="submit-btn">
                        {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                </form>

                <div className="auth-footer">
                    {isLogin ? (
                        <p>
                            Don't have an account?{' '}
                            <span onClick={() => setIsLogin(false)}>Sign up</span>
                        </p>
                    ) : (
                        <p>
                            Already have an account?{' '}
                            <span onClick={() => setIsLogin(true)}>Login</span>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthPage;