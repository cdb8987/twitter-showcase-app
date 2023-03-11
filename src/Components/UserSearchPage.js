function UserSearchPage(props){
    
    const leftContainer = 
    <div className="usersearchleftcontainer">
        <div className="searchtype">
            <button type="button" className="btn btn-secondary">USER</button>
            <button type="button" className="btn btn-secondary">TOPIC</button>
            <div className="searchInput">
                <div className="inputdiv">
                    <img src={require('../Images/at_image.png')} width="40px" alt='# or @ sign'></img>
                    <input type="text" />
                </div>
            </div>
        </div>
        <div className="leftContainerOneTweet"></div>
        
    </div>
    const rightContainer = <div className="usersearchrightcontainer">
        <div className="rightContainerOneTweet">TWEET</div>
        <div className="rightContainerOneTweet">TWEET</div>
        <div className="rightContainerOneTweet">TWEET</div>
        <div className="rightContainerOneTweet">TWEET</div>
        <div className="rightContainerOneTweet">TWEET</div>
        <div className="rightContainerOneTweet">TWEET</div>
        <div className="rightContainerOneTweet">TWEET</div>
        <div className="rightContainerOneTweet">TWEET</div>
        <div className="rightContainerOneTweet">TWEET</div>
        <div className="rightContainerOneTweet">TWEET</div>
        
    </div>

    const userSearchBody = (
        <div className="userSearchPage">
        {[leftContainer, rightContainer]}
        </div>
   
    )
    
    return props.selection === 'searchButton'? userSearchBody : null
}

export default UserSearchPage