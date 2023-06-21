import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="h-screen flex">
            {/* <div className="hidden lg:flex w-full lg:w-1/2 login_img_section justify-around items-center"> */}
                {children}
        </div>
    );
}
