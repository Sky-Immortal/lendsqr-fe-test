import { useState, useEffect, useCallback } from 'react';

// Types and Interfaces
type ValidationErrors = Record<'email' | 'password', string>;

interface FormState {
  email: string;
  password: string;
}

// Password validation criteria
const PASSWORD_CRITERIA = [
  { test: (v: string) => v.length >= 8, message: "Must be at least 8 characters" },
  { test: /[A-Z]/, message: "Must contain uppercase letter" },
  { test: /[a-z]/, message: "Must contain lowercase letter" },
  { test: /[0-9]/, message: "Must contain number" }
] as const;

export const useLoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 767.98);
  const [formData, setFormData] = useState<FormState>({ email: "", password: "" });
  const [errors, setErrors] = useState<ValidationErrors>({ email: "", password: "" });
  const [loginError, setLoginError] = useState<string>("");

  // Handle resize event
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767.98);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Validate form inputs
  const validate = useCallback((name: string, value: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = name === 'email' 
      ? emailRegex.test(value)
      : !PASSWORD_CRITERIA.find(({ test }) => 
          typeof test === 'function' ? !test(value) : !test.test(value)
        );

    setErrors(prev => ({
      ...prev,
      [name]: isValid ? "" : `Invalid ${name}`
    }));

    return isValid;
  }, []);

  // Handle form input changes
  const handleChange = useCallback(({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData(prev => ({ ...prev, [name]: value }));
    setLoginError(""); // Clear login error when user types

    if (name === 'password') {
      validate(name, value);
    }
  }, [validate]);

  return {
    showPassword,
    setShowPassword,
    isMobile,
    formData,
    setFormData,
    errors,
    setErrors,
    loginError,
    setLoginError,
    handleChange,
    validate,
  };
};
