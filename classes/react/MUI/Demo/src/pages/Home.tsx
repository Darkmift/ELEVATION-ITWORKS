import { Button, Grid } from '@mui/material'

export default function home() {
  return (
    <Grid container spacing={2} component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Grid item xs={9}>
        <Button variant="contained" color="secondary" fullWidth>
          9
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" color="secondary" fullWidth>
          3
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button variant="outlined" color="error" fullWidth>
          2
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button variant="contained" color="success" fullWidth>
          3
        </Button>
      </Grid>
      <Grid item xs={8}>
        <Button variant="contained" color="secondary" fullWidth>
          4
        </Button>
      </Grid>
    </Grid>
  )
}
