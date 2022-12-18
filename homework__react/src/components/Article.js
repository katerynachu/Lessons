import React, { Component } from 'react'
import '../assets/scss/article.scss'

export default class Article extends Component {
    constructor(props) {
        super(props)
    }
  render() {
    return (
        <div className="article">
       <img  className='article__image' width={100} height={100} src={this.props.img}></img>
       <h3>{this.props.title}</h3>
    </div>
    )
  }
}
