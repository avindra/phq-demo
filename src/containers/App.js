import React from 'react'
import { Link, Match } from 'react-router'
import Home from './../routes/Home'
import Survey from './../routes/Survey'

const App = () => (
  <div>
    <Link to="/">PHQ-9 Questionnaire</Link>
    <p>Welcome to the PHQ (Patient Health Questionnaire) 9, which you can use to self-evaluate your depression.</p>

    <Match exactly pattern="/" component={Home} />
    <Match pattern="/survey" component={Survey} />
  </div>
)

export default App