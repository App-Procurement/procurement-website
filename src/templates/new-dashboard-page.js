import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import logo from '../img/scenario/homepage/logo.png';
import ScenarioSlider from '../components/Scenario/ScenarioSlider';
import { v4 } from 'uuid';
// import SelectScenario from '../components/Scenario/SelectScenario';
import { AiFillCloseCircle } from 'react-icons/ai';
import '../css/newdashboard.css';
// import { Scrollbars } from 'react-custom-scrollbars';
import Modal from 'react-modal';

export const NewDashboardTemplate = ({ scenarios, slider }) => {
	const [showSelectScenario, setShowSelectScenario] = useState(false);
	const [showUseCase, setShowUseCase] = useState(false);
	const [useCase, setUseCase] = useState(null);
	const [selectedScenario, setSelectedScenario] = useState(scenarios[0]);
	const [modalIsOpen, setIsOpen] = React.useState(false);
	// const [ showForm, setShowForm ] = useState(false);
	// const [ showReg, setShowReg ] = useState(false);

	// function onClickSelectScenario() {
	// 	setShowSelectScenario(true);
	// }

	// function onClickSelectScenarioClose() {
	// 	// setShowSelectScenario(false);
	// 	setSelectedScenario(null);
	// }

	function onClickUseCase(uc) {
		if (uc.useCaseSlider) {
			setUseCase(uc);
			setShowUseCase(true);
		}
	}

	function onClickUseCaseClose() {
		setShowUseCase(false);
	}

	function onClickSubSelectScenario(scenario) {
		setSelectedScenario(scenario);
	}

	function selectScenario() {
		return (
			<div className="select-scenario-left">
				{/* <button className="close-btn" onClick={onClickSelectScenarioClose}>
					<AiFillCloseCircle />
				</button> */}
				<div className="scenario-container">
					{/* <Scrollbars
						className="scenarioleft-scrollbars"
					> */}
					{/* <> */}
					{scenarios && (
						<ul>
							{scenarios.map((scenario) => (
								<li key={v4()}>
									<div
										className={`item ${selectedScenario === scenario ? 'active' : ''}`}
										onClick={() => onClickSubSelectScenario(scenario)}
									>
										<div className="image">
											<img
												src={scenario.img}
												alt={scenario.name}
												title={scenario.name}
												width="80"
												height="80"
											/>
										</div>
										<div className="name">{scenario.name}</div>
									</div>
								</li>
							))}
						</ul>
					)}
					{selectedScenario && (
						<div className="dashboard-sub-scenario-container">
							<div className="sub-scenario-heading">
								<h2>Procurement Admin</h2>
								<button onClick={openModal} type="button" class="btn btn-light modules-btn">Modules</button>
							</div>
							<ul>
								{selectedScenario.subItems.map((item) => (
									<li key={v4()}>
										<div
											className="item"
											onClick={() => {
												onClickUseCase(item);
											}}
										>
											<div className="image">
												<img
													src={item.img}
													alt={item.name}
													title={item.name}
												/>
											</div>
											<div className="name">{item.name}</div>
										</div>
									</li>
								))}
							</ul>
						</div>
					)}
					{/* </> */}
					{/* </Scrollbars> */}
				</div>
			</div>
		);
	}

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<>
			<section id="scenario-bg">
				<div
					className={`new-dashboard-slider-container ${showSelectScenario === true
						? 'select-scenario'
						: ''} ${showUseCase === true ? 'select-usecase' : ''}`}
				>
					<div className="homePage-grid">
						<div className="header">
							<div className="logo">
								<img src={logo} alt="" />
							</div>
						</div>
						<div className='search-box'>
							<div className="search-bar">
								<input
									type='search'
									name=''
									id='search-home'
									placeholder='Search Here...'
								/>
								<i class="far fa-search"></i>
							</div>
						</div>
						{selectScenario()}
					</div>
				</div>
			</section>
			{showUseCase &&
				<div className={`scenario-slider-container dashboard-slider-container  ${showUseCase === true ? 'select-usecase' : ''}`}>
					<button
						className="close-btn"
						onClick={() => {
							onClickUseCaseClose(useCase);
						}}
					>
						<AiFillCloseCircle />
					</button>
					<ScenarioSlider
						slider={useCase.useCaseSlider}
						showMoreDetailsButton={false}
						onClickUseCaseClose={onClickUseCaseClose}
					/>
				</div>
			}
			<Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
				<div className="modal-main-content">
					<div className="modal-header">
						<h3>Select Modules</h3>
						<span><i class="fas fa-times"></i></span>
					</div>
					<div className="modal-body-content">
						<div className="row">
							<div className="col-md-3 pb-3">
								<div className="form-check">
									<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
									<label className="form-check-label" for="flexCheckDefault">
										Default checkbox
									</label>
								</div>
							</div>
							<div className="col-md-3 pb-3">
								<div className="form-check">
									<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
									<label className="form-check-label" for="flexCheckDefault">
										Default checkbox
									</label>
								</div>
							</div>
							<div className="col-md-3 pb-3">
								<div className="form-check">
									<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
									<label className="form-check-label" for="flexCheckDefault">
										Default checkbox
									</label>
								</div>
							</div>
							<div className="col-md-3 pb-3">
								<div className="form-check">
									<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
									<label className="form-check-label" for="flexCheckDefault">
										Default checkbox
									</label>
								</div>
							</div>
							<div className="col-md-3 pb-3">
								<div className="form-check">
									<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
									<label className="form-check-label" for="flexCheckDefault">
										Default checkbox
									</label>
								</div>
							</div>
							<div className="col-md-3 pb-3">
								<div className="form-check">
									<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
									<label className="form-check-label" for="flexCheckDefault">
										Default checkbox
									</label>
								</div>
							</div>
							<div className="col-md-3 pb-3">
								<div className="form-check">
									<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
									<label className="form-check-label" for="flexCheckDefault">
										Default checkbox
									</label>
								</div>
							</div>
							<div className="col-md-3 pb-3">
								<div className="form-check">
									<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
									<label className="form-check-label" for="flexCheckDefault">
										Default checkbox
									</label>
								</div>
							</div>
							<div className="col-md-3 pb-3">
								<div className="form-check">
									<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
									<label className="form-check-label" for="flexCheckDefault">
										Default checkbox
									</label>
								</div>
							</div>
							<div className="col-md-3 pb-3">
								<div className="form-check">
									<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
									<label className="form-check-label" for="flexCheckDefault">
										Default checkbox
									</label>
								</div>
							</div>
							<div className="col-md-3 pb-3">
								<div className="form-check">
									<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
									<label className="form-check-label" for="flexCheckDefault">
										Default checkbox
									</label>
								</div>
							</div>
							<div className="col-md-3 pb-3">
								<div className="form-check">
									<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
									<label className="form-check-label" for="flexCheckDefault">
										Default checkbox
									</label>
								</div>
							</div>
							<div className="col-md-3 pb-3">
								<div className="form-check">
									<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
									<label className="form-check-label" for="flexCheckDefault">
										Default checkbox
									</label>
								</div>
							</div>
							<div className="col-md-3 pb-3">
								<div className="form-check">
									<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
									<label className="form-check-label" for="flexCheckDefault">
										Default checkbox
									</label>
								</div>
							</div>
							<div className="col-md-3 pb-3">
								<div className="form-check">
									<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
									<label className="form-check-label" for="flexCheckDefault">
										Default checkbox
									</label>
								</div>
							</div>
							<div className="col-md-3 pb-3">
								<div className="form-check">
									<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
									<label className="form-check-label" for="flexCheckDefault">
										Default checkbox
									</label>
								</div>
							</div>
							<div className="col-md-3 pb-3">
								<div className="form-check">
									<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
									<label className="form-check-label" for="flexCheckDefault">
										Default checkbox
									</label>
								</div>
							</div>
							<div className="col-md-3 pb-3">
								<div className="form-check">
									<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
									<label className="form-check-label" for="flexCheckDefault">
										Default checkbox
									</label>
								</div>
							</div>
							<div className="col-md-3 pb-3">
								<div className="form-check">
									<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
									<label className="form-check-label" for="flexCheckDefault">
										Default checkbox
									</label>
								</div>
							</div>
							<div className="col-md-3 pb-3">
								<div className="form-check">
									<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
									<label className="form-check-label" for="flexCheckDefault">
										Default checkbox
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className="modal-footer">
						<a href="#">Clear All</a>
						<button type="button" class="btn btn-dark submit-btn">Submit</button>
					</div>
				</div>
			</Modal>
		</>
	);
};

NewDashboardTemplate.propTypes = {
	scenarios: PropTypes.array,
	slider: PropTypes.array
};

const NewDashboardPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark;
	console.log(frontmatter);
	return <NewDashboardTemplate scenarios={frontmatter.scenarios} slider={frontmatter.slider} />;
};

NewDashboardPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object
		})
	})
};

export default NewDashboardPage;

export const newDashboardPageQuery = graphql`
	query NewDashboardPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			frontmatter {
				scenarios {
					img
					name
					subItems {
						img
						name
						useCaseSlider {
							img
							name
							text
						}
					}
				}
				slider {
					img
					name
					text
					moreDetails {
						moreDetailsName
						moreDetailsText
						moreDetailsImage {
							img
						}
					}
				}
			}
		}
	}
`;
