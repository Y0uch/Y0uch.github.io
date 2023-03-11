import React from 'react'
import {Link} from "react-router-dom";

function Card(props) {
  const singleImageInfoParams = {
    // filenames that go on carousel cannot have spaces in them since urls don't have spaces
    // ensure that file name doesn't have spaces before adding it to pathname
    pathname: "singleImageInfo" + props.card_name,
    card_name: props.card_name
  };

  // console.log(props.card_name)
  // let path = "singleImageInfo" + props.card_name;

  return (
    <div style={styles.card}>
      {/* <Link to={{ pathname: "/singleImageInfo", state: props.card_name }}> */}
      {/* <Link to="singleImageInfo" params={{ testvalue: "hello" }}> */}
      <Link to={singleImageInfoParams} >
        <img style={styles.card} src={props.card_name} alt="description"/>
      </Link>
    </div>
  )
}

const styles = {
    card: {
        width: "auto",
        maxWidth: "500px",
        height: "auto",
        maxHeight: "300px",
        // backgroundColor: "#FFFDD0", // outlines the border
        // border: "2px solid black",
        boxSizing: "border-box",
        fontSize: "2.5em",
        color: "white",
        paddingLeft: "10px"
    }
}

// React.memo prevents React from re-rendering the cards 
export default React.memo(Card)