import React, { Component } from 'react'
export default class SocialItem extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div>
          <img width={24} height={24} src={this.props.image}></img>
      </div>
    )
  }
}

