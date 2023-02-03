import react from "react";
import styles from './css/vimeoembed.module.css';


export default (props) => {

    const videoId = props.videoId;
    const videoUrl = `https://player.vimeo.com/video/${videoId}&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`;
    const videoTitle = props.title;

    return (
       <>
       <h1>{props.title}</h1>
       <p>{props.text}</p>
        <div style={{padding:'56.25% 0 0 0',position:'relative'}}>
            <iframe src={videoUrl} 
                    frameborder="0" 
                    allow="fullscreen; picture-in-picture" 
                    allowfullscreen 
                    style={{position:'absolute',top:'0',left:'0',width:'100%',height:'100%'}} 
                    title={videoTitle}>
            </iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
       </>
    );
}
