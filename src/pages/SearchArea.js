import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react';
import { Link, useHistory  } from "react-router-dom";
import './SearchArea.css'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer';

function SearchArea() {
    const [searchQuery, setQuery] = useState("");
    const [{}, dispatch] = useStateValue();
    const updateSearchQuery = e => setQuery(e.target.value)
    const history = useHistory();
    return (
        <form className="main">

            <div className="main__logo">
                <span className="google__blue">G</span>
                <span className='google__red'>o</span>
                <span className='google__yellow'>o</span>
                <span className='google__blue'>g</span>
                <span className='google__green'>o</span>
                <span className='google__red'>l</span>
            </div>

            <div id="search__bar">
                <SearchIcon id="search__icon" />
                <input id="search__input" defaultValue={searchQuery} onChange={updateSearchQuery} />
            </div>

            <div id="buttons">
                <Link to={`/result/${searchQuery}`}><button type="submit" onClick={() => {
                     history.push(`/result/${searchQuery}`)
                    dispatch({
                        type: actionTypes.SET_SEARCH_TERM,
                        term: searchQuery
                    })
                }}>Googol Search</button></Link>
                <button onClick={(e)=> { e.preventDefault();window.alert("Coming Soon...")}}>I'm Feeling Lucky</button>
            </div>

        </form>
    )
}

export default SearchArea
