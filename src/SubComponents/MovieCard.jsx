import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { favouriteAction } from "../redux/actions/favouriteAction";

const MovieCard = (props) => {
    const [isHovered, setIsHovered] = useState(false);
    const dispatch = useDispatch();
    const favedMovies = useSelector((state) => state.fav.favedMovies);
    const isFaved = favedMovies.includes(props.movieId);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleFavClick = (e) => {
        e.preventDefault();
        dispatch(favouriteAction(props.movieId));
    };

    return (
        <div
            className="my-3"
            style={{ width: '13rem', position: 'relative' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <Link to={props.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img
                    id="movieImg"
                    src={`https://image.tmdb.org/t/p/w500/${props.imgPath}`}
                    className={`card-img-top border border-${isHovered ? 'primary' : props.borderClr} border-4 rounded`}
                    alt={`${props.movieName}-img`}
                    style={{
                        opacity: isHovered ? 0.3 : 1,
                        transition: 'opacity 0.5s ease',
                    }} />
                <span
                    className="badge text-bg-secondary"
                    style={{ position: 'absolute', top: '10px', left: '20px' }}>
                    {props.movieRate}
                </span>
                <i
                    className={`bi bi-heart${isFaved ? '-fill' : ''} bg-white rounded-circle px-1`}
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '20px',
                        color: isFaved ? 'red' : 'black',
                        cursor: 'pointer',
                    }}
                    onClick={handleFavClick}>
                </i>
                <div
                    className="middle"
                    style={{
                        transition: 'opacity 0.5s ease',
                        opacity: isHovered ? 1 : 0,
                        position: 'absolute',
                        top: '30%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                    }}>
                    <div className="text-white fw-bold">
                        {props.genres}
                    </div>
                </div>
                <div
                    className="card-body text-start mt-2"
                    style={{ position: 'relative', left: '3px' }}>
                    <h6 className={`card-title fw-bold text-${isHovered ? 'secondary' : 'white'}`}>{props.movieName}</h6>
                    <small className="text-secondary">{props.releasedYear}</small>
                </div>
            </Link>
        </div>
    );
};

export default MovieCard;


// <div className="my-3" style={{ width: '13rem', position: 'relative' }}>
//     <img id="movieImg" src={`https://image.tmdb.org/t/p/w500/${props.imgPath}`} className="card-img-top border border-white border-4 rounded" alt={`${props.movieName}-img`} />
//     <span className="badge text-bg-secondary" style={{ position: 'absolute', top: '10px', left: '20px' }}>
//         {props.movieRate}
//     </span>
//     <div className="card-body text-start mt-2" style={{ position: 'relative', left: '3px' }}>
//         <h6 className="card-title fw-bold">{props.movieName}</h6>
//         <small className="text-secondary">{props.releasedYear}</small>
//     </div>
// </div>