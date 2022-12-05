import React, {useEffect, useState} from 'react'
import TextField from '@mui/material/TextField';
import  {useStyles} from './StyleCss'
import MaterialTable from "@material-table/core"; 
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


export default function FirstPage() {
    const classes= useStyles();
    const [show,setShow] = useState(false)
    const[query,setQuery]= useState('')
    const[year,setYear] = useState('')
    const[movie,setMovie] = useState([])
    const[isLoading,setIsLoading] = useState(true)
    const[open,setOpen]= useState(false);
    const[error,setError] = useState({show:"false", msg:""})
   
     const API_URL=`http://www.omdbapi.com/?apikey=df86bd05`
    
    const handleClose=()=>
    {
        setOpen(false);

    }
    const handleOpen=(rowData)=>
    {
        setOpen(true);

    }

    

    const getMovies=async(url)=>
    {
      try{
        const res = await fetch(url)
        const data = await res.json()
           console.log(data)
           if(data.Response==="True") 
           {
            setMovie(data.Search)
            setIsLoading(false)
           }
           else{
            setError({
              show: true,
              msg: data.error
            }

            )
           }
    }
    catch(error)
    {
      console.log(error)
    }
  }

    useEffect(()=>{
      setShow(true)
      //use setTimeout for Debouncing
    let timer=  setTimeout(()=>{
        getMovies(`${API_URL}&s=${query}&y=${year}`)
      },2000)
      return() => clearTimeout(timer)  
    },[query,year])

    function displayTable() {
      return (
        <MaterialTable
         title={"Movies Detail"} 
          data={movie}
          open={show}
          class="highlight"
          columns={[
            {
              title: "Movie Title",
              field: "Title",
             
              
            },
            {
              title: "Release Year",
              field: "Year",
            }
            
          ]}
         
        />
        
      );
    }

    const displayModal=()=>
    {
      return(
        <div>
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Movie Info"}
      </DialogTitle>
      <DialogContent>
        {editView()}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
    </div>
      )


    }

    const editView=()=>
    {
      const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      
      
        return (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="right">Title</StyledTableCell>
                  <StyledTableCell align="right">Year</StyledTableCell>
                  <StyledTableCell align="right">Type</StyledTableCell>
                  <StyledTableCell align="right">IMDB ID</StyledTableCell>
                  <StyledTableCell align="right">Poster</StyledTableCell>
                 
                </TableRow>
              </TableHead>
              <TableBody>
                {movie.map((row) => (
                  <StyledTableRow >
                    
                    <StyledTableCell align="right">{row.Title}</StyledTableCell>
                    <StyledTableCell align="right">{row.Year}</StyledTableCell>
                    <StyledTableCell align="right">{row.Type}</StyledTableCell>
                    <StyledTableCell align="right">{row.imdbID}</StyledTableCell>
                    <StyledTableCell align="right"><img src={row.Poster} width="45%" alt="" /></StyledTableCell>
                    
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        );
      }
    

  return (
    <div className={classes.root} style={{marginTop:0.7}}>
            <div className={classes.subdiv}>
            
      
        <h4>Search Your Favourite Movie</h4>
        <TextField id="outlined-basic" label="Movie Title" variant="outlined" style={{marginRight:20, marginTop:10}} 
          value={query} onChange= {(event)=>setQuery(event.target.value)}    />
      <TextField id="outlined-basic" label="Release Year" variant="outlined" style={{ marginTop:10}}
      value={year} onChange= {(event)=>setYear(event.target.value)} />
      <Button variant="contained" onClick={handleOpen} style={{marginLeft:17, marginTop:20}}>Movie Info</Button>
     
     {
     query && year? displayTable():" "
    }
    
    
    </div>
    {displayModal()}
    </div>
  )
}
