import { Button, Typography} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings'; 
import { Add } from "@mui/icons-material";
function App() {
  return (
    <div className="App">
      <Button variant="text">Text</Button>
      <Button variant="contained" startIcon = {<SettingsIcon/>} color="secondary" size="small">Settings</Button>
      <Button variant="contained" startIcon = {<Add/>} color="success" size="small" >Add new post</Button>
      <Button variant="outlined">Outlined</Button>

      <Typography variant="h2" component="p">  It's a ptag using h2 </Typography>
      <Button variant="contained" sx={{
        backgroundColor:"skyblue",
        color:"#888",
        margin:5,
        "&:hover":{
          backgroundColor:"lightblue"
        },
        "&:disabled":{
          backgroundColor:"gray",
          color:"white"
        }
      }}>Add new post</Button>


    </div>
  );
}

export default App;
