'use client'
import { useEffect } from 'react';
import { useTheme } from 'next-themes';

const ThemeSwitcher = () => {
    const { setTheme } = useTheme();

    useEffect(() => {
        setTheme('light');
        // unmount revert to dark
        return () => {
            setTheme('dark');
        };
    }, [setTheme]);

    return null;
};

export default ThemeSwitcher;
