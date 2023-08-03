import { useState, useEffect } from 'react';
import Shows from './Shows';
import UseFetch from './UseFetch';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import FAB from './FAB';
import '../App.css';
import SignUp from './SignUp';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MyCarouselContainer from './MyCarouselContainer';




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
    const [searchShow, setSearchShow] = useState('');
    const [selectedGenere, setSelectedGenre] = useState('')
    const [showSearchResults, setShowSearchResults] = useState(false);
    
    const genreMapping = {
        1: 'Personal Growth',
        2: 'True Crime and Investigative Journalism',
        3: 'History',
        4: 'Comedy',
        5: 'Entertainment',
        6: 'Business',
        7: 'Fiction',
        8: 'News',
        9: 'Kids and Family',
    };
    

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

    const handleSearch = (e) => {
        e.preventDefault()
        if (searchShow.trim() !== "") {
            const searchTitle = originalData.filter((show) => {
                const matchShow = searchShow.trim() === '' || show.title.toLowerCase().includes(searchShow.toLowerCase());
                return matchShow;
            });
            setOriginalData(searchTitle);
            setShowSearchResults(true);
        } else {
            setOriginalData(data); // Reset to the original data if searchShow is empty
            setShowSearchResults(false); 
        }
    };

    const handleReturnBack = () => {
        setSearchShow(''); // Clear the search input field
        setOriginalData(data); // Reset to the original data
        setShowSearchResults(false); // Set the flag to false to hide the search results
    };
    

    const renderedShows = originalData.map((show) => (

        <Shows key={show.id}
            title={show.title}
            description={show.description} 
            image={show.image}
            seasons={show.seasons}
            updated={show.updated} 
            genres={show.genres.map(genreID => genreMapping[genreID])}
           click={() => setIds(show.id)}
         />

    ));

    return (

        <>
            <SignUp idno={ids} />


              <div className='SearchContainer'>
              <input type="text" placeholder="Search..." value={searchShow} onChange={(e) => setSearchShow(e.target.value)} /> 
                <Button  onClick={handleSearch}>Search</Button> 
            </div>

            
            {showSearchResults && (
            // This div will only be rendered when showSearchResults is true
            <div>
               <Button onClick={handleReturnBack}>Return Back</Button>
            </div>
            )}

           

       
            <div className='Sort'>
               <DropdownMenu handleSort={handleSort} sortOrder={sortOrder} />
            </div>

            
            {!showSearchResults && (
            <div>
              
                <MyCarouselContainer />
              
            </div>
            )}


          

            

            <Grid container spacing={5} sx={{ padding: '5% 10%' }}>
                {loading ? <CircularProgress sx={{ position: 'absolute', bottom: 500, left: 900 }} /> : renderedShows} <FAB />
            </Grid>

            

        </>

    );

}



export default Display;
