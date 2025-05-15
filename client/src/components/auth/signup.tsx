'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';
import signupImage from '../../assets/signup-img.jpg'
const SignupPage: React.FC = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      image: null as File | null,
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string().min(6, 'Minimum 6 characters').required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is required'),
      image: Yup.mixed().required('Image is required'),
    }),
    onSubmit: (values) => {
      console.log('Form Submitted', values);
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      formik.setFieldValue('image', file);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl h-auto bg-white dark:bg-black rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row">
        <div className="w-full md:w-2/5 p-8 md:p-10 relative">
          <div className="absolute top-5 left-5">
            <span className="text-emerald-800 font-medium text-sm">•IND</span>
          </div>
          <div className="mt-8">
            <h1 className="text-2xl font-normal text-stone-900 mb-1 dark:text-stone-50">Create an account</h1>
            <p className="text-stone-600 text-sm mb-6">Sign up to get started</p>

            <form onSubmit={formik.handleSubmit} className="space-y-4">
              <div className="flex flex-col items-center space-y-2">
                <label htmlFor="image" className="cursor-pointer">
                  <div className="h-20 w-20 rounded-full bg-stone-200 overflow-hidden flex items-center justify-center shadow-inner">
                    {preview ? (
                      <Image src={preview} alt="Profile" width={80} height={80} className="h-full w-full object-cover" />
                    ) : (
                      <span className="text-sm text-stone-500">Upload</span>
                    )}
                  </div>
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
                {formik.touched.image && formik.errors.image && (
                  <p className="text-xs text-red-500">{formik.errors.image}</p>
                )}
              </div>

              <div>
                <label htmlFor="username" className="block text-sm text-stone-600 mb-1">Username</label>
                <input
                  type="text"
                  id="username"
                  {...formik.getFieldProps('username')}
                  className="w-full border border-stone-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-600"
                />
                {formik.touched.username && formik.errors.username && (
                  <p className="text-xs text-red-500">{formik.errors.username}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-stone-600 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  {...formik.getFieldProps('email')}
                  className="w-full border border-stone-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-600"
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-xs text-red-500">{formik.errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm text-stone-600 mb-1">Password</label>
                <input
                  type="password"
                  id="password"
                  {...formik.getFieldProps('password')}
                  className="w-full border border-stone-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-600"
                />
                {formik.touched.password && formik.errors.password && (
                  <p className="text-xs text-red-500">{formik.errors.password}</p>
                )}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm text-stone-600 mb-1">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  {...formik.getFieldProps('confirmPassword')}
                  className="w-full border border-stone-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-600"
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                  <p className="text-xs text-red-500">{formik.errors.confirmPassword}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-stone-900 hover:bg-stone-800 text-white py-2 rounded transition-colors"
              >
                Sign Up
              </button>
            </form>

            <div className="mt-6 text-center text-xs text-stone-500">
              Already have an account?{" "}
              <Link href="/login" className="text-emerald-700 hover:underline">
                Log in
              </Link>
            </div>
          </div>
        </div>
        {/* right side section gonna add soon */}
        <div className="w-full md:w-3/5 relative h-full md:h-auto bg-emerald-800">
          <Image src={signupImage} alt="Signup" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
