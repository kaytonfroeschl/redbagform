import Link from './components/Link';
import Route from './components/Route';
import InfoPage from './pages/InfoPage';
import PrefPage from './pages/PrefPage';
import PickUpPage from './pages/PickUpPage';
import ReviewPage from './pages/ReviewPage';
import SubmittedPage from './pages/SubmittedPage';

function App(){
  return(
     <div>
      <Link to="/sponsor-information">Go to Sponsor Information Page </Link>
      <Link to="/sponsor-preference">Go to Sponsor Preference Page </Link>
      <Link to="/pickup-location">Go to Pick Up Page </Link>
      <Link to="/review">Go to Review Page </Link>
      <Link to="/submitted">Go to Submitted Page </Link>
      <div>
        <Route path="/sponsor-information">
          <InfoPage/>
        </Route> 
        
        <Route path="/sponsor-preference">
          <PrefPage/>
        </Route>

        <Route path="/pickup-location">
          <PickUpPage/>
        </Route>

        <Route path="/review">
          <ReviewPage/>
        </Route>

        <Route path="/submitted">
          <SubmittedPage/>
        </Route>
      </div>
    </div> 
  );
}

export default App;