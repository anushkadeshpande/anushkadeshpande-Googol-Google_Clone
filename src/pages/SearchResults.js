import { useStateValue } from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch'
import SearchResultsHeader from './SearchResultsHeader'
import './SearchResults.css'

function SearchResults() {
    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);
    //const data = Response;

    return (
        <>
            <SearchResultsHeader query={term} />
            <div className="search__results__list">
                <p>About {data?.searchInformation?.formattedTotalResults} results ({data?.searchInformation?.formattedSearchTime} seconds)</p>
                {
                    data.items?.map((item) => {
                        return (
                            <div className="result">
                                <p className="result__url">{item?.formattedUrl}</p>
                                <a href={item?.formattedUrl}>
                                    <h3 className="result__title">{item?.title}</h3>
                                </a>
                                <p className="result__desc">{item?.snippet}</p>
                            </div>
                        )

                    })
                }
            </div>
        </>
    )
}

export default SearchResults
