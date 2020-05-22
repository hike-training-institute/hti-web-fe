import React from 'react';
import "./header.scss";

function Header(props) {
    return (
      <div class="head1">
				<div class="container-fluid">
					<div class="row">
						<div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs">
							<div class="t_head_list">
								<ul>
									<li><span>Talk to us : </span>+91-9791 889 309</li>
									<li><span>Whatsapp : </span>+91-9791 889 309</li>
									<li><span>Mail Us : </span>hike.traininginstitute@gmail.com</li>
								</ul>					
							</div>
						</div>
						<div class="row">
							<div><a href="https://www.facebook.com/HikeTrainingInstitute" target="_blank" rel="noopener noreferrer" class="facebook"><i class="fa fa-facebook"></i></a></div>
							<div><a href="https://www.instagram.com/hiketraininginstitute/" target="_blank" rel="noopener noreferrer" class="instagram"><i class="fa fa-instagram"></i></a></div>
							<div><a href="https://github.com/hike-training-institute" target="_blank" rel="noopener noreferrer" class="github"><i class="fa fa-github"></i></a></div>
						</div>
					</div>
				</div>
			</div>
    );
}

export default Header;