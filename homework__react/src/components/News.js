import React, { Component } from 'react'
import NewsItem from "./NewsItem"
import '../assets/scss/news.scss'
export default class News extends Component {
  render() {
    return (
        <div className='news'>
        <div className='news__container'>
            <h2 className="news__title">News</h2>
            <div className="news__wrapper">
                <NewsItem title="Content news-item"/>
                <NewsItem title="Content news-item 2"/>
                <NewsItem title="Content news-item 3" />
            </div>
        </div>
    </div>
    )
  }
}
