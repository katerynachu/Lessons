import React, { Component } from 'react'
export default class Logo extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div className='header__logo'>
        <img width={50} height={50} className='logo__img' src={this.props.image}></img>
      </div>
    )
  }
}
