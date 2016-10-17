import React from 'react'
import { Link } from 'react-router'

const Home = () => (
  <p>
    Welcome! We are glad you're with us.
    <Link to="/survey">Click to start the survey.</Link>
  </p>
)

export default Home