import React from "react";
import SearchBar from "./SearchBar";
import Logo from "./Logo";

class Header extends React.Component {
  render() {
  	return (
      <div className="c-header">
        <div className="c-header__main">
          <div className="c-header__cell">
            <div className="c-header__logo">

              <Logo />

            </div>
          </div>
          <div className="c-header__cell" data-flex-grow="1">
            <div className="c-header__searchBar">

              <SearchBar
                videoSearch={this.props.videoSearch}
                onVideoSelect={this.props.onVideoSelect}
                videos={this.props.videos}
              />

            </div>
          </div>
        </div>
      </div>
  	)
  }
}

export default Header;
