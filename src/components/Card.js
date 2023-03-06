import React from 'react'

function Card(props) {
  return (
    <div style={styles.card}>
        <a href={"singleImageInfo" + props.card_name} >
          <img style={styles.card} src={props.card_name} alt="description"/>
        </a>
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