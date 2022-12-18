import React, { Component } from 'react'
import '../assets/scss/banner.scss'

export default class Banner extends Component {
    constructor(props) {
        super(props)
    }

  render() {
    return (
        <div className="banner">
        <h2 className="banner__title">{this.props.title}</h2>
        <img className='banner__img' src = {this.props.image}></img>
     </div>
    )
  }
}
