import React, {useEffect, useState} from 'react'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import MovieIcon from '@mui/icons-material/Movie';
import DateRangeIcon from '@mui/icons-material/DateRange';
import  {useStyles} from './StyleCss'
import {NavLink} from 'react-router-dom'
import { Button } from '@mui/material';
import { Rowing } from '@mui/icons-material';


export default function SecondPage(props) {
  const classes= useStyles();
  //const {id} = useParams()
  const[title,setTitle] = useState('')
  const[year,setYear] = useState('')
  const[movie,setMovie] = useState('')
    const[isLoading,setIsLoading] = useState(true)
    const[error,setError] = useState({show:"false", msg:""})
 
     const API_URL=`http://www.omdbapi.com/?apikey=df86bd05`
     //console.log("XXXXX",API_URL)
     
     
  
    
    const getMovies=async(url)=>
    {
      try{
        const res = await fetch(url)
        const data = await res.json()
           console.log(data)
           if(data.Response==="True") 
           {
            setMovie(data)
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
      
      //use setTimeout for Debouncing
     let timer=  setTimeout(()=>{
         getMovies(`${API_URL}&t==${title}&y==${year}`)
        
      },800)

      //console.log(`MovieDirector:${movie.Director}`)
     
      
      return() => clearTimeout(timer)  
      
    },[title,year])

    
    
    
    function displayMovieInfo()
    {
      return (
       
            
            <div className={classes.container}>
              <img src={movie.Poster}  width="75px" alt="" style={{ objectFit: 'cover',
 }}/>
  <div className={classes.InfoColumn}>
    <span className={classes.MovieName}>
                Title: { movie.Title }
                </span> 

                <span className={classes.MovieInfo}>
               <span> Director: { movie.Director }</span>
                </span>

                <span className={classes.MovieInfo}>
              <span>Actors: { movie.Actors }</span> 
               </span>

               <span className={classes.MovieInfo}>
              <span>Language: { movie.Language }</span> 
               </span>

               <span className={classes.MovieInfo}>
                <span>
                   <span>Imdb Rating: { movie.imdbRating }</span>
                   <div>
               {
                movie.imdbRating>7?"BoxOffice: HIT":"BoxOffice:FLOP"

               }
               </div>
               </span>
               </span>

               <span className={classes.MovieInfo}>
              <span>Genre: { movie.Genre}</span> 
               </span>

               <span className={classes.MovieInfo}>
              <span>Plot: { movie.Plot }</span> 
               </span>

               </div>
                </div>  
  );

  }


  
  

  return (
    <>
    <div className={classes.root}>
      
            <div className={classes.subdiv}>
     
     <TextField
        id="input-with-icon-textfield"
        label="Movie Title"
        onChange={event=>setTitle(event.target.value)}
       
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MovieIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
        style={{marginRight:20}}
      />
      <TextField
        id="input-with-icon-textfield"
        label="Release Year"
        onChange={event=>setYear(event.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DateRangeIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
 
    </div>

    

    </div>

    <div>
    {
     title && year? displayMovieInfo():" "
     
    }
    </div>

    </>
    
    
   
  )
}
