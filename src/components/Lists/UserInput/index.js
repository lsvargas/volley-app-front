
import AutocompleteComponent from '../../Autocomplete';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const style2 = {
  justifyContent: 'start',
  display: 'flex',
  marginLeft: '0.5rem',
  marginTop: '1.5rem',
  marginBottom: '1rem'
};

function UserInput({
  allUsers,
  data,
  setValue,
  value,
  usersLoading,
  handleAddPlayer
}) {
  return (
    <div style={style2}>
      <AutocompleteComponent
        allUsers={allUsers?.users}
        users={data?.list?.users}
        value={value}
        setValue={setValue}
        usersLoading={usersLoading}
        title="Agregar usuario lista de espera"
      />
      <div>
        <AddCircleIcon
          onClick={handleAddPlayer}
          color="primary"
          sx={{ cursor: 'pointer', marginTop: '0.4rem', marginLeft: '0.8rem', fontSize: '40px' }}
        />
      </div>
    </div>
  );
};

export default UserInput;
