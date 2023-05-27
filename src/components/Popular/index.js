import {Component} from 'react'
import Header from '../Header'

import MovieContext from '../../context/MovieContext'
import Footer from '../Footer'
// import LoadingElement from '../LoaderElement'
import PopularItem from '../PopularItem'

class Popular extends Component {
  //   state = {searchInput: ''}

  render() {
    return (
      <MovieContext.Consumer>
        {value => {
          const {username} = value
          console.log('username from Home', {username})

          return (
            <>
              <ul className="home-container" data-testid="popular">
                <Header />
                <PopularItem />
                <Footer />
              </ul>
            </>
          )
        }}
      </MovieContext.Consumer>
    )
  }
}

export default Popular
