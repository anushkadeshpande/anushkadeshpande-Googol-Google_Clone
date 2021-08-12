import { useState } from 'react'
import './SearchResultsHeader.css'
import SearchIcon from '@material-ui/icons/Search';
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import { Link, useHistory } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer';

function SearchResultsHeader({ query }) {
    const [newSearchQuery, setQuery] = useState(query);
    const [{ }, dispatch] = useStateValue();
    
    const history = useHistory();
    const updateSearchQuery = e => setQuery(e.target.value)
    
    
    const handleSearch = () => {
        history.push(`/result/${newSearchQuery}`)
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: newSearchQuery
        })
    }
    return (
        <div className="search__results">
            <div className="search__results__header">

                <div className="header__buttons">
                    <a href='#' className="results_header_button" onClick={() => window.alert("Coming Soon...")}>
                        <AppsRoundedIcon id="results__apps__btn" />
                    </a>

                    <a href='#' className="results_header_button" onClick={() => window.alert("Coming Soon...")}>
                        <div id="results__user__btn">?</div>
                    </a>
                </div>

                <div className="search__results__header__left">
                <Link to='/'><div className="results__main__logo">
                        <span className="google__blue">G</span>
                        <span className='google__red'>o</span>
                        <span className='google__yellow'>o</span>
                        <span className='google__blue'>g</span>
                        <span className='google__green'>o</span>
                        <span className='google__red'>l</span>
                    </div>
                </Link>
                    <div id="results__search__bar">
                        <input id="results__search__input" defaultValue={newSearchQuery} onChange={updateSearchQuery} />
                        <Link to={`/result/${newSearchQuery}`}><SearchIcon onClick={handleSearch}
                            id="results__search__icon" /></Link>
                    </div>
                </div>
            </div>

            <div className="search__results__options">
                <a href="#" className="active"><SearchIcon id="active__icon"/>All</a>
                <a href="#" className="inactive" onClick={() => window.alert("Coming Soon...")}><ImageOutlinedIcon className="inactive__icon"/> Images</a>
                <a href="#" className="inactive" onClick={() => window.alert("Coming Soon...")}><OndemandVideoOutlinedIcon className="inactive__icon"/> Videos</a>
                <a href="#" className="inactive" onClick={() => window.alert("Coming Soon...")}><FeaturedPlayListOutlinedIcon className="inactive__icon"/> News</a>
            </div>
        </div>
    )
}

export default SearchResultsHeader
