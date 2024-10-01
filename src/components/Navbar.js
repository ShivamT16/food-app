import restroIcon from '../assests/media/restaurant-icon.jpeg'

export const Navbar = () => {
    return(
        <div style={{display: "flex", justifyContent: "space-between", borderBottom: "2px solid lightgrey", alignItems: "center"}}>
        <img src={restroIcon} alt="logo" style={{height: "5rem", borderRadius: ".5rem"}} />
        <div style={{display: "flex", gap: "1rem", margin: "0rem 1rem" }}>
            <h2>Search</h2>
            <h2>SignIn</h2>
            <h2>Cart</h2>
        </div>
        </div>
    )
}