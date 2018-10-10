import React, {Component} from "react";
import Book from '../Components/Book';
import SearchButton from '../Components/SearchButton';

class HomeScreen extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {
                  this.props.books.filter(book => book.shelf === 'currentlyReading')
                  .map( book => (
                    <li>
                      <Book book={book}
                        key={book.id}
                        moveShelf={this.props.moveShelf}
                        currentShelf='currentlyReading'
                      />
                    </li>
                  ))
                }
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {
                  this.props.books.filter(book => book.shelf === 'wantToRead').map(book => (
                    <li>
                      <Book
                      key={book.id}
                        book={book}
                        moveShelf={this.props.moveShelf}
                        currentShelf='wantToRead'
                      />
                    </li>
                  ))
                }

                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {
                  this.props.books.filter(book => book.shelf === 'read').map(book => (
                      <Book key={book.id}
                        book={book}
                        moveShelf={this.props.moveShelf}
                        currentShelf='read'
                       />

                  ))
                }
                </ol>
              </div>
            </div>
          </div>
        </div>
        <SearchButton />
      </div>
      )

  }
}

export default HomeScreen
