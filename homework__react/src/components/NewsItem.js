import React, { Component } from 'react'
import '../assets/scss/news-tem.scss'
export default class NewsItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="news-item">
        {this.props.title}
        <button className='news-item__btn'>More...</button>
      </div>
    )
  }
}

