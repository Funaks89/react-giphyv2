import React, { Component } from 'react';

import Gif from "./gif";

// eslint-disable-next-line react/prefer-stateless-function
class Giflist extends Component {
  render() {
    // const gifIds = ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"];
    const { gifIds, changeSelectGif } = this.props;
    return (
      <div className="gif-list">
        { gifIds.map(gifId => <Gif gifId={gifId} key={gifId} changeSelectGif={changeSelectGif} />) }
      </div>
    );
  }
}

export default Giflist;