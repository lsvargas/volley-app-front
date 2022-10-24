import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Loader from '../Loader';

function AutocompleteComponent({
  allUsers,
  users,
  value,
  setValue,
  usersLoading,
  title
}) {
  const usersIds = users?.map(user => user.userId);
  const parsedUsers = allUsers
    ?.filter(user => !usersIds.includes(parseInt(user.id, 10)))
    ?.map(user => ({ id: user.id, title: `${user.name} ${user.lastname}`}));


  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {usersLoading ? (
        <Loader />
      ) : (
        <Autocomplete
          value={value}
          onChange={handleChange}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          id="free-solo-with-text-demo"
          options={parsedUsers}
          getOptionLabel={(option) => {
            // Value selected with enter, right from the input
            if (typeof option === 'string') {
              return option;
            }
            // Add "xxx" option created dynamically
            if (option.inputValue) {
              return option.inputValue;
            }
            // Regular option
            return option.title;
          }}
          renderOption={(props, option) => <li {...props}>{option.title}</li>}
          sx={{ width: 300 }}
          freeSolo
          renderInput={(params) => (
            <TextField {...params} label={title} />
          )}
        />
      )}
    </>
  )
}


export default AutocompleteComponent;
