import React from "react";
import axios from "axios"
import InfiniteScroll from 'react-infinite-scroller'
let page = 1
class List extends React.Component {
  state = {
    items: "", numOfResults: 100, perPage: 20, message: <p className='text-success text-xs-center'>Loading...</p>
  };

  componentDidMount = async () => {
    const result = await axios('https://hn.algolia.com/api/v1/search?query=redux');
    this.setState({ items: result.data.hits, numOfResults: this.state.numOfResults })
  }


  fetchMoreData = () => {
    console.log(this.state.perPage, "=======", page)
    if (this.state.numOfResults >= (page * 20)) {
      const response = axios(`https://hn.algolia.com/api/v1/search?query=redux&page=${page}`);

      response.then((result) => {
        setTimeout(() => {
          this.setState({
            items: [...this.state.items, ...result.data.hits]
          });
        }, 1500);
      })
      page++
    }
    if (this.state.numOfResults === (page * 20)) {
      this.setState({ message: <p className='text-danger text-xs-center'>You reach end of the page!</p> })
    }
  }

  render() {
    if (this.state.items === "") {
      return <p className='text-success'>Loading...!</p>
    }


    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.fetchMoreData}
        hasMore={true}
        loader={<div className="loader" key="true">{this.state.message}</div>}>
        {this.state.items > "" && this.state.items.map((i, index) => {
          return (<li key={index}>
            {index} # {i.title}
          </li>)
        })}
      </InfiniteScroll>
    );
  }
}

export default List
