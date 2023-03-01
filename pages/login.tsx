import FooterSmall from "@/components/features/login/footer";
import Navbar from "@/components/features/login/header";
import Topbar from "@/components/features/topbar";


export default function Login() {
    return (
        <div className="login_bg">
            <Navbar transparent />
            <main
                    style={{
                        background:"#00FF00",
                    }}>
                <section className="absolute w-full h-full">
                    <div
                        className="absolute top-0 w-full h-full "
                        // style={{
                        //     backgroundImage:
                        //         "https://images.unsplash.com/photo-1515694590185-73647ba02c10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwcGxhbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                        //     backgroundSize: "100%",
                        //     backgroundRepeat: "no-repeat"
                        //     bg-green-900 
                        // }}
                    ></div>
                    <div className="container mx-auto px-4 h-full">
                        <div className="flex content-center items-center justify-center h-full">
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                                    <div className="rounded-t mb-0 px-6 py-6">
                                        <div className="text-center mb-3">
                                            <h6 className="text-green-600 text-sm font-bold">
                                                Sign in with
                                            </h6>
                                        </div>
                                        <div className="btn-wrapper text-center">
                                            <button
                                                className="bg-white active:bg-gray-100 text-green-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
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
                                                className="bg-white active:bg-gray-100 text-green-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
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
                                        <form>
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
                                                    type="button"
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