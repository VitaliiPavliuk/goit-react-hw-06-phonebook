// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  // const filterChange = e => {
  //   const filterValue = e.target.value.toLowerCase().trim();
  //   filterContacts(filterValue);
  // };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        onChange={e => {
          dispatch(setFilter(e.target.value.toLowerCase().trim()));
        }}
      />
    </div>
  );
};

// Filter.propTypes = { filterContacts: PropTypes.func };
