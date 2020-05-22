import React from 'react';
import "./footer.scss";

function Footer(props) {
    return (
        <div class="footer">    
					<div class="row">
					<div><a href="https://www.facebook.com/HikeTrainingInstitute" target="_blank" rel="noopener noreferrer" class="facebook"><i class="fa fa-facebook"></i></a></div>
					<div><a href="https://www.instagram.com/hiketraininginstitute/" target="_blank" rel="noopener noreferrer" class="instagram"><i class="fa fa-instagram"></i></a></div>
					<div><a href="https://github.com/hike-training-institute" target="_blank" rel="noopener noreferrer" class="github"><i class="fa fa-github"></i></a></div>
        </div>
  </div>
    );
}

export default Footer;