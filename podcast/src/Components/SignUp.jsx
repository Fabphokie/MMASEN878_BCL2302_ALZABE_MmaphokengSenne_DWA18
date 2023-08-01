import { useEffect, useState } from "react";
// import UseFetch from "./UseFetch";

export default function SignUp(props) {

    const [datas, setDatas] = useState(null)

    useEffect(() => {

        if (props.idno) {
            // const [data, errorStatus, loading] = UseFetch(`https://podcast-api.netlify.app/id/${props.idno}`);

            fetch(`https://podcast-api.netlify.app/id/${props.idno}`)
                .then(response => response.json())
                .then(data => {

                    const bb = data.seasons

                    const cc = bb.map((pp) => {

                        return (



                            <h1>{pp.title}</h1>

                        )

                    })

                    setDatas(cc)
                })
        }
    }, [props.idno])

    return (
        <div>
            {datas}
        </div>
    )


}
