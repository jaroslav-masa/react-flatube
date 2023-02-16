import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from "../utils/constants"
import SearchBar from "./SearchBar"

const Navbar = () => {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ position: "sticky", background: "rgb(10,10,10)", top: 0}}
        >
            <Link to="/" style={{display: "flex", alignItems: "center"}}>
                <img src={logo} alt="logo" height={"45"} style={{ margin: "1rem"}}/>
            </Link>
            <SearchBar />
        </Stack>
    )
}

export default Navbar