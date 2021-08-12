import { BrowserRouter as Router , Route} from 'react-router-dom';
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import { useStateValue } from './StateProvider'

function App() {
  const [{ term }, dispatch] = useStateValue();
  if(window.location.pathname.includes("/result/") && term === null){
    window.location.href = '/'
}
  return (
    <div className="App">
    <Router>
      <Route path='/' exact component={Home} />
      <Route path={`/result/${term}`} component={SearchResults}/>
    </Router>
    </div>
  );
}

export default App;
