import Fab from '@mui/material/Fab';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function FAB() {

    const fabStyle = {

        width: '2em',
        height: '2em',
        fontSize: '32px',
        backgroundColor: '#296647',
        position: 'fixed',
        bottom: 16,
        right: 16,
        cursor: 'pointer', 
    };

    const handleFabClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', 
        });
    };


    return (


        <Fab style={fabStyle} onClick={handleFabClick}>

            <ArrowUpwardIcon style={{ color: 'white', width: { xs: 300, lg: 300 }, height: { xs: 300, lg: 300 } }} />

        </Fab>

    )
}