
import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa';

const Regestation = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const toggleForm = () => setIsLogin(!isLogin);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className=" bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center p-6">
      <div className="card w-full max-w-xl bg-white shadow-2xl">
        <div className="card-body p-8">
          <h2 className="card-title text-4xl font-bold text-center mb-8 text-gray-800">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium text-gray-700">Username</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FaUser className="text-gray-400" />
                  </span>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="Enter your username"
                    className="input input-bordered w-full pl-10 py-3 text-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium text-gray-700">Email</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <FaEnvelope className="text-gray-400" />
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="input input-bordered w-full pl-10 py-3 text-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium text-gray-700">Password</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <FaLock className="text-gray-400" />
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="input input-bordered w-full pl-10 pr-12 py-3 text-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-gray-400 hover:text-gray-600" />
                  ) : (
                    <FaEye className="text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>
            {!isLogin && (
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium text-gray-700">Confirm Password</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FaLock className="text-gray-400" />
                  </span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                    className="input input-bordered w-full pl-10 py-3 text-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            )}
            {isLogin && (
              <div className="flex justify-end">
                <a href="#" className="text-blue-600 hover:underline text-lg">Forgot password?</a>
              </div>
            )}
            <div className="form-control mt-4">
              <button className="btn btn-primary btn-lg text-lg font-semibold py-3">
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </div>
          </form>
          <div className="divider my-4 text-gray-500">OR</div>
          <div className="flex justify-center space-x-6">
            <button className="btn btn-circle btn-outline btn-lg">
              <FaFacebookF className="text-xl" />
            </button>
            <button className="btn btn-circle btn-outline btn-lg">
              <FaGoogle className="text-xl" />
            </button>
            <button className="btn btn-circle btn-outline btn-lg">
              <FaGithub className="text-xl" />
            </button>
          </div>
          <div className="text-center mt-4">
            <button
              className="text-lg text-blue-600 hover:underline"
              onClick={toggleForm}
            >
              {isLogin
                ? "Don't have an account? Sign Up"
                : 'Already have an account? Sign In'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regestation;