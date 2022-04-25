
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function BasicSelect({ handleSelectChange, templateList, templateLists }) {
  return (
    <Box sx={{ minWidth: 120, marginBottom: '2rem' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Seleccione plantilla</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={templateList}
          label="Seleccione plantilla"
          onChange={handleSelectChange}
        >
          {templateLists?.map(({ id, name }) => (
            <MenuItem key={id} value={id}>{name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default BasicSelect;
