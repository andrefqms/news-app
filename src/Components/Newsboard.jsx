import { useEffect, useState } from "react"
import Newsitem from "./Newsitem"
import { useQuery } from "react-query";

const Newsboard = ({category}) => {

 
    const getNewsData = async ()=>{
        let res =await fetch( `https://newsapi.org/v2/top-headlines?country=br&category=${category}&apiKey=f417cacd987e49e9a35180cdaa2d5cc1`)
         
        return res.json();
    }

    function images(src,index){
        if(src==null){
            return(`https://source.unsplash.com/random/${index}/?brazil`)
        }
    }


    const { isLoading, isError, isSuccess, data } = useQuery(
        "news",
        getNewsData
      );
      console.log(data);
      if (isLoading) return <div className="text-center"><div className="spinner-border m-5" role="status">
      <span className="visually-hidden">Loading...</span>
    </div></div>;
      else if (isError)
            return (
            <div className="center">Something went wrong, Please try again.</div>
            );
  return (
    <div>
        <h2 className="text-center"> <span className="badge bg-danger">Ultimas Noticias</span></h2>
        {data.articles?.map((news,index) => {
            return <Newsitem key={index} title = {news.title} source={news.author} year={news.publishedAt} src={images(news.urlToImage,Math.random())} url={news.url}/>
        })}
    </div>
  )
}
export default Newsboard