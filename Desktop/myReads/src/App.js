import React from 'react'
// import * as BooksAPI from './BooksAPI'
import {Switch, Route} from 'react-router-dom';
import './App.css'
import Shelf from './Components/Shelf';
import Search from './Components/Search';
import SearchScreen from './Views/SearchScreen';
import Home from './Views/Home';
import Provider, {MyContext} from './Provider/';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">

      <Provider>

        <Switch>
          <Route exact path={"/"}
            render={() => (
              <MyContext.Consumer>
                {context => <Home {...context} />}
              </MyContext.Consumer>
            )}/>
          <Route exact path={"/SearchScreen"}
            render={() => (
              <MyContext.Consumer>
                {context => <SearchScreen {...context} />}
              </MyContext.Consumer>
          )}
           />
        </Switch>

    </Provider>

      </div>
    )
  }
}

export default BooksApp
