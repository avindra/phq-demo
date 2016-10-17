import React, { PropTypes } from 'react'
import Therapist from './Therapist'
import { Link } from 'react-router'

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

/**
 * This should come from an API call
*/
const doctors = [
  { name : 'Dr. Willie P. Curran', phone: '209-758-7721' },
  { name : 'Dr. Arthur J. Brown', phone : '701-303-1591'},
  { name : 'Dr. Luz K. Byers', phone : '914-815-3273' },
]

const Recommendation = ({ score }) => {
  const { message, treatment } = getRec(score);

  let suggestion =  'Treatment is not recommended for you.';
  if(treatment) {
    suggestion = <div style={{textAlign :'center'}}>
      Here are three doctors we can recommend for you. Click to get in touch with one:
      <div>
        { doctors.map((d, i ) => <Link key={i} to="/thanks"><Therapist {...d} /></Link> ) }
      </div>
    </div>
  }

  return <div>
    <div style={{ marginLeft: 20, borderLeft : '2px solid orange', paddingLeft : 20 }}>{ message }</div>
    <div>{ suggestion }</div>
  </div>
}

Recommendation.propTypes = {
  score : PropTypes.number.isRequired,
}

export default Recommendation