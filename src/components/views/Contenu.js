import React, { Component } from 'react';
import Menu from'../partials/Menu';
import Nav from'../partials/Nav';
import squellete from '../../assets/images/squellete.jpg';
import Footer from './../partials/Footer';


export default class Accueil extends Component {
  render() {
    const steps = ["1", "3", "3", "4"];
    return (
     <>
     <Menu steps={steps} />
     <div class="container pt-2">
        <div class="row">
                <div class="col-4 col-md-4"></div>
                <div class="col-2 col-md-2">
                    <img src={squellete} alt="Squellete" />
                </div>
                <div class="col-6 col-md-6">
                    <Nav />
                </div>
        </div>
        <div class="row">
        <Footer />
        </div>
     </div>
     
     </>
    )
  }
}
