import Article from "./Article";

function Blog(){
    return (
        <div className="blog">
            <div className="blog__container">
                <h2 className="blog__title">Blog</h2>
              <div className="blog__wrapper">
              <Article/>
                <Article/>
                <Article/>
                <Article/>
              </div>
            </div>
        </div>
    )
}
export default Blog;