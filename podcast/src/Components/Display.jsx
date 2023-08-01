import { useState, useEffect } from 'react';
import UseFetch from './UseFetch';
import CircularProgress from '@mui/material/CircularProgress';
import Footer from './Footer';
import Grid from '@mui/material/Grid';
import FAB from './FAB';
import '../App.css';
import SignUp from './SignUp';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Shows from './Shows';

const DropdownMenu = ({ handleSort, sortOrder }) => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {

        setAnchorEl(event.currentTarget);

    };

    const handleClose = () => {

        setAnchorEl(null);

    };

    const handleSortOption = (sortOrder) => {

        handleSort(sortOrder);
        handleClose();

    };

    return (

        <>

            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Sort {sortOrder === '[A-Z]' ? 'Ascending' : sortOrder === '[Z-A]' ? 'Descending' : 'None'}
            </Button>

            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>

                <MenuItem onClick={() => handleSortOption('[A-Z]')}> Ascending </MenuItem>

                <MenuItem onClick={() => handleSortOption('[Z-A]')}> Descending </MenuItem>

                <MenuItem onClick={() => handleSortOption('none')}> None </MenuItem>

            </Menu>

        </>

    );

};

function Display() {

    const [data, errorStatus, loading] = UseFetch('https://podcast-api.netlify.app/shows');
    const [ids, setIds] = useState(null);
    const [sortOrder, setSortOrder] = useState('none');
    const [originalData, setOriginalData] = useState([]);

    useEffect(() => {

        setOriginalData(data);

    }, [data]);

    if (errorStatus === 404) {

        return <h1>Page not found</h1>;

    }

    if (errorStatus) {

        return <h1>There was a problem with the server. Try again later</h1>;
    }

    const handleSort = (sortOrder) => {

        setSortOrder(sortOrder);

        if (sortOrder === '[A-Z]') {

            setOriginalData([...originalData].sort((a, b) => a.title.localeCompare(b.title)));
            console.log('a')

        } else if (sortOrder === '[Z-A]') {

            setOriginalData([...originalData].sort((a, b) => b.title.localeCompare(a.title)));
            console.log('d')

        } else {

            setOriginalData(data);

        }

    };

    const renderedShows = originalData.map((show) => (

        <Shows 
            key={show.id} 
            title={show.title} 
            description={show.description} 
            image={show.image} 
            updated={show.updated} 
            click={() => setIds(show.id)}
        />

    ));

    return (

        <>

            <SignUp idno={ids} />
            <DropdownMenu handleSort={handleSort} sortOrder={sortOrder} />

            <Grid container spacing={5} sx={{ padding: '5% 10%' }}>
                {loading ? <CircularProgress sx={{ position: 'absolute', bottom: 500, left: 900 }} /> : renderedShows} <FAB />
            </Grid>

            <Footer sx={{ position: 'absolute', bottom: 0 }} />

        </>

    );

}



export default Display;

