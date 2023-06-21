import { Link, Head } from '@inertiajs/react';
import Header from '@/Components/Header';
import MainContent from '@/Components/MainContent';
import HeaderOld from '../Components/Header';
import KisahSejarah from './KisahSejarah';
import DoaHarian from './DoaHarian';
import DzikirPagi from './DzikirPagi';
import BacaQuran from './BacaQuran';

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <Header />
            <MainContent />
            {/* <DzikirPagi /> */}
            {/* <KisahSejarah /> */}
            {/* <DoaHarian /> */}
            {/* <BacaQuran /> */}
        </>
    );
}
