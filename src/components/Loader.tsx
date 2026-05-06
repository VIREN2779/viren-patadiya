
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useState, useEffect } from 'react';

export default function Loader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div className="loader">
            <div className="flex flex-col items-center">
                <DotLottieReact
                    src="https://lottie.host/3d11215a-96f2-4862-b355-6abc1274ef2f/aCVCDnvMwK.lottie"
                    loop
                    autoplay
                />
                <p className="text-white -mt-8">Loading...</p>
            </div>
        </div>
    );
};