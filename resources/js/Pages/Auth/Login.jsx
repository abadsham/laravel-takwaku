import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import masjid from "@/assets/image/pexels-masjidjpg.jpg"

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="admin Login" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            {/* <form onSubmit={submit}>
                <div>
                    <InputLabel forInput="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>
            </form> */}

            <div className="hidden lg:flex w-full lg:w-1/2 login_img_section justify-around items-center">
                <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
                    <h1 className="text-white font-bold text-4xl font-sans">
                        Taqwaku.
                    </h1>
                    <p className="text-white mt-1">
                        Bukan Admin ? Silahkan kembali ke halaman utama
                    </p>
                    <div className="flex justify-center lg:justify-start mt-6">
                        <a
                            href="/"
                            className="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2"
                        >
                            Back
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
                <div className="w-full px-8 md:px-32 lg:px-24">
                    <form className="bg-white rounded-md shadow-2xl p-5">
                        <h1 className="text-gray-800 font-bold text-2xl mb-1">
                            Hello Again!
                        </h1>
                        <p className="text-sm font-normal text-gray-600 mb-8">
                            Welcome Back, admin
                        </p>
                        <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                />
                            </svg>
                            <input
                                id="email"
                                className=" pl-2 w-full outline-none border-none"
                                type="email"
                                name="email"
                                placeholder="Email Address"
                            />
                        </div>
                        <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <input
                                className="pl-2 w-full outline-none border-none"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                            />
                        </div>
                        <PrimaryButton className="mb-2" processing={processing}>
                            Login
                        </PrimaryButton>
                        <div className="flex justify-between mt-4">
                            <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">
                                Lupa Password ?
                            </span>

                            <a
                                href="http://wa.me/6282133450786"
                                className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
                            >
                                Hubungi kami
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}
