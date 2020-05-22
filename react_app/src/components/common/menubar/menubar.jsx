import React from 'react';

function MenuBar(props) {
    return (
			<div class="nav-menu-bar">
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<a class="navbar-brand" href="#">Hike Training Institute</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNavDropdown">
					<ul class="navbar-nav">
						<li class="nav-item active">
							<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Company</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">About us</a>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Courses Offered
							</a>
							<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
								<a class="dropdown-item" href="#">Data Science Training</a>
								<a class="dropdown-item" href="#">Big Data Analytics using Hadoop and Spark Training</a>
								<a class="dropdown-item" href="#">Cloud Computing AWS Training</a>
								<a class="dropdown-item" href="#">Mobile Application Android iOS Training</a>
								<a class="dropdown-item" href="#">Tableau Training in Chennai</a>
								<a class="dropdown-item" href="#">Internet of Things IOT Training</a>
								<a class="dropdown-item" href="#">Hadoop Big-Data Training</a>
								<a class="dropdown-item" href="#">AI Artificial Intelligence Training</a>
								<a class="dropdown-item" href="#">Business Analytics Training</a>
								<a class="dropdown-item" href="#">BlockChain Training</a>
								<a class="dropdown-item" href="#">AR Augmented Reality Training</a>
								<a class="dropdown-item" href="#">Python Language Training</a>
								<a class="dropdown-item" href="#">RPA Robotic Process Automation Training</a>
								<a class="dropdown-item" href="#">Microsoft Azure Training in Chennai</a>
								<a class="dropdown-item" href="#">AngularJS Training in Chennai</a>
								<a class="dropdown-item" href="#">Android Training in Chennai</a>
								<a class="dropdown-item" href="#">Blue Prism Training in Chennai</a>
								<a class="dropdown-item" href="#">Automation Anywhere Training in Chennai</a>
								<a class="dropdown-item" href="#">Data Analytics Training in Chennai</a>
								<a class="dropdown-item" href="#">Ethical Hacking Course in Chennai</a>
								<a class="dropdown-item" href="#">Selenium Training in Chennai</a>
								<a class="dropdown-item" href="#">UiPath Training in Chennai</a>
								<a class="dropdown-item" href="#">Apache Spark Training in Chennai</a>
							</div>
						</li>
					</ul>
				</div>
			</nav>
		</div>
    );
}

export default MenuBar;