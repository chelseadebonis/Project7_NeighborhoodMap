import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchScreen from './Views/SearchScreen';
import HomeScreen from './Views/HomeScreen';
import { Route } from 'react-router-dom';


{/*Attributions:
  Help from Maeva NAP and Forrest's walkthroughs on YouTube*/}


class BooksApp extends React.Component {
  state = {
    books: []
  }

componentDidMount() {
  this.fetchBooks();
}

fetchBooks() {
  BooksAPI.getAll().then((books) => {
    this.setState({ books: books })
  })
}

moveShelf = (book, shelf) => {
  BooksAPI.update(book, shelf).then(() => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
  })
  //setState so you will not have to update page for the proper shelves to appear

  })
}

  render() {
    return (
      <div className="app">
      <Route exact path='/' render={() => (
        <HomeScreen
          books={this.state.books}
          moveShelf={this.moveShelf}
          />
      )}
       />
     <Route exact path='/search' render={() => (
        <SearchScreen
        moveShelf={this.moveShelf}
        books={this.state.books}
        />
      )}
        />
      </div>
    )
  }
}

export default BooksApp
