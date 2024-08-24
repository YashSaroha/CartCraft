import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import bglogin from "../assets/bg-img.png"

const Signup = () => {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false)
    const [signupData, setSignupData] = useState({
        name: "",
        mobile: "",
        email: "",
        password: "",
        confirmPassword: "",
        checkbox: false,
    });

    const [errors, setErrors] = useState({
        name: "",
        mobile: "",
        email: "",
        password: "",
        confirmPassword: "",
        checkbox: "",
    });

    const validateMobile = (mobile) => {
        const mobileRegex = /^[0-9]{10}$/;
        return mobileRegex.test(mobile);
    };

    const validatePassword = (password) => {
        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleCheckbox = (e) => {
        const checked = e.target.checked
        setIsChecked(checked)

        // Update the signupData state with the new checkbox value
        setSignupData((prevData) => ({
            ...prevData,
            checkbox: checked,
        }));

        // Clear the checkbox error if it gets checked
        if (checked) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                checkbox: "",
            }));
        }
    }

    const handleSignup = () => {
        let isValid = true;
        const newErrors = { ...errors };

        if (!signupData.name.trim()) {
            newErrors.name = "Name is required";
            isValid = false;
        } else {
            newErrors.name = "";
        }

        if (!validateMobile(signupData.mobile.trim())) {
            newErrors.mobile = "Enter a valid 10-digit mobile number";
            isValid = false;
        } else {
            newErrors.mobile = "";
        }

        if (!signupData.email.trim()) {
            newErrors.email = "Email is required";
            isValid = false;
        } else {
            newErrors.email = "";
        }

        if (!validatePassword(signupData.password.trim())) {
            newErrors.password =
                "Password must be atleast 8 characters containing at least 1 uppercase, 1 lowercase and 1 special character";
            isValid = false;
        } else {
            newErrors.password = "";
        }

        if (signupData.password.trim() !== signupData.confirmPassword.trim()) {
            newErrors.confirmPassword = "Passwords do not match";
            isValid = false;
        } else {
            newErrors.confirmPassword = "";
        }

        if (!signupData.checkbox) {
            newErrors.checkbox = "Please accept the terms and conditions";
            isValid = false;
        } else {
            newErrors.checkbox = "";
        }

        if (isValid) {
            console.log("Signing Up...", signupData);

            localStorage.setItem("signupData", JSON.stringify(signupData));

            navigate("/login");
        } else {
            setErrors(newErrors);
        }
    };

    const handleChange = (e) => {
        setSignupData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div className="flex flex-col items-start h-screen bg-[#0a2027] overflow-hidden md:flex-row">
            <div className="w-full h-[20vh] px-10 pt-10 md:w-1/2 md:h-full md:py-10">
                <img src={bglogin} className="w-[50%] h-full mx-auto rounded-lg md:w-full md:h-full" />
            </div>
            <div className="w-full flex flex-col p-10 pt-5 md:h-full md:w-1/2 md:py-20 md:px-24">
                <h2 className="font-semibold mb-2 text-[25px] text-center text-zinc-300 md:mb-4 md:text-[40px] md:text-start ">Create an account</h2>
                <p className="text-xs mb-5 text-zinc-300 text-center md:text-start md:mb-10 md:text-sm">
                    Already have an account?
                    <Link to='/login'><span className="text-[#2796aa] hover:underline"> Login</span></Link>
                </p>
                <form className="w-full">
                    <div className="mb-4 flex flex-col justify-between w-full gap-4 md:flex-row">
                        <div className="w-full md:w-1/2">
                            <input
                                type="text"
                                name="name"
                                className='w-full p-3 pl-5 text-sm text-zinc-200 rounded bg-[#13313a] outline-none'
                                placeholder="Name"
                                onChange={handleChange}
                            />
                            {errors?.name && <p className="text-red-400 text-xs">{errors.name}</p>}
                        </div>
                        <div className="w-full md:w-1/2">
                            <input
                                type="text"
                                name="mobile"
                                className='w-full p-3 pl-5 text-sm text-zinc-200 rounded bg-[#13313a] outline-none'
                                placeholder="Phone Number"
                                onChange={handleChange}
                            />
                            {errors?.mobile && <p className="text-red-400 text-xs">{errors.mobile}</p>}
                        </div>
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            name="email"
                            className='w-full p-3 pl-5 text-sm text-zinc-200 rounded bg-[#13313a] outline-none'
                            placeholder="Email"
                            onChange={handleChange}
                        />
                        {errors?.email && <p className="text-red-400 text-xs">{errors.email}</p>}
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            name="password"
                            className='w-full p-3 pl-5 text-sm text-zinc-200 rounded bg-[#13313a] outline-none'
                            placeholder="Enter your password"
                            onChange={handleChange}
                        />
                        {errors?.password && (
                            <p className="text-red-400 text-xs">{errors.password}</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            name="confirmPassword"
                            className='w-full p-3 pl-5 text-sm text-zinc-200 rounded bg-[#13313a] outline-none'
                            placeholder="Confirm password"
                            onChange={handleChange}
                        />
                        {errors?.confirmPassword && (
                            <p className="text-red-400 text-xs">{errors.confirmPassword}</p>
                        )}
                    </div>
                    <div className="pb-3">
                        <div className="flex items-center">
                            <input type="checkbox" id="checkbox" name="checkbox" checked={isChecked} onChange={handleCheckbox} />
                            <label htmlFor="checkbox" className="text-xs text-zinc-300 ml-2">
                                I agree to the
                                <span className="text-[#2796aa] ml-2 underline cursor-pointer">Terms & Conditions</span>
                            </label>
                        </div>
                        {errors?.checkbox && <p className="text-red-400 text-xs">{errors.checkbox}</p>}
                    </div>
                    <button
                        type="button"
                        className="bg-[#196a78] text-white w-full py-3 my-3 rounded md:my-6 hover:bg-[#17606d] hover:-translate-y-1 duration-200"
                        onClick={handleSignup}
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
