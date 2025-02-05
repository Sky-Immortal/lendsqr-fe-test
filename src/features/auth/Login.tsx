import React from "react";
import { useNavigate } from "react-router-dom";
import "../../shared/styles/Login.scss";
import svgAssets from "../../assets/images/index";
import { loginText } from "../../shared/constants/textContent";
import { useLoginForm } from "../../shared/hooks/UseLoginHook"; // Import the custom hook

const Login: React.FC = () => {
  const navigate = useNavigate();
  const {
    showPassword,
    setShowPassword,
    isMobile,
    formData,
    errors,
    loginError,
    setLoginError,
    handleChange,
    validate,
  } = useLoginForm(); // Use the custom hook

  /**
   * Handles form submission and authentication
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoginError(""); // Clear previous errors
    
    const { email, password } = formData;
    
    if (validate('email', email) && validate('password', password)) {
      try {
        const response = await fetch('http://localhost:5000/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const users = await response.json();
        const user = users.find((u: any) => u.email === email);

        if (!user) {
          setLoginError("No account found with this email");
          return;
        }

        if (user.password === password) {
          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('isAuthenticated', 'true');
          window.dispatchEvent(new Event('storage'));
          navigate('/dashboard', { replace: true });
        } else {
          setLoginError("Invalid password");
        }
      } catch (error) {
        console.error('Login error:', error);
        setLoginError("Unable to connect to the server. Please try again later.");
      }
    }
  };

  return (
    <div className="container-fluid vh-100 vw-100 p-0">
      <div className="row h-100 g-0">
        {/* Login Image Section */}
        <div className="login-image col-md-6 d-flex justify-content-center align-items-center position-relative">
          {!isMobile && (
            <img 
              src={svgAssets.loginImage} 
              alt="Login illustration" 
              className="img-fluid"
              loading="lazy"
            />
          )}
          <img 
            src={svgAssets.logo} 
            alt="Company logo" 
            className="group-icon"
          />
        </div>

        {/* Login Form Section */}
        <div className="login-form col-md-6 d-flex justify-content-center align-items-center p-4">
          <form className="w-75" onSubmit={handleSubmit} noValidate>
            {/* Header */}
            <div className="mb-4">
              <h1 className="fw-bold col-blue">{loginText.welcome}</h1>
              <p className="fs-5 col-gray">{loginText.enterDetails}</p>
            </div>

            {/* Error Alert */}
            {loginError && (
              <div 
                className="alert alert-danger d-flex align-items-center" 
                role="alert"
                aria-live="polite"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  fill="currentColor" 
                  className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" 
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                <div>{loginError}</div>
              </div>
            )}

            {/* Form Fields */}
            <div className="mb-4">
              {/* Email Field */}
              <div className="mb-4">
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={e => validate('email', e.target.value)}
                  placeholder={loginText.emailLabel}
                  aria-label="Email address"
                  required
                />
                {errors.email && (
                  <div className="invalid-feedback" role="alert">
                    {errors.email}
                  </div>
                )}
              </div>

              {/* Password Field */}
              <div className="position-relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  onBlur={e => validate('password', e.target.value)}
                  placeholder={loginText.passwordLabel}
                  aria-label="Password"
                  required
                />
                <button
                  type="button"
                  className="password-toggle col-green letter-sm fw-semibold border-none bg-transparent position-absolute top-50 end-0 translate-middle-y px-3"
                  onClick={() => setShowPassword(prev => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "HIDE" : "SHOW"}
                </button>
                {errors.password && (
                  <div className="invalid-feedback" role="alert">
                    {errors.password}
                  </div>
                )}
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="mb-4">
              <a 
                href="#forgot-password" 
                className="text-decoration-none letter-sm col-green fw-600"
                aria-label="Forgot password"
              >
                {loginText.forgotPassword}
              </a>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="btn btn-green w-100 letter-sm fw-semibold"
              aria-label="Log in"
            >
              {loginText.loginButton}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
