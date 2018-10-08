import React, { Component } from 'react';
// import Bouton from "../boutonGenerantURL/Bouton"
import "./Winelist.css"

//const url = 'https://lcboapi.com/products?q=red+wine+chile+Sauvignon&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm'


class Winelist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
      url2:'https://lcboapi.com/products?q=red+wine+chile+Sauvignon&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm'
    };

    };



  componentWillMount() {
    fetch('https://lcboapi.com/products?q=red+wine+chile+Sauvignon&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm')
      .then(res => res.json())
      .then((json) => {
          	this.setState({
	            isLoaded: true,
	            items: json.result
                });
	   });

  }



  render() {

    const {isLoaded, items } = this.state;
    //console.log(this.state.url2)

    if (!isLoaded) return <div>Loading...</div>;

     else {
        return (
        	<div>
            <ul>
              {items.map((item, poulet) => (
                <li>
                    <p id="fan">Vin numero : {poulet+1}</p>
                    <p> Domaine :  {item.name}</p>
                    <p>Prix : {(item.price_in_cents/100).toFixed(2)} $</p> 
                    <img src={item.image_url} alt="photo du vin"/>
                </li>
              ))}
            </ul>
          </div>
      );
    }
  }
}

export default Winelist;




