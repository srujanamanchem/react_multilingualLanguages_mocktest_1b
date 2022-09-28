import {Component} from 'react'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {activeTabId: languageGreetingsList[0].id}

  selectTab = props => {
    this.setState({activeTabId: props.target.id})
  }

  render() {
    const {activeTabId} = this.state
    const renderLanguage = languageGreetingsList.filter(
      each => activeTabId === each.id,
    )
    return (
      <div className="app-container">
        <h1>Multilingual Greetings</h1>
        <ul className="languages-list">
          {languageGreetingsList.map(each => (
            <li className="language-tab" key={each.id}>
              {activeTabId === each.id ? (
                <button
                  type="button"
                  className="active language-btn"
                  onClick={this.selectTab}
                  id={each.id}
                >
                  {each.buttonText}
                </button>
              ) : (
                <button
                  type="button"
                  className="language-btn"
                  onClick={this.selectTab}
                  id={each.id}
                >
                  {each.buttonText}
                </button>
              )}
            </li>
          ))}
        </ul>
        <img
          src={renderLanguage[0].imageUrl}
          alt={renderLanguage[0].imageAltText}
          className="image"
        />
      </div>
    )
  }
}

export default App
