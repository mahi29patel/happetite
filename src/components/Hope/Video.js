import React from "react";
import ReactPlayer from "react-player";
import './Video.css';

function Video(){
    return (
        <div className="vid-main" id="hopeVideo">
            <div className='outer-box1'>
                <h2>Hope Theory</h2>
                <h5>Click on the button below to watch the video.</h5><br></br>
                <div className="video">
                <iframe src="https://drive.google.com/file/d/1_qMWunKLKrDVEcRWqakDqWmbmPWauazu/preview" width="700" height="480" allow="autoplay"></iframe>
                </div>
            </div>
        </div>
    );
}
 


export default Video;