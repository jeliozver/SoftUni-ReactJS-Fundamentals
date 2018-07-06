import React, { Component } from 'react';

import Navigation from './common/Navigation';
import PostFetch from './PostFetch';

class Catalog extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Navigation />
        <section id="viewCatalog">
          <PostFetch />
        </section>
      </div>
    );
  }
}

export default Catalog;