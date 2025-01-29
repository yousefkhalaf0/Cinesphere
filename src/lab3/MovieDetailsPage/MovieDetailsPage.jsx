import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { favouriteAction } from '../../redux/actions/favouriteAction';
import { useLanguage } from '../../Context/LanguageContext';

function MovieDetailsPage() {
    const id = useParams().id;
    const [details, setDetails] = useState({});
    const dispatch = useDispatch();
    const favedMovies = useSelector((state) => state.fav.favedMovies);
    const isFaved = favedMovies.includes(Number(id));
    const { language } = useLanguage();

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=aec7a120efc0f2607c66f43ac96e5187&language=${language}`)
            .then((data) => {
                setDetails(data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id, language]);

    const handleFavClick = () => {
        dispatch(favouriteAction(Number(id)));
    };

    const textAlignment = language === 'en' ? 'text-start' : 'text-end';

    return (
        <main dir={language === 'en' ? 'ltr' : 'rtl'} className='mt-5' style={{ position: 'relative', height: '100vh' }}>
            <div className='my-3' style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500/${details.backdrop_path})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(9px)',
                height: '100%',
                width: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: -1
            }}>
            </div>

            <div className='row justify-content-center mx-auto my-3 p-5' style={{
                background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #343a40 100%)',
                height: '100%',
                width: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: -1
            }}>
                <div className='col-4'>
                    <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} alt={`${details.title}-img`} className='img-fluid rounded' />
                </div>

                <div className={`col-8 text-white ${textAlignment}`} style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
                    <h1 className='display-1 mb-5'>{details.title}</h1>
                    <p className='lead'>{details.overview}</p>
                    <p className='fs-5'>
                        {language === 'en' ? 'Tagline: ' + details.tagline : 'العنوان الفرعي: ' + details.tagline}
                    </p>
                    {details.genres && details.genres.length > 0 && (
                        <div>
                            <p className='fw-bold fs-5'>
                                {language === 'en' ? 'Genres:' : 'التصنيفات:'}
                            </p>
                            <ul>
                                {details.genres.map((genre) => (
                                    <li key={genre.id}>{genre.name}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <p className='fs-5'>
                        {language === 'en' ? 'Release Date: ' + details.release_date : 'تاريخ الاصدار: ' + details.release_date}
                    </p>
                    <p className='fs-5'>
                        {language === 'en' ? 'Vote Count: ' + details.vote_count : 'عدد الأصوات: ' + details.vote_count}
                    </p>
                    <p className='fs-5'>
                        {language === 'en' ? 'Rating: ' + details.vote_average + ' / 10' : 'تصنيف: ' + details.vote_average + ' / 10'}
                    </p>
                    <p className='fs-5'>
                        {language === 'en' ? 'Runtime: ' + details.runtime + ' minutes' : 'وقت التشغيل: ' + details.runtime + ' دقيقة'}
                    </p>
                    {/* <p className='fs-5'>
                        {language === 'en' ? 'Status: ' + details.status : 'حالة: ' + details.status}
                    </p> */}
                </div>
            </div>

            <i
                className={`bi bi-heart${isFaved ? '-fill' : ''} bg-white rounded-circle px-2 py-1`}
                style={{
                    position: 'absolute',
                    top: '35px',
                    right: language === 'en' ? '20px' : 'unset',
                    left: language === 'ar' ? '20px' : 'unset',
                    color: isFaved ? 'red' : 'black',
                    cursor: 'pointer',
                    fontSize: '1.5rem',
                }}
                onClick={handleFavClick}>
            </i>
        </main>
    );
}

export default MovieDetailsPage;