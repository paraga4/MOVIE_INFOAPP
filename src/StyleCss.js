import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
      display:'flex',
      justifyContent:'center',
     alignItems:'center',
      marginTop:15,
      marginLeft:200,
      width:'1100px',
     // backgroundColor:"yellowgreen"
      
      
    

    },
    subdiv:{
            
            borderRadius:12,
             padding:20,
             //marginTop:10,
             //background:'#e8d1c5',
             height:'95%',
             width:'300'
             
             

             

    },
    heading:{

        fontWeight:'bold',
        fontSize: 24,
        letterSpacing:1,
        textAlign:'center'

},
container:{
  display: 'flex',
 flexDirection:'column',
  padding: '20px 30px',
  justifyContent: 'center',
  borderBottom: '1px solid lightgray'
},
 InfoColumn : {
  display:'flex',
  flexDirection: 'column',
  margin: '20px'
 },
  MovieName : {
  fontSize: '22px',
  fontWeight: 600,
  color: 'black',
  margin: '15px 0',
  whiteSpace: 'nowrap',
  overflow:'hidden',
  textTransform: 'capitalize',
  //textOverflow: 'ellipsis'
},

MovieInfo : {
  fontSize: '16px',
  fontWeight: 500,
  color: 'black',
  margin: '4px 0',
  whiteSpace: 'nowrap',
  overflow:'hidden',
  textTransform: 'capitalize',
  //textOverflow: 'ellipsis'
}
  });
  export {useStyles};