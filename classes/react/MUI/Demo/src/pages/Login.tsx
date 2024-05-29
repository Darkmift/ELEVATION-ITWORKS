import { Button, Grid, TextField } from '@mui/material'

const Login = () => {
  return (
    <Grid container spacing={2} component={'form'}>
      {/* a grid item with textfield username outlined */}
      <Grid item xs={4}>
        <TextField label="Username" variant="outlined" fullWidth />
      </Grid>
      {/* a grid item with textfield password outlined */}
      <Grid item xs={4}>
        <TextField label="Password" variant="outlined" fullWidth />
      </Grid>

      {/* a grid item with button submit outlined */}
      <Grid item xs={4}>
        <Button
          variant="outlined"
          color="success"
          sx={{ height: '100%' }}
          fullWidth
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  )
}

export default Login
