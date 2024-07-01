import React, { useState } from "react";
import background from '../../assets/bg.png'
import { Link, useNavigate } from "react-router-dom";
const backendUrl = import.meta.env.VITE_APP_BACKEND_URL;
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let result = await fetch(`${backendUrl}/login`, {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' }
            });
            if (result.ok) {
                result = await result.json();
                localStorage.setItem('user', JSON.stringify(result.userId));
                localStorage.setItem('token', result.token);
                setEmail("");
                setPassword("");
                navigate('/');
            }
            else {
                console.log("invlaid Credentials")
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (

        <>
            <div className="w-full h-screen flex justify-center items-center"
                style={{
                    backgroundImage: `url(${background}),
          -webkit-linear-gradient(bottom, #98c642, #227022)` }}>
                <div className="w-full max-w-sm">
                    <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                        <div >
                            <h1 className="text-center text-3xl font-bold"> Login Form</h1>
                        </div>
                        <div className="mb-4 mt-7">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                            {/* <p className="text-red-500 text-xs italic">Please Enter email.</p> */}
                        </div>
                        <div className="mb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                            {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
                        </div>

                        <div className="flex items-center justify-between">
                            <button className="bg-[#70c55f] hover:bg-[#227022] text-white font-bold py-2 text-center w-full rounded focus:outline-none focus:shadow-outline" type="submit" >
                                Login
                            </button>
                        </div>
                        <div className="mt-3 text-center">
                            <Link to="/signup" >Not have an account?</Link>
                        </div>
                    </form>

                </div>
            </div>
        </>
    );
};

