import React, { Fragment } from 'react';

const List = ({ postList }, props) => {

  if (postList[0] === undefined) {
    return <p>Loading...</p>
  }


  return (


    <Fragment>List components
       <ul>
        {postList[0].hits.map((data, index) => {
          return <li key={index}>{data.title}</li>
        })}</ul>

  
    </Fragment>
  );
}




export default List
