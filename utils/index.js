import { useEffect, useState } from 'react';

export const useDarkMode = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            window.localStorage.setItem('brian-cilenti-dot-com-theme', 'dark');
            setTheme('dark');
        } else {
            window.localStorage.setItem('brian-cilenti-dot-com-theme', 'light');
            setTheme('light');
        }
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('brian-cilenti-dot-com-theme');
        localTheme && setTheme(localTheme);
    }, []);

    return [theme, toggleTheme];
};
