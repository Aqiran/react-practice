const Navbar  = () => {
   /* const customStyle={                                       //INLINE STYLE
        color: "green",
        fontSize: "20px",
        border: "1px dotted"
    }*/
    return ( 
        <nav className="navbar">
            <h1>CNVS</h1>
            <div className="links">
                <a /*style={customStyle}*/ href="/">HOME </a>
                <a href="www.gmail.com">GMAIL</a>
                <a href="/">  LOG IN</a>
            </div>
        </nav>
     );
}
 
export default Navbar ;