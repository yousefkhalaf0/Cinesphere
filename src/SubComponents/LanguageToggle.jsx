import React from 'react';
import { useLanguage } from '../Context/LanguageContext';

const LanguageToggle = () => {
    const { language, changeLanguage } = useLanguage();

    return (
        <>
            <button
                className={`btn btn-sm ${language === 'en' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => changeLanguage('en')}>
                {language === 'en' ? 'English' : 'انجليزي'}
            </button>
            <button
                className={`btn btn-sm ms-2 ${language === 'ar' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => changeLanguage('ar')}>
                {language === 'ar' ? 'عربي' : 'Arabic'}
            </button>
        </>
    );
};

export default LanguageToggle;