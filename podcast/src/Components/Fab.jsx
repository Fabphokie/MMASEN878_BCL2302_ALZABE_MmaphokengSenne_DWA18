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

    };

    return (


        <Fab style={fabStyle}>

            <ArrowUpwardIcon style={{ color: 'white', width: { xs: 300, lg: 300 }, height: { xs: 300, lg: 300 } }} />

        </Fab>

    )
}