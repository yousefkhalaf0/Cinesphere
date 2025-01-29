import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../redux/actions/toggleThemeAction';

const ThemeToggle = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.theme);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        dispatch(changeTheme(newTheme));
    };

    return (
        <button
            className="btn btn-sm btn-outline-secondary"
            onClick={toggleTheme}
            style={{ border: 'none', background: 'none' }}>
            {theme === 'light' ? (
                <i className="bi bi-moon-stars-fill fs-5"></i>
            ) : (
                <i className="bi bi-sun-fill fs-5"></i>
            )}
        </button>
    );
};

export default ThemeToggle;