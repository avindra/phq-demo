import React from 'react'
import { Link, Match } from 'react-router'
import Home from './../routes/Home'
import Survey from './../routes/Survey'

const App = () => (
  <div>
    <div id="header">
      <div id="logo">
        <Link to="/">PHQ-9 Questionnaire</Link>
      </div>
      <div id="links">
        your wellness is our priority
      </div>
      <br className="clear" />
    </div>
    <div id="content">
      <Match exactly pattern="/" component={Home} />
      <Match pattern="/survey" component={Survey} />
    </div>
  </div>
)

export default App