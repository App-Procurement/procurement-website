import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import logo from '../img/scenario/homepage/logo.png';
import ScenarioSlider from '../components/Scenario/ScenarioSlider';
import { v4 } from 'uuid';
// import SelectScenario from '../components/Scenario/SelectScenario';
import { AiFillCloseCircle } from 'react-icons/ai';
import '../css/newdashboard.css';

export const NewDashboardTemplate = ({ scenarios, slider }) => {
	const [ showSelectScenario, setShowSelectScenario ] = useState(false);
	const [ showUseCase, setShowUseCase ] = useState(false);
	const [ useCase, setUseCase ] = useState(null);
	const [ selectedScenario, setSelectedScenario ] = useState(null);
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
												width="60"
												height="60"
											/>
										</div>
										<div className="name">{scenario.name}</div>
									</div>
								</li>
							))}
						</ul>
					)}
					{selectedScenario && (
						<div className="sub-scenario-container">
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
													width="60"
													height="60"
												/>
											</div>
											<div className="name">{item.name}</div>
										</div>
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</div>
		);
	}

	console.log(scenarios);
	return (
		<section id="scenario-bg">
			<div
				className={`scenario-slider-container ${showSelectScenario === true
					? 'select-scenario'
					: ''} ${showUseCase === true ? 'select-usecase' : ''}`}
			>
				<div className="homePage-grid">
					<div className="header">
						<div className="logo">
							<img src={logo} alt="" />
						</div>
					</div>
					{selectScenario()}
					{/* <SelectScenario
						scenarios={scenarios}
						onClickUseCase={onClickUseCase}
						onClickCloseScenario={onClickSelectScenarioClose}
					/> */}
				</div>
			</div>
			{showUseCase && (
				<div className={`scenario-slider-container ${showUseCase === true ? 'select-usecase' : ''}`}>
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
			)}
		</section>
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
