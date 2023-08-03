import { useEffect, useState } from "react";
// import HH from "./Seasons";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'


export default function SignUp(props) {
    const [seasonss, setSeasons] = useState([]);
    const [epi, setEpi] = useState(null)
    const [epiFile, setEpiFile] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

    function handlePlay(epiFile){
        setIsOpen(!open)
        setEpiFile(epiFile)
    }

    useEffect(() => {
        if (props.idno) {
            fetch(`https://podcast-api.netlify.app/id/${props.idno}`)
                .then(response => response.json())
                .then(data => {
                    setSeasons(data);
                    // seasonss.season.map((sea) => {console.log(sea)})
                    
                    const ey = seasonss.seasons
                    const bb = ey.map((y)=> {
                        
                        return(

                            <Accordion key={y.title}>

                            <AccordionSummary expandIcon = {<ExpandMoreIcon />} aria-controls="panel1a-content" id="panella-header">
                                <Typography component='h1'>Seasons</Typography>
                                <div style={{display: 'flex', flexDirection:'column'}}>

                                    <Typography component='h5'>{y.title}</Typography>
                                    {/* <Typography component='p'>{y.season}</Typography> */}
                                </div>
                            </AccordionSummary>

                            <AccordionDetails>
                                
                                <ul>

                                    
                                    {y.episodes.map((episode, index) => {

                                        console.log(episode.file)

                                       return (
                                            <div key={index}>
                                                <p onClick={handlePlay}>{episode.title}</p>
                                                <audio controls>
                                                    <source src={episode.file} type="audio/ogg" />
                                                </audio>
                                            </div>

                                        )
                                    })}
                                </ul>
                            </AccordionDetails>
                            </Accordion>
                        )
                    
                    
                    })
                    setEpi(bb)
                })
        }
    }, [props.idno]);


    
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '20px', background: '#f9f9f9',  }}>
            {epi}
        
        </div>
    );
}
