import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useLanguage } from '../Context/LanguageContext';

const Pagination = (props) => {
    const { language } = useLanguage();

    const handlePrevious = () => {
        if (props.currentPage > 1) {
            props.onPageChange(props.currentPage - 1);
        }
    };

    const handleNext = () => {
        if (props.currentPage < props.totalPages) {
            props.onPageChange(props.currentPage + 1);
        }
    };

    //searched for this function
    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= props.totalPages; i++) {
            if (i === 1 || i === props.totalPages || (i >= props.currentPage - 1 && i <= props.currentPage + 1)) {
                pageNumbers.push(
                    <li key={i} className={`bg-${props.bgColor} page-item ${props.currentPage === i ? 'active' : ''}`}>
                        <Link className="page-link" to="#" onClick={() => props.onPageChange(i)}>{i}</Link>
                    </li>
                );
            } else if (i === props.currentPage - 2 || i === props.currentPage + 2) {
                pageNumbers.push(
                    <li key={i} className={`bg-${props.bgColor} page-item disabled`}>
                        <span className="page-link">...</span>
                    </li>
                );
            }
        }
        return pageNumbers;
    };

    return (
        <ul className={`pagination justify-content-${props.position}`}>
            <li className={`bg-${props.bgColor} page-item ${props.currentPage === 1 ? 'disabled' : ''}`}>
                <Link className="page-link" to="#" onClick={handlePrevious}>
                    {language == 'en' ? 'Previous' : 'السابق'}
                </Link>
            </li>
            {renderPageNumbers()}
            <li className={`bg-${props.bgColor} page-item ${props.currentPage === props.totalPages ? 'disabled' : ''}`}>
                <Link className="page-link" to="#" onClick={handleNext}>
                    {language == 'en' ? 'Next' : 'التالي'}
                </Link>
            </li>
        </ul>
    );
};

export default Pagination;


// import React from 'react'
// import { Link } from 'react-router-dom/cjs/react-router-dom.min'

// const Pagination = (props) => {
//     const { currentPage, totalPages, onPageChange, position } = props;

//     const handlePrevious = () => {
//         if (currentPage > 1) {
//             onPageChange(currentPage - 1);
//         }
//     };

//     const handleNext = () => {
//         if (currentPage < totalPages) {
//             onPageChange(currentPage + 1);
//         }
//     };

//     return (
//         <nav>
//             <ul className={`pagination justify-content-${position}`}>
//                 <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
//                     <Link className="page-link" to="#" onClick={handlePrevious}>Previous</Link>
//                 </li>

//                 <li className="page-item">
//                     <Link className="page-link" to="#">Page {currentPage} of {totalPages}</Link>
//                 </li>

//                 <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
//                     <Link className="page-link" to="#" onClick={handleNext}>Next</Link>
//                 </li>
//             </ul>
//         </nav>
//     );
// }

// export default Pagination