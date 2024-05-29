import { Button, Container, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function App() {
  return (
    <Container
      // maxWidth="xl"
      // disableGutters={true}
      sx={{
        border: '1px solid #ccc',
        // m: 0,
        // paddingLeft: '75px',
        // paddingTop: '100px',
      }}
    >
      <Typography>Hello</Typography>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send 1111
      </Button>
    </Container>
  );
}

export default App;
