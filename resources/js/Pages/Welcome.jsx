import { Link, Head } from '@inertiajs/react';
import Header from '@/Components/Header';
import MainContent from '@/Components/MainContent';

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <Header />
            <MainContent />
        </>
    );
}
