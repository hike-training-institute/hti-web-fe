import React from 'react';
import "./header.scss";

function Header(props) {
    return (
      <div class="head1">
				<div class="container-fluid">
					<div class="row">
						<div class="col-xl-11 col-lg-11 col-md-12 col-sm-12 col-xs">
							<div class="t_head_list">
								<ul>
									<div><h3>Hike Training Institute</h3></div>
									<li>Talk to us :+91-9791 889 309</li>
									<li>Whatsapp : +91-9791 889 309</li>
									<li>Mail Us : hike.traininginstitute@gmail.com</li>
								</ul>					
							</div>
						</div>
						<div class="row fas">
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