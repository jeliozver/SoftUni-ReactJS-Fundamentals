import React, { Component } from 'react';

class Post extends Component {

  render() {
    return (
      <article className="post">
        <div className="col rank">
          <span>{this.props.rank}</span>
        </div>
        <div className="col thumbnail">
          <a href={this.props.url}>
            <img src={this.props.imageUrl} alt="" />
          </a>
        </div>
        <div className="post-content">
          <div className="title">
            <a href={this.props.url}>
              {this.props.title}
            </a>
          </div>
          <div className="details">
            <div className="info">
              submitted 3 days ago by Viktor
            </div>
            <div className="controls">
              <ul>
                <li className="action">
                  <a className="commentsLink" href="/">comments</a>
                </li>
                <li className="action">
                  <a className="editLink" href="/">edit</a>
                </li>
                <li className="action">
                  <a className="deleteLink" href="/">delete</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Post;