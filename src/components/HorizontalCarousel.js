import React, { Component, useState } from 'react';
import Card from "./Card.js";
import ImageData from "../images.json";
import "./HorizontalCarousel.css";

class HorizontalCarousel extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         current_card: 1
      }

    }


    // Carousel. When last card is approached, go back to the beginning
    componentDidMount() {
        this.card_container.style.transitionDuration = "0.0s";
        this.card_container.style.transform = `translate(-${550}px)`;
    }


    handle_next = () => {
        // if condition prevents user from scrolling past last card/image
        if (this.state.current_card < this.card_container.children.length - 1){
            
            let new_current_card = this.state.current_card + 1;
            this.setState({current_card: new_current_card}, () => {
                // transition effect
                this.card_container.style.transitionDuration = "0.5s";
                this.card_container.style.transform = `translate(-${350 * this.state.current_card}px)`;
                
                // Snap back last element to first element of the card/image if user reached the end.
                if (this.state.current_card === this.card_container.children.length - 1){
                    setTimeout(() => {
                        this.card_container.style.transitionDuration = "1.0s";
                        this.card_container.style.transform = `translate(-${450}px)`;
                        this.setState( {current_card: 1} );
                    }, 502);
                }
            });
        } else {
            return;
        }

        
    }

    handle_previous = () => {
        if (this.state.current_card > 0){
            
            let new_current_card = this.state.current_card - 1;
            this.setState({current_card: new_current_card}, () => {
                // transition effect
                this.card_container.style.transitionDuration = "0.5s";
                this.card_container.style.transform = `translate(-${350 * this.state.current_card}px)`;
                
                // Snap back first element to last element of the card/image if user reached the beginning and wants to go to end.
                if (this.state.current_card === 0){
                    setTimeout(() => {
                        this.card_container.style.transitionDuration = "0.0s";
                        this.card_container.style.transform = `translate(-${350 * (this.card_container.children.length - 2)}px)`;
                        this.setState( {current_card: this.card_container.children.length - 2} );
                    }, 502);
                }
            });
        } else {
            return;
        }
    }

    // getCarouselImages(){
        
    // }

  render() {
    return (
        
      <div>
        <div className="view-port" style={styles.view_port}>
            <div ref={ref_id => this.card_container= ref_id} className="card-container" style={styles.card_container}>
                {/* <Card card_number="0"/>
                <Card card_number="1" />
                <Card card_number="2" />
                <Card card_number="3" /> */}
                {Object.keys(ImageData["design-images"]).map(key => {
                    if (ImageData["design-images"][key].show_on_carousel){
                        return <Card card_name={"/img/" + "design/" + ImageData["design-images"][key].file_name} />
                    }            

                })}
            </div>

            <div class="button-container">
                <button class="arrowButtons" onClick={this.handle_previous}>&larr;</button>
                <button class="arrowButtons" onClick={this.handle_next}>&rarr;</button>
            </div>
        </div>

      </div>
    )
  }
}

const styles = {
    view_port : {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "350px",
        height: "200px",
        // backgroundColor: "red",
        // overflow: "hidden"
    },
    card_container: {
        display: "flex",
        flexDirection: "row",
        width: "fit-content"
    }
}

export default HorizontalCarousel