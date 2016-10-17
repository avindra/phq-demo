import React from 'react'
import { Link } from 'react-router'

const Home = () => (
  <div style={{textAlign:'center'}}>
    <p>Welcome to the PHQ (Patient Health Questionnaire) 9.
    We are glad you're with us.</p>
    <p>We hope you can use this tool to self-evaluate your mental well being.</p>
    <Link to="/survey">Click to start the survey.</Link>
  </div>
)

export default Home