import logo from './logo.svg';
import './App.css';
import { Grid, Image } from 'semantic-ui-react'
import Add from "./components/Add";

import Show from "./components/Show";


function App() {
  return (
    <Grid divided='vertically' style={{marginTop:"200px"}}>
    <Grid.Row columns={2}>
      <Grid.Column  >
        <Add/>
       
      </Grid.Column>
      <Grid.Column>

      <Show/>
       
      </Grid.Column>
    </Grid.Row>

  
  </Grid>
)

  
}

export default App;
