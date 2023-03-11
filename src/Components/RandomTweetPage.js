

function RandomTweetPage(props){
  const randomTweetUserCard = 
    <div className="RandomTweetUserCard">
      <img src={require('../Images/elon-musk.jpg')} alt="user" width={'100dw'} ></img>
      USER 
    </div>


  const userBar = 
  <div className="RandomTweetuserBar">
    {[randomTweetUserCard, randomTweetUserCard, randomTweetUserCard, randomTweetUserCard, randomTweetUserCard]}
  </div>

  const cardTableContainer = 
  <div className="cardTableContainer">cardTableContainer
  <div className="cardtableinnercontainer"></div>
  </div>



  
  return props.selection === 'randomButton'? <div className="randomTweetPage"><div className="randomTweetPageinnercontainer">{[userBar, cardTableContainer]}</div></div> : null

}

export default RandomTweetPage