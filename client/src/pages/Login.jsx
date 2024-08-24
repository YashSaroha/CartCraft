import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Auth";
// import bglogin from "../assets/newbg.jpg"
import bglogin from "../assets/bg-img.png"

const Login = () => {
    const navigate = useNavigate();
    const { signIn } = useAuth();

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const [errorMsg, setErrorMsg] = useState("")

    const handleSignIn = () => {
        const storedSignupData = JSON.parse(localStorage.getItem("signupData"));

        if (
            storedSignupData &&
            loginData.email === storedSignupData.email &&
            loginData.password === storedSignupData.password
        ) {
            localStorage.setItem("loginData", JSON.stringify(loginData));
            signIn();
            navigate("/");
            // console.log("Login Done");
            setErrorMsg("")
        } else {
            // console.log("Invalid credentials");
            setErrorMsg("Incorrect email or password!")
        }
    };

    const handleChange = (e) => {
        setLoginData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
        setErrorMsg("")
    };
    // 2b2738
    return (
        <div className="flex flex-col md:flex-row items-start h-screen bg-[#0a2027]">
            <div className="w-full h-[28vh] px-10 pt-10 md:w-1/2 md:h-full md:py-10">
                <img src={bglogin} className="w-[80%] h-full mx-auto rounded-lg md:w-full md:h-full" />
            </div>
            <div className="w-full flex flex-col p-10 md:w-1/2 md:h-full md:py-20 md:px-24">
                <h2 className="font-semibold mb-4 text-[30px] text-center text-zinc-300 md:text-[40px] md:text-start">Welcome Back</h2>
                <p className="text-xs mb-10 text-zinc-300 text-center md:text-start md:text-sm">Please login to your account</p>
                <form className="w-full">
                    <div className="mb-4">
                        {/* <label className="block text-sm font-semibold text-gray-600">Email</label> */}
                        <input
                            type="email"
                            name="email"
                            className="w-full p-3 pl-5 text-sm text-zinc-200 rounded bg-[#13313a] outline-none"
                            placeholder="Email"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        {/* <label className="block text-sm font-semibold text-gray-600">Password</label> */}
                        <input
                            type="password"
                            name="password"
                            className="w-full p-3 pl-5 text-sm text-zinc-200 rounded bg-[#13313a] outline-none"
                            placeholder="Password"
                            onChange={handleChange}
                        />
                    </div>
                    {errorMsg && <p className="text-red-400 text-xs">{errorMsg}</p>}
                    <button
                        type="button"
                        className="bg-[#196a78] text-white w-full py-3 my-6 rounded hover:bg-[#17606d] hover:-translate-y-1 duration-200"
                        onClick={handleSignIn}
                    >
                        Login
                    </button>
                </form>
                <p className="text-xs text-zinc-300 text-center md:text-start">
                    Don't have an account?
                    <Link to='/signup'><span className="text-[#2796aa] hover:underline"> Sign Up</span></Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
