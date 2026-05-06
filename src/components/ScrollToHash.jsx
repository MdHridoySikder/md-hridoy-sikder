import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
    const { hash, pathname } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            
            // We use a small timeout to ensure the DOM has fully rendered
            // This is especially important for mobile browsers
            const timeoutId = setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    const navbarHeight = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100);

            return () => clearTimeout(timeoutId);
        } else {
            // Scroll to top if no hash and on homepage root
            if (pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    }, [hash, pathname]);

    return null;
};

export default ScrollToHash;
