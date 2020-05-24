import React from 'react';
import WhyChooseUs from '../common/why_choose_us/why_choose_us'
import RequestQuote from '../common/request_quote/request_quote_sidebar'
import SideBar from '../common/side_bar/side_bar'
import './home_page.scss'

function HomePage(props) {
    return (
			<div class='wrapper'>
				<div class='main-content'>
					<div class='row'>
						<div class='col-md-12'>
							<WhyChooseUs />
						</div>
					</div>
				</div>
				<div class='sidebar'>
					<RequestQuote />
				</div>
				
			</div>
    );
}

export default HomePage;
