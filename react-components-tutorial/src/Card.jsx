import profilePic from './assets/profile-picture.jpg'

function Card(){
    return(
        <div className="card">
            <img alt="profile picture" src={profilePic}></img>
            <h2>Filip Kasperski</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sapiente necessitatibus animi, incidunt expedita mollitia.</p>
        </div>
    );
}

export default Card;