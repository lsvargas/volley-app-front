import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useQuery, useMutation } from "@apollo/client";

import {
  FETCH_TEMPLATE_LISTS,
  CREATE_LIST,
  updateCreateList
} from './graphql';
import TemplateListSelect from '../../components/Home/Select';
import Loader from "../../components/Loader";

function Home() {
  const [templateList, setTempalteList] = useState('');
  const [value, setValue] = useState(new Date(new Date()));
  const [link, setLink] = useState('');

  const { loading, data } = useQuery(FETCH_TEMPLATE_LISTS);

  const handleCreateSuccess = ({ createList }) => {
    setLink(`http://localhost:3000/lists/${createList.id}`)
  };

  const [createList] = useMutation(CREATE_LIST, {
    update: (cache, props) => updateCreateList(cache, props),
    onCompleted: handleCreateSuccess
  });

  const handleDateChange = newValue => {
    setValue(newValue);
  };

  const handleSelectChange = (event) => {
    setTempalteList(event.target.value);
  };

  const handleCreateList = () => {
    createList({ variables: { templateListId: templateList } })
  };


  if (loading) return <Loader />;

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <div style={{ maxWidth: 400 }}>
        <Typography sx={{ marginLeft: '0.5rem', marginBottom: '3rem' }} variant="h4">
          Crear Lista
        </Typography>

        <TemplateListSelect
          handleSelectChange={handleSelectChange}
          templateList={templateList}
          templateLists={data?.templateLists}
        />

        <MobileDatePicker
          label="Seleccione una fecha"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleDateChange}
          renderInput={(params) => <TextField sx={{ width: '100%' }} {...params} />}
        />

        <div style={{ marginTop: '2rem' }}>
          <Button
            sx={{  width: '100%', minHeight: '50px' }}
            variant="contained"
            onClick={handleCreateList}
          >
            Crear
          </Button>
        </div>

        {link.length > 0 && (
        <Button
          sx={{  width: '100%', minHeight: '50px', marginTop: '2rem', textTransform: 'lowercase' }}
          variant="outlined"
          onClick={() => navigator.clipboard.writeText(link)}
        >
          {`${link} (Click para copiar)`}
        </Button>
        )}
      </div>
    </LocalizationProvider>
  );
}

export default Home;
