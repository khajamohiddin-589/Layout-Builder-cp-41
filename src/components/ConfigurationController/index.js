import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeContent = () => {
        onToggleShowContent()
      }
      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="configuration-container">
          <h1 className="layout-heading">Layout</h1>
          <div className="check-container">
            <input
              checked={showContent}
              onChange={onChangeContent}
              className="checkbox"
              type="checkbox"
              id="context"
            />
            <label className="label" htmlFor="context">
              Content
            </label>
          </div>
          <div className="check-container">
            <input
              checked={showLeftNavbar}
              onChange={onChangeLeftNavbar}
              className="checkbox"
              type="checkbox"
              id="Left Navbar"
            />
            <label className="label" htmlFor="Left Navbar">
              Left Navbar
            </label>
          </div>
          <div className="check-container">
            <input
              checked={showRightNavbar}
              onChange={onChangeRightNavbar}
              className="checkbox"
              type="checkbox"
              id="Right Navbar"
            />
            <label className="label" htmlFor="Right Navbar">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
