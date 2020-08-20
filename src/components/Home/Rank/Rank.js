import React from 'react';

const Rank = ({ currentProfile }) => {
  return (
    <div>
      <div className='white f3 mb8'>
        {`Hi ${currentProfile.firstname}, what is your plan tonight?`}
      </div>

    </div>
  );
}

export default Rank;