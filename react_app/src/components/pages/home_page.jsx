import React from 'react';
import './home_page.scss'

function HomePage(props) {
    return (
			// why choose us 
			<div class="choose-us">
				<div class="container-fluid">
					<div class="row">
						<div class="col-md-1">
							<img src="assets/images/fast_growing.png" alt="" />
						</div>
						<div class="col-md-7 offset-md-4">
							<div class="s_title">
								<h2>Why to  <span>Choose Us?</span> </h2>
								<p>A Choice that makes a big difference in your career. Hike Training Institute is committed to helping its students to reach their goals and their training experiences, by providing the innovative surroundings and faculties.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
    );
}

export default HomePage;