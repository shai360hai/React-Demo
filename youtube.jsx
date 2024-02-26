
function VideoCard(properties){
    return <div>
        <img src= {properties.previewImage} alt="Video Thumbnail"></img>
    <h1>{properties.title}</h1>
    <h2>{properties.channelName}</h2>
    <img src={properties.channelImage} alt="Channel Logo" id="channel-logo"/>
    <p>{properties.views} | {properties.date}</p>
    <p>{properties.lengthTime}</p>
    </div>
}

function App(){
    return <div>
        <VideoCard 
        previewImage="https://i.ytimg.com/vi/NsjeEt1ZpqQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDv8Vr5jQsHcPk0g_TNP7XlGbADNw" 
        title="my video title" 
        channelName="my channel"
        channelImage="https://yt3.ggpht.com/u7ewVEzPIdQay_2MS2f1K-mnKCwUV02ygmdwqg1KXOr9XhIKoKIKLGn7UL-YsK27uZCnFK2y=s68-c-k-c0x00ffffff-no-rj"
        views="5000" 
        date ="last year" 
        lengthTime="3:12:12">
        </VideoCard>
        
        <VideoCard 
        previewImage="https://i.ytimg.com/vi/J-py00xKc8w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC2OJGFYAmQsfxvLu5XPNzJQTey0Q" 
        title="my video title2" 
        channelName="my channel2"
        channelImage="https://yt3.ggpht.com/dO8Cceik6juhmVVlsXPyu8ziO5ozc0kw8DI07uxxraplE9IawqLWXSrOJziCqmg-Y3E8ttkmEzo=s88-c-k-c0x00ffffff-no-rj"
        views="50001" 
        date ="last week" 
        lengthTime="5:12:12">
        </VideoCard>
    </div>
}


let root = document.getElementById("root");

ReactDOM.render(App(), root);
