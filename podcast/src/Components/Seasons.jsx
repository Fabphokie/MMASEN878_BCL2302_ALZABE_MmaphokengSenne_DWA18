import { useEffect, useState } from "react";
import './seasons.css'

export default function Mm(props){

  const [sea, setSea] = useState(null)


   useEffect(() => {
    if(props.seasonId){
        fetch(`https://podcast-api.netlify.app/id/${props.seasonId}`)
        .then(res => res.json())
        .then(data => {

          const season = data.seasons

          const seasonslist = season.map((seasonmap) => {

            return (
              <div className="Overlay" key = {seasonmap.season}>
              <img src={seasonmap.image} className="season-img"></img>
                <h1>{'Seasons: '}{seasonmap.title}</h1>
                <p>{seasonmap.genres}</p>
                

              </div>
            )
          })

          setSea(seasonslist)
        })
    }
}, [props.seasonId])


return (
  <>

    {sea}
  </>
)

}