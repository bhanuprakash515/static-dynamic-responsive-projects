import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, ActiveId} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    updateActiveTabId(tabId)
  }

  const activetabButton = ActiveId ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activetabButton}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
