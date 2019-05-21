import React from 'react'

function ArticleCard(props){
  return (
      <div className={props.darkMode ? "card dark" : "card light"}>
        <h4>{props.title}</h4>
        <div className="image-wrapper">
          <img className="image" src={props.urlToImage} alt={props.title}/>
        </div>
        <p>{props.description}</p>
      <a href={props.url} target="_blank">Click for full article...</a>
      </div>
  )
}

export default ArticleCard
