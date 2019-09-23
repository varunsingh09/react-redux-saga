import React, { Component } from 'react';
import { connect } from 'react-redux'
import { HomepageListing, FetchBlogs } from "./actions/HomeAction";
import List from "./components/List"
class App extends Component {

  componentDidMount() {
  this.props.getHomeData()

  this.props.blogList()

  //console.log("componentDidMount", "--------", homeresponse,"----",blogresponse)

  }
  render() {
  //console.log("render",this.props.homeList)
    return (
      <div className="App">
        <header className="App-header">
          App component
          <List {...this.props} />
        </header>
      </div>
    );
  }
}


const mapStateToProps = ({ HomeReducer: { dataList ,blogList } }, state) => {
 // console.log("state=======",state)
  let homeList = [];
  let postList=[];
  if (dataList !== undefined) {
    homeList.push(dataList);
  }
  if (blogList !== undefined) {
    postList.push(blogList);
  }
  return {
    homeList: homeList,
    postList: postList
  }
}



const mapDispatchToProps = (dispatch) => ({
  getHomeData: () => dispatch(HomepageListing()),
  blogList: () => dispatch(FetchBlogs())
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
