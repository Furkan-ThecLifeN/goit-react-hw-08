import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from './redux/filters/slice';
import { selectFilter } from './redux/filters/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <label>
      Find contacts by name or number:
      <input
        type="text"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </label>
  );
};

export default Filter;
