import React, { PropTypes } from 'react'

function getRec(score) {
  const rec = { treatment : false };
  if(score >= 0 && score <= 4) {
    rec.message = 'You are not depressed. Live easy!';
    return rec;
  }

  if(score >= 5 && score <= 9) {
    rec.message = 'You have mild depression. Go listen to some music, unwind.';
    return rec;
  }

  // Past this point, the patient has at least moderate
  // depression, so treatment is recommeded
  rec.treatment = true;

  if(score >= 10 && score <= 14) {
    rec.message = 'Moderate';
    return rec;
  }

  if(score >= 15 && score <= 19) {
    rec.message = 'Moderately severe';
    return rec;
  }

  rec.message = 'Severe';
  return rec;
}

const Recommendation = ({ score }) => {
  const { message, treatment } = getRec(score);

  return <div>
    { message }
    { treatment ? 'Here are 3 options' : 'Treatment is not recommended for you.'}
  </div>
}

Recommendation.propTypes = {
  score : PropTypes.number.isRequired,
}

export default Recommendation