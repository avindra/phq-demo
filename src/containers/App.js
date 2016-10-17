import React from 'react'
import { Link, Match } from 'react-router'
import Home from './../routes/Home'
import Survey from './../routes/Survey'

// Material UI deps
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {green100, green500, green700} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green500,
    primary2Color: green700,
    primary3Color: green100,
  },
}, {
  avatar: {
    borderColor: null,
  },
  userAgent: 'all',
});


import AppBar from 'material-ui/AppBar';


const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <AppBar
        title={<Link to="/">PHQ-9 Questionnaire</Link>}
      />
      <p>Welcome to the PHQ (Patient Health Questionnaire) 9, which you can use to self-evaluate your depression.</p>

      <Match exactly pattern="/" component={Home} />
      <Match pattern="/survey" component={Survey} />
    </div>
  </MuiThemeProvider>
)

export default App