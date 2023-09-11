import React from 'react';

const Filter = ({ onChange }) => {
  return (
    <div className='filter'>
      <label className='filter-label' htmlFor="contact-filter">
        Find contact by name
        <input onChange={onChange} name="filter" id="contact-filter"></input>
      </label>
    </div>
  );
};

export default Filter;
