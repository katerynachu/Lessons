import React, { Component } from 'react'
import Article from "./Article";
import articleFist from "../assets/images/article1.webp"
import articleSecond from "../assets/images/article2.webp"
import articleThird from "../assets/images/article3.jpeg"
import articleFourt from "../assets/images/article4.jpeg"
import '../assets/scss/blog.scss'

export default class Blog extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="blog">
        <div className="blog__container">
          <h2 className="blog__title">Blog</h2>
          <div className="blog__wrapper">
            <Article title="Pikachu is a yellow mouse Pokémon." img={articleFist} />
            <Article title=" It has long ears with black tips. It has red cheeks that store electricity." img={articleSecond} />
            <Article title="It has brown stripes on its back." img={articleThird} />
            <Article title="In the Pokémon anime, the trainer Ash Ketchum's first Pokémon is a Pikachu." img={articleFourt} />
          </div>
        </div>
      </div>
    )
  }
}

