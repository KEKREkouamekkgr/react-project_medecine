import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Suivant extends Component {
  render() {
    return (
    <>
    <div class="container pt-5">
        <div class="card">
              <div class="card-header">
              <h2>Page En Construction... . </h2>
              </div>
              <div class="card-body">
                <h5 class="card-title">Encore un peu de patience ...</h5>
                <Link to="/react-project_medecine" class="btn btn-dark">Retour</Link>
              </div>
        </div>
      </div>
  </>
    )
  }
}
