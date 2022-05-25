import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import { Scrollbars } from 'react-custom-scrollbars';
import { AiFillCloseCircle } from "react-icons/ai";

const SelectScenario = ({ scenarios, onClickUseCase, onClickCloseScenario }) => {
  const [selectedScenario, setSelectedScenario] = useState(null);

  function onClickSubSelectScenario(scenario) {
    setSelectedScenario(scenario);
  }

  function onClickSelectScenarioClose() {
    setSelectedScenario(null);
    onClickCloseScenario();
  }

  return (
    <div className="select-scenario-left">
      <button className="close-btn" onClick={onClickSelectScenarioClose}>
        <AiFillCloseCircle />
      </button>
      <div className="scenario-container">
        <Scrollbars
          className="scenarioleft-scrollbars"
        >
          {
            scenarios &&
            <ul>
              {scenarios.map((scenario) => (
                <li key={v4()}>
                  <div className={`item ${selectedScenario === scenario ? 'active' : ''}`} onClick={() => onClickSubSelectScenario(scenario)}>
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
          }
        </Scrollbars>
        {selectedScenario &&
          <div className="sub-scenario-container">
            <Scrollbars>
              <ul>
                {selectedScenario.subItems.map((item) =>
                  <li key={v4()}>
                    <div className="item" onClick={() => { onClickUseCase(item) }}>
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
                )}
              </ul>
            </Scrollbars>
          </div>
        }
      </div>
    </div>
  );
};

SelectScenario.propTypes = {
  scenarios: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      name: PropTypes.string,
      subItems: PropTypes.arrayOf(
        PropTypes.shape({
          img: PropTypes.string,
          name: PropTypes.string,
          useCaseSlider: PropTypes.arrayOf(
            PropTypes.shape({
              img: PropTypes.string,
              name: PropTypes.string,
              text: PropTypes.string,
            })
          )
        })
      )
    })
  ),

}

export default SelectScenario