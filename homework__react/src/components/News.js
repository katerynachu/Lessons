import NewsItem from "./NewsItem"

function News(){
    return(
        <div className='news'>
            <div className='news__container'>
                <h2 className="news__title">News</h2>
                <div className="news__wrapper">
                    <NewsItem/>
                    <NewsItem/>
                    <NewsItem/>
                </div>
            </div>
        </div>
    )
}
export default News;