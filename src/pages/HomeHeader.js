import React from 'react'
import './HomeHeader.css'
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
function HomeHeader() {
    return (
        <div>
            <div className="header">
                <div className="header__links">
                    <a href='#' className="header_link" onClick={() => window.alert("Coming Soon...")}>Gmail</a>
                    <a href='#' className="header_link" onClick={() => window.alert("Coming Soon...")}>Images</a>
                    <a href='#' className="header_button" onClick={() => window.alert("Coming Soon...")}><AppsRoundedIcon id="apps__btn" /></a>
                    <a href='#' className="header_button" onClick={() => window.alert("Coming Soon...")}><div id="user__btn">?</div></a>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader
