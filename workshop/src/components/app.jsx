import React, { Component } from 'react';

import SearchBar from "./searchBar";
import GifList from "./gifList";
import Gif from "./gif";

const giphy = require('giphy-api')({
  apiKey: 'bGNJXfLJZhVre7l2mGS5vT6FRW4OcIoW',
  // apiKey: 'KsltJNEs1v3QDDVlinP6EFo2GqjFxgRR',
  https: true
});
// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifIds: ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"],
      gifId: "WuGSL4LFUMQU"
    };
    this.changeGifList("tokyo");
  }

  changeGifList = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({ giIds: res.data.map(gif => gif.id) });
    });
  }

  changeSelectGif = (newSelectedGifId) => {
    this.setState({ gifId: newSelectedGifId });
  }

  render() {
    const { gifId, gifIds } = this.state;
      return (
      <div>
        <div className="left-scene">
          <SearchBar changeGifList={this.changeGifList} />
          <div className="selected-gif">
            <Gif gifId={gifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifIds={gifIds} changeSelectedGif={this.changeSelectGif}/>
        </div>
      </div>
    );
  }
}

export default App;