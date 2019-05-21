import React from 'react';
// import logo from './logo.svg';
import './App.css';
import articles from './articles'
import ArticleCard from './ArticleCard'
import ArticleItem from './ArticleItem'


class App extends React.Component {
  state = {
    articles: articles,
    listView: false,
    darkMode: false,
    clickedArticle: null
  }

  handleListViewClick = () => {
    this.setState(prevState => {
      return {listView: !prevState.listView}
    })
  }

  handleDarkMode = () => {
    this.setState(prevState => {
      return {darkMode: !prevState.darkMode}
    })
  }

  changeClickedArticle = (articleId) => {
    this.setState(prevState => {
      if (prevState.clickedArticle !== articleId) {
        return {clickedArticle: articleId}
      }
      else {
        return {clickedArticle: null}
      }
    })
  }

  renderArticles = () => {
    return this.state.articles.map(article => {
      return <ArticleCard
              key={article.id}
              title={article.title}
              url={article.url}
              urlToImage={article.urlToImage}
              description={article.description}
              darkMode={this.state.darkMode}
              />
    })
  }

  renderArticleList = () => {
    return this.state.articles.map(article => {
      return <ArticleItem
        key={article.id}
        id={article.id}
        title={article.title}
        url={article.url}
        urlToImage={article.urlToImage}
        description={article.description}
        darkMode={this.state.darkMode}
        clickedArticle={this.state.clickedArticle}
        changeClickedArticle={this.changeClickedArticle}
        />
    })
  }

  render(){
    return (
      <div className={this.state.darkMode ? "dark" : "light"}>
        <button onClick={this.handleDarkMode}>{this.state.darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}</button>
        <button onClick={this.handleListViewClick}>{this.state.listView ? "Switch to Card View" : "Switch to List View"}</button>
        {this.state.listView ?
            <div className="list">{this.renderArticleList()}</div> :
            <div className="cards">{this.renderArticles()}</div>}
      </div>
    );
  }
}

export default App;
