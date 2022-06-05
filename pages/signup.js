import React, { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import useAxios from '../hooks/useAxios';
import { useRouter } from 'next/router';
import useAuth from '../hooks/useAuth';

const signup = () => {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [getError, setGetErrors] = useState();
    const { register, handleSubmit } = useForm();

    const [, postRegister] = useAxios({ url: '/auth/register', method: 'POST' }, { manual: true })

    const onSubmit = async (data) => {
        setIsLoading(true)  
        try {
            await postRegister({ data })
            router.push('/login');
            setIsLoading(false)
        } catch (error) {
            const errorMessage = error.response.data.data.message
            setGetErrors(errorMessage)
            setIsLoading(false)

        }
    };

    useAuth();
    return (
        <section className="text-center text-lg-start">
            <style dangerouslySetInnerHTML={{ __html: "\n    .cascading-right {\n      margin-right: -50px;\n    }\n\n    @media (max-width: 991.98px) {\n      .cascading-right {\n        margin-right: 0;\n      }\n    }\n  " }} />
            {/* Jumbotron */}
            <div className="container py-4">
                <div className="row g-0 align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="card cascading-right" style={{ background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)' }}>
                            <div className="card-body p-5 shadow-5 text-center">
                                <h2 className="fw-bold mb-5">Sign up now</h2>
                                {getError && (
                                    <div className="alert alert-danger mb-5" role="alert">
                                        {getError}
                                    </div>
                                )}
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    {/* 2 column grid layout with text inputs for the first and last names */}
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <label className="form-label" htmlFor="form3Example1">First name</label>
                                                <input type="text" id="form3Example1" className="form-control" {...register("firstname")} required/>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <label className="form-label" htmlFor="form3Example2">Last name</label>
                                                <input type="text" id="form3Example2" className="form-control"  {...register("lastname")} required/>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Email input */}
                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="form3Example3">Email address</label>
                                        <input type="email" id="form3Example3" className="form-control"  {...register("email")} required/>
                                    </div>
                                    {/* Password input */}
                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="form3Example4">Password</label>
                                        <input type="password" id="form3Example4" className="form-control"  {...register("password")} required/>
                                    </div>
                                    {/* Checkbox */}
                                    <div className="form-check d-flex justify-content-center mb-4">
                                        <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example33" defaultChecked />
                                        <label className="form-check-label" htmlFor="form2Example33">
                                            Subscribe to our newsletter
                                        </label>
                                    </div>
                                    {/* Submit button */}
                                    <button type="submit" className="btn btn-primary btn-block mb-4">
                                        {isLoading ? 'Loading...' : 'Sign Up'}
                                    </button>
                                    {/* Register buttons */}
                                    <div className="text-center">
                                        <p>or sign up with:</p>
                                        <div className="text-center">
                                            <p>Sudah punya akun? silahkan  <Link href="/login" target="_blank">Login</Link></p>

                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <img src="https://i.pinimg.com/736x/27/b8/05/27b805b928416c8b4c7ac790d1e9ef50.jpg" className="w-100 rounded-4 shadow-4" alt="" />
                    </div>
                </div>
            </div>
            {/* Jumbotron */}
        </section>
    )
}

export default signup