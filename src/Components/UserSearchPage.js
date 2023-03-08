function UserSearchPage(props){
    
    const leftContainer = 
    <div className="usersearchleftcontainer">
        <div className="searchtype">
        <button type="button" class="btn btn-secondary">USER</button>
        <button type="button" class="btn btn-secondary">TOPIC</button>
        </div>
        <div className="searchInput">
            <div className="inputdiv">
                <img src="" alt="@/# sign" />
                <input type="text" />
        </div>
        </div>
    </div>
    const rightContainer = <div className="usersearchrightcontainer"></div>
    const userSearchBody = (
        <>
        {[leftContainer, rightContainer]}
        </>
   
    )
    
    return userSearchBody
}

export default UserSearchPage