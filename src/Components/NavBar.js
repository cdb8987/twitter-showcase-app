

function NavBar(props){  /// takes current selection as prop

    const imgStyle = {
        width: 65
    }
    const homeButton = (<img src={require('../Images/home_icon.png')} alt={'homeButton'} style={imgStyle} x/>)
    const searchButton = (<img src={require("../Images/search_icon.png")} alt={'searchButton'} style={imgStyle}/>)
    const randomButton = (<img src={require("../Images/question_mark_icon.jpg")} alt={'randomButton'} style={imgStyle}/>)
    const TESTBUTTON = (<button onClick={()=> console.log('button clicked')}></button>)
    const navigationBar = (<nav>{[homeButton, searchButton, randomButton, TESTBUTTON]}</nav>)




    return navigationBar
}

export default NavBar