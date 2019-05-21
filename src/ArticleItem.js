import React from 'react'

class ArticleItem extends React.PureComponent {

  render() {
    return (
      <div
        className={this.props.darkMode ? "item dark" : "item light"}
        onClick={() => this.props.changeClickedArticle(this.props.id)}
        id={this.props.id}
        >
        <strong id={this.props.id}>{this.props.title}</strong>
        {this.props.clickedArticle === this.props.id ?
          <React.Fragment>
          <div className="image-wrapper">
            <img className="image" src={this.props.urlToImage} alt={this.props.title}/>
          </div>
          <p>{this.props.description}</p>
          <a href={this.props.url} target="_blank">Click for full article...</a>
          </React.Fragment>
          : null
      }
      </div>
    )
  }

}

export default ArticleItem
