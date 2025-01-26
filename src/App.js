import './App.css';
import myStore from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HeroSection from './lab1/HeroSection/HeroSection';
import BioSection from './lab1/BioSection/BioSection';
import SkillsSection from './lab1/SkillsSection/SkillsSection';
import PortolioSection from './lab1/PortofolioSection/PortolioSection';
import FooterSection from './lab1/FooterSection/FooterSection';
import SignIn from './lab2/SignInPage';
import SignUp from './lab2/SignUpPage';
import MoviesPage from './lab3/MoviePage/MoviesPage';
import NotFoundPage from './lab3/NotFoundPage';
import NavBarComponent from './SubComponents/NavBarComponent';
import MovieDetailsPage from './lab3/MovieDetailsPage/MovieDetailsPage';
import FavouritePage from './lab3/FavouritePage/FavouritePage';
import { LanguageProvider } from './Context/LanguageContext';

function App() {
  return (
    <Provider store={myStore}>
      <LanguageProvider>
        <div className="App">
          {/* lab1 */}
          {/* <HeroSection />
      <BioSection />
      <SkillsSection />
      <PortolioSection />
      <FooterSection /> */}

          {/* lab2 */}
          {/* <SignIn />
      <SignUp /> */}

          {/* lab3 */}
          <BrowserRouter>
            <NavBarComponent siteName='CineSphere' navLink2='Login' navLink3='Register' navLinkPath1='/favourites' navLinkPath2='/logIn' navLinkPath3='/register' />
            <Switch>
              <Route path="/" component={MoviesPage} exact />
              <Route path="/movieDetails/:id" component={MovieDetailsPage} exact />
              <Route path="/logIn" component={SignIn} exact />
              <Route path="/register" component={SignUp} exact />
              <Route path="/favourites" component={FavouritePage} exact />
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </BrowserRouter>
        </div>
      </LanguageProvider>
    </Provider>
  );
}

export default App;