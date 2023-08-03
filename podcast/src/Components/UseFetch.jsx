import { useState, useEffect } from "react";

export default function UseFetch(url) {

    const [data, setData] = useState([]);
    const [errorStatus, setErrorStatus] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
       
        fetch(url)

            .then((response) => {

                if (!response.ok) {

                    throw response.status
                }

                return response.json()
            })

            .then((data) => setData(data))

            .catch((e) => {

                setErrorStatus(e)
            })

            .finally(() => setLoading(false));

    }, [url]);

    return [data, errorStatus, loading];
}