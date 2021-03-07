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

export const partition = (list = [], n = 1) => {
    const isPositiveInteger = Number.isSafeInteger(n) && n > 0;
    if (!isPositiveInteger) {
        throw new RangeError('n must be a positive integer');
    }

    const partitions = [];
    const partitionLength = Math.ceil(list.length / n);

    for (let i = 0; i < list.length; i += partitionLength) {
        const partition = list.slice(i, i + partitionLength);
        partitions.push(partition);
    }

    return partitions; // an array of n arrays
};

export const shuffle = (array) => {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};
