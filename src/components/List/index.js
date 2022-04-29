import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';


const style = {
  width: '100%',
  maxWidth: 400,
  bgcolor: 'background.paper',
};


function ListComponent({
  users,
  handleUserClick
}) {

  const confirmedUsers = users?.filter(user => user.status === 1);
  const unconfirmedUsers = users?.filter(user => user.status === 0);
  const declinedUsers = users?.filter(user => user.status === 2);

  return (
    <>
      <List sx={style} component="nav" aria-label="mailbox folders">
        <Typography sx={{}} variant="p">
          Por confirmar
        </Typography>
        {unconfirmedUsers?.map(({ id, name, lastname, waitingList }, idx) => (
          <div key={id}>
            <ListItem>
              <ListItemText
                primary={`${idx + 1}. ${name} ${lastname} ${waitingList ? " - (L.E)" : ""}`}
              />
              <Checkbox
                onChange={() => handleUserClick(1, id)}
                sx={{
                  color: "#a2e5a2",
                  '&.Mui-checked': {
                    color: "#a2e5a2"
                  }}
                }
              />
              <Checkbox
                onChange={() => handleUserClick(2, id)}
                sx={{
                  color: "#f38585",
                  '&.Mui-checked': {
                    color: "#f38585"
                  }}
                }
              />
            </ListItem>
            <Divider light />
          </div>
        ))}
      </List>

      <List sx={style} component="nav" aria-label="mailbox folders">
        <Typography sx={{ color: '#a2e5a2' }} variant="p">
          Confirmados
        </Typography>
        {confirmedUsers?.map(({ id, name, lastname }, idx) => (
          <div key={id}>
            <ListItem>
              <ListItemText primary={`${idx + 1}. ${name} ${lastname}`} />
              <Checkbox onChange={() => handleUserClick(0, id)} />
              <Checkbox
                onChange={() => handleUserClick(2, id)}
                sx={{
                  color: "#f38585",
                  '&.Mui-checked': {
                    color: "#f38585"
                  }}
                }
              />
            </ListItem>
            <Divider light />
          </div>
        ))}
      </List>

      <List sx={style} component="nav" aria-label="mailbox folders">
        <Typography sx={{ color: '#f38585'}} variant="p">
          No van
        </Typography>
        {declinedUsers?.map(({ id, name, lastname }, idx) => (
          <div key={id}>
            <ListItem>
              <ListItemText primary={`${idx + 1}. ${name} ${lastname}`} />
              <Checkbox
                onChange={() => handleUserClick(1, id)}
                sx={{
                  color: "#a2e5a2",
                  '&.Mui-checked': {
                    color: "#a2e5a2"
                  }
                }}
              />
              <Checkbox onChange={() => handleUserClick(0, id)} />
            </ListItem>
            <Divider light />
          </div>
        ))}
      </List>
    </>
  )
};

export default ListComponent;
