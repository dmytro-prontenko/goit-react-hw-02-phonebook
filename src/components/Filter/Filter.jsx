import React from 'react';

const Filter = ({ onFilterChange, filterValue }) => {
  return (
    <div className='filter'>
      <label className='filter-label' htmlFor="contact-filter">
        Find contact by name
        <input onChange={onFilterChange} name="filter" id="contact-filter" filter={filterValue}></input>
      </label>
    </div>
  );
};

export default Filter;
