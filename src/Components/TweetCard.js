

function TweetCard(props){
    
    const tweetPicture = <div className="tweetProfilePic"></div>

    const tweetContent = <></>
    // <div className="tweetContent">
    //     {[name, blueCheck, twitterUserName, timeSincePost]}{tweetText}{[commentIcon, numberOfComments, retweetIcon, numberOfRetweets, likeIcon, numberOfLikes, viewIcon, numberOfViews, shareIcon]}</div>
    
    const tweetContainer = <div className="tweetContainer">{[tweetPicture, tweetContent ]}</div>
    
    
    
    return tweetContainer
}