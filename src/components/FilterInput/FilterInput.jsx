import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { TextField } from '@mui/material';

const FilterInput = () => {
  const dispatch = useDispatch();
  const filterInputId = nanoid();

  const onFilterChange = evt =>
    dispatch(setFilter(evt.currentTarget.value.trim()));

  return (
    <TextField
      margin="normal"
      fullWidth
      id={filterInputId}
      type="text"
      label="Find contacts by name"
      onChange={onFilterChange}
    />
  );
};

export default FilterInput;
