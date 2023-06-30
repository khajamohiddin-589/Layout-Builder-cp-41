import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container-second">
          {showLeftNavbar ? (
            <ul className="left-navbar-container">
              <h1 className="left-nav-heading">Left Navbar Menu</h1>
              <p className="left-nav-item">Item 1</p>
              <p className="left-nav-item">Item 2</p>
              <p className="left-nav-item">Item 3</p>
              <p className="left-nav-item">Item 4</p>
            </ul>
          ) : (
            <div className="empty-one">.</div>
          )}
          {showContent ? (
            <div className="Content-container">
              <h1 className="left-nav-heading">Content</h1>
              <p className="content-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor Incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : (
            <div className="empty-two">.</div>
          )}
          {showRightNavbar ? (
            <div className="left-navbar-container">
              <h1 className="left-nav-heading">Right Navbar</h1>
              <div className="div-wrap-body">
                <div className="right-nav-item">Ad 1</div>
                <div className="right-nav-item">Ad 2</div>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
