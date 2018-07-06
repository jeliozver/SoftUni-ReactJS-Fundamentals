import React, { Component } from 'react';

import Post from './Post';
import crudService from '../utilities/crudService';

class PostFetch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    crudService.listPosts().then((res) => {
      console.log(res);
      this.setState({
        posts: res
      });
    });
  }

  render() {
    return (
      <div className="posts">
        {this.state.posts.map(
          (post, i) => <Post key={post._id} rank={i + 1} {...post} />
        )}
      </div>
    );
  }
}

export default PostFetch;