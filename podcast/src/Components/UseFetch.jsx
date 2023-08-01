import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

export default function UseFetch(url) {

    const [data, setData] = useState([]);
    const [errorStatus, setErrorStatus] = useState(null);
    const [loading, setLoading] = useState(true);
    const[searching , setSearching] = useState(false)


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
    const handleSearch = (searchTerm) => {
        const filteredData = data.filter(data =>
          data.props.titles.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setData(filteredData);
        setSearching(true);
    };
    
    return [data, errorStatus, loading, searching];
}