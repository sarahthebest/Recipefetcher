import { Typography, Box } from '@mui/material';


const Header = () => {
    return (
        <div>
            <Box className="header" sx={{
                bgcolor: 'primary.main',
                height: 'fit-content',
                width: '260px',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '16px',
                justifyContent: 'center'
            }}>
                <Typography sx={{ p: 2, fontStyle: 'italic ' }}>
                    <Typography sx={{ fontStyle: 'normal ' }}>
                        Recipe fetcher built with themealdb.com and materialUI.
                        Current features:
                        <ul style={{ marginTop: 1 }}>
                            <li>View recipes</li>
                            <li>View recipe instructions</li>
                            <li>Search recipes</li>
                        </ul>
                    </Typography>
                </Typography>
            </Box>
        </div>);
}

export default Header;