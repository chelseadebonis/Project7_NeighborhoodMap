import React, {Component} from "react";
import { Link } from 'react-router-dom';


export default class Search extends Component {
  render() {
    return (
      <div className="open-search">
      <Link to={'/SearchScreen'}>
        Add a book
        </Link>
      </div>
    )
  }
}
