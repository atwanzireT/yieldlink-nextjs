import FooterSmall from "@/components/features/login/footer";
import Navbar from "@/components/features/login/header";
import Topbar from "@/components/features/topbar";
import { useRouter } from "next/router";
import { SyntheticEvent, useState } from "react";


export default function Login() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await fetch("http://127.0.0.1:8000/api/user/register/", {
            method : "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name,
                email,
                password
            })
        });
        await router.push("login");
    }

    return (
        <div>
            <Navbar transparent />
            <main>
                <section className="absolute w-full h-full">
                    <div
                        className="absolute top-0 w-full h-full  login_bg"
                    ></div>
                    <div className="container mx-auto px-4 h-full">
                        <div className="flex content-center items-center justify-center h-full">
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg login_section border-0">
                                    <div className="rounded-t mb-0 px-6 py-6">
                                        <div className="text-center mb-3">
                                            <h6 className="text-green-600 text-sm font-bold">
                                                Sign in with
                                            </h6>
                                        </div>
                                        <div className="btn-wrapper text-center">
                                            <button
                                                className="bg-green-600 active:bg-gray-100 text-white font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                                                type="button"
                                                style={{ transition: "all .15s ease" }}
                                            >
                                                {/* <img
                                                    alt="..."
                                                    className="w-5 mr-1"
                                                    src={github}
                                                /> */}
                                                Facebook
                                            </button>
                                            <button
                                                className="bg-green-600 active:bg-gray-100 text-white  font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                                                type="button"
                                                style={{ transition: "all .15s ease" }}
                                            >
                                                
                                                {/* <img
                                                    alt="..."
                                                    className="w-5 mr-1"
                                                    src={google_icon}
                                                /> */}
                                                Google
                                            </button>
                                        </div>
                                        <hr className="mt-6 border-b-1 border-gray-400" />
                                    </div>
                                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                        <div className="text-gray-500 text-center mb-3 font-bold">
                                            <small>Or sign in with credentials</small>
                                        </div>
                                        <form onSubmit={submit}>
                                        <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-green-700 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Username
                                                </label>
                                                <input
                                                    type="text"
                                                    className="border-0 px-3 py-3 placeholder-gray-400 text-green-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                    placeholder="Username"
                                                    style={{ transition: "all .15s ease" }}
                                                    required
                                                    onChange={e => setName(e.target.value)}
                                                />
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-green-700 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    className="border-0 px-3 py-3 placeholder-gray-400 text-green-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                    placeholder="Email"
                                                    style={{ transition: "all .15s ease" }}
                                                    required
                                                    onChange={e => setEmail(e.target.value)}
                                                />
                                            </div>

                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-green-700 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    className="border-0 px-3 py-3 placeholder-gray-400 text-green-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                    placeholder="Password"
                                                    style={{ transition: "all .15s ease" }}
                                                    required
                                                    onChange={e => setPassword(e.target.value)}
                                                />
                                            </div>
                                            <div>
                                                <label className="inline-flex items-center cursor-pointer">
                                                    <input
                                                        id="customCheckLogin"
                                                        type="checkbox"
                                                        className="form-checkbox border-0 rounded text-green-800 ml-1 w-5 h-5"
                                                        style={{ transition: "all .15s ease" }}
                                                    />
                                                    <span className="ml-2 text-sm font-semibold text-green-700">
                                                        Remember me
                                                    </span>
                                                </label>
                                            </div>

                                            <div className="text-center mt-6">
                                                <button
                                                    className="bg-green-900 text-white active:bg-green-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                                                    type="submit"
                                                    style={{ transition: "all .15s ease" }}
                                                >
                                                    Sign In
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="flex flex-wrap mt-6">
                                    <div className="w-1/2">
                                        <a
                                            href="#pablo"
                                            onClick={e => e.preventDefault()}
                                            className="text-green-300"
                                        >
                                            <small>Forgot password?</small>
                                        </a>
                                    </div>
                                    <div className="w-1/2 text-right">
                                        <a
                                            href="#pablo"
                                            onClick={e => e.preventDefault()}
                                            className="text-green-300"
                                        >
                                            <small>Create new account</small>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FooterSmall absolute />
                </section>
            </main>
        </div>
    )
}