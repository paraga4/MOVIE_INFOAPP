import React, {useState} from 'react';
import { AppBar,Tab,Tabs } from '@mui/material';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import { useNavigate} from 'react-router-dom';
import  {useStyles} from './StyleCss'



export default function TabsComponent() {
  const classes= useStyles();

    var navigate = useNavigate()

    const [value, setValue] = useState(0);

    const handletabs=(e, val)=>
    {
       console.log(val)
       setValue(val)
    }

    function TabPanel(props) {
      const { children, value, index } = props;
    
      return (
        <div>
          
          {value === index && (
           
             <h1>{children}</h1>
            
          )}
        </div>
      );
    }
    
  return (
    <div className={classes.root} style={{marginTop:0.7}}>
      <div className={classes.subdiv}>
      <h3>Movies</h3>
      <AppBar position="static">
         <Tabs value={value} onChange={handletabs} indicatorColor="secondary"
          textColor="inherit">
         
          <Tab label="First Tab"/>
          <Tab label="Second Tab"/>
          
        </Tabs>
        </AppBar> 
        <TabPanel value={value} index={0}>
       <FirstPage/>
      </TabPanel>
      <TabPanel value={value} index={1}>
       <SecondPage/>
      </TabPanel>
      </div>  
    </div>
  );
}
