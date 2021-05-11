import React, { Component } from 'react';

import SearchBar from "./searchBar";
import GifList from "./gifList";
import Gif from "./gif";

const giphy = require('giphy-api')({
  // apiKey: 'bGNJXfLJZhVre7l2mGS5vT6FRW4OcIoW',
  apiKey: 'KsltJNEs1v3QDDVlinP6EFo2GqjFxgRR',
  https: true
});
// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifIds: [],
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
      this.setState({ gifIds: res.data.map((gif) => gif.id) });
      // console.log(this.changeGifList)
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
          <GifList gifIds={gifIds} changeSelectGif={this.changeSelectGif}/>
        </div>
      </div>
    );
  }
}

// export default App;

// import React, { Component } from 'react';
// import SearchBar from './searchBar';
// import GifList from './gifList';
// import Gif from './gif';
// const giphy = require('giphy-api')({
//   apiKey: 'KkL8LiLukkK8FADVuxtiFUpiLolcctkP',
//   https: true
// });
// // eslint-disable-next-line react/prefer-stateless-function
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       gifIds: ["T9JPznkGDAxYC8m7yC", "2A4B1DpUJxSAHhc6cG", "fe4695iudYhnGAiIia"],
//       gifIdSelected: "DAGAgaS8sIZmjpnihn"
//     };
//     this.changeGifList("stranger things");
//   }
//   changeGifList = (keyword) => {
//     giphy.search({
//       q: keyword,
//       rating: 'g',
//       limit: 10
//     }, (err, res) => {
//       this.setState({ gifIds: res.data.map(gif => gif.id) });
//     });
//   }
//   changeSelectGif = (newSelectedGifId) => {
//     this.setState({ gifIdSelected: newSelectedGifId });
//   }
//   render() {
//     const { gifIdSelected, gifIds } = this.state;
//     const styleObj = {
//       backgroundImage: 'url(assets/stylesheets/images/background-large.png)'
//     };
//     const styleObj2 = {
//       backgroundImage: 'url(assets/stylesheets/images/right-side2.jpg)'
//     };
//     return (
//       <div>
//         <div className="left-scene">
//           <SearchBar changeGifList={this.changeGifList} />
//           <div className="selected-gif" style={styleObj}>
//             <Gif gifId={gifIdSelected} />
//           </div>
//         </div>
//         <div className="right-scene" style={styleObj2}>
//           <GifList gifIds={gifIds} changeSelectGif={this.changeSelectGif} />
//         </div>
//       </div>
//     );
//   }
// }
export default App;