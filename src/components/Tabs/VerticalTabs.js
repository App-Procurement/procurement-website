import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../../css/tabs.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import FlavorForm from '../../components/Forms/Contact.js';
import Privacypolicy from '../../components/Forms/Privacy.js';
const VerticalTabs = () => {
  return (
    <div className='App'>
      <div>
        <h1>Where do you find your current DevOps Maturity?</h1>
        <div className='tab-popup'>
          <button>
            <AiFillCloseCircle />
          </button>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>
            <p>Culture Skill</p>
          </Tab>
          <Tab>
            <p>Design Architecture</p>
          </Tab>
          <Tab>
            <p>Build Deploy</p>
          </Tab>
          <Tab>
            <p>Test</p>
          </Tab>
          <Tab>
            <p>Operate</p>
          </Tab>
        </TabList>

        <TabPanel>
          <div className='panel-content'>
            <div className='content-panel'>
              <div className='basic'>
                <h3>Basic</h3>
                <ul>
                  <li>Prioritized work</li>
                  <li>Large team</li>
                  <li>Multiple Roles(Architect, Developer,Tester,...)</li>
                  <li>Defined & documented process</li>
                  <li> Quarterly release</li>
                </ul>
              </div>
              <div className='intermediate'>
                <h3>Intermediate</h3>
                <ul>
                  <li>Stable teams</li>
                  <li>Share pain</li>
                  <li>Remove boundary(Dev & Test)</li>
                  <li>Agile process</li>
                  <li>Monthly release</li>
                  <li>Act on metrics</li>
                </ul>
              </div>
              <div className='standard'>
                <h3>Standard</h3>
                <ul>
                  <li>Team responsible all the way prod</li>
                  <li>Dedicated tools team Remove boundary(Dev & Ops)</li>
                  <li>Deploy disconnected from release</li>
                  <li>Continuous improvement</li>
                  <li>Component ownership Decentralized decisions</li>
                </ul>
              </div>
              <div className='advance'>
                <h3>Advance</h3>
                <ul>
                  <li>All full stacks experts</li>
                  <li>All full stacks experts</li>
                  <li>Cross functional small teams</li>
                  <li>Speedy feedback Advanced frameworks driven RAD</li>
                  <li>Excellent training framework</li>
                </ul>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='panel-content'>
            <div className='content-panel'>
              <div className='basic'>
                <h3>Basic</h3>
                <ul>
                  <li>Monolith product</li>
                  <li>Consolidate platform</li>
                  <li>System into Modules</li>
                  <li>Library management </li>
                  <li>Api management </li>
                  <li>Basic Automations</li>
                </ul>
              </div>
              <div className='intermediate'>
                <h3>Intermediate</h3>
                <ul>
                  <li>Component engineering</li>
                  <li>Config as code</li>
                  <li>Event architecture</li>
                  <li>service api interaction</li>
                  <li>Api management </li>
                  <li>Test / release automation</li>
                </ul>
              </div>
              <div className='standard'>
                <h3>Standard</h3>
                <ul>
                  <li>Distributed Architecture</li>
                  <li>Horizontal scalability</li>
                  <li>Cloud centric, SASS model</li>
                  <li>Deployment automation</li>
                  <li>Framework </li>
                  <li>Operation automation framework </li>
                </ul>
              </div>
              <div className='advance'>
                <h3>Advance</h3>
                <ul>
                  <li>Hybrid cloud, cloud agnostics, elastics</li>
                  <li>Complete software defined(IAAC)</li>
                  <li>Multi cloud compete SOA</li>
                  <li>Simplified automated framework</li>
                  <li>Aggregated hardware</li>
                  <li>Container / Services </li>
                  <li>Optimized pooling</li>
                </ul>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='panel-content'>
            <div className='content-panel'>
              <div className='basic'>
                <h3>Basic</h3>
                <ul>
                  <li>Scripted Build</li>
                  <li>Continuous Integration</li>
                  <li>Dedicated build & release server</li>
                  <li>Multiplatform packages</li>
                  <li>Basic test automation</li>
                  <li>
                    Manual staging environments(dev, stage,test, prod) promotion
                  </li>
                </ul>
              </div>
              <div className='intermediate'>
                <h3>Intermediate</h3>
                <ul>
                  <li>Pollen build</li>
                  <li>Manual version & tagging</li>
                  <li>Automated Staging</li>
                  <li>
                    Automated unit / Integration / UI / Regression /Performance
                    / Code / Security / Code Quality / Coverage /Acceptance
                    tests
                  </li>
                </ul>
              </div>
              <div className='standard'>
                <h3>Standard</h3>
                <ul>
                  <li>Quality gates</li>
                  <li>Realtime build metrics</li>
                  <li>Deployment & compliance trend</li>
                  <li>Test results consolidation</li>
                  <li>TDD framework integration</li>
                  <li>Dynamic environment provisioning</li>
                </ul>
              </div>
              <div className='advance'>
                <h3>Advance</h3>
                <ul>
                  <li>Zero touch deployment</li>
                  <li>Elastic automation cluster</li>
                  <li>Parallel continuous delivery</li>
                  <li>
                    Containerized build environments for different language
                  </li>
                  <li>Simplified build Orchestration framework</li>
                </ul>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='panel-content'>
            <div className='content-panel'>
              <div className='basic'>
                <h3>Basic</h3>
                <ul>
                  <li>Basic test automation</li>
                  <li>Continuous tests integration </li>
                  <li>Risk based manual tests</li>
                </ul>
              </div>
              <div className='intermediate'>
                <h3>Intermediate</h3>
                <ul>
                  <li>
                    Automated unit / Integration / UI / Regression /Performance
                    / Code / Security / Code Quality / Coverage /Acceptance
                    tests
                  </li>
                  <li>Test results Consolidate </li>
                  <li>Component wise tests</li>
                </ul>
              </div>
              <div className='standard'>
                <h3>Standard</h3>
                <ul>
                  <li>well defined TDD and BDD framework</li>
                  <li>BDD tests written in DSL</li>
                  <li>Test rule based stage Automation</li>
                  <li>Test case tool to automation </li>
                  <li>Tests integration</li>
                </ul>
              </div>
              <div className='advance'>
                <h3>Advance</h3>
                <ul>
                  <li>Service wise test results consolidation</li>
                  <li>Tests Trend analytics </li>
                  <li>Continuous tests in production</li>
                </ul>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='panel-content'>
            <div className='content-panel'>
              <div className='basic'>
                <h3>Basic</h3>
                <ul>
                  <li>ITSM tools & Operating SLA's</li>
                  <li>Performance monitoring</li>
                  <li>Log monitoring</li>
                  <li>Alerts monitoring</li>
                  <li>Manual resource provisioning</li>
                  <li>Security audits</li>
                </ul>
              </div>
              <div className='intermediate'>
                <h3>Intermediate</h3>
                <ul>
                  <li>Diagnostics</li>
                  <li>Advanced monitoring through scripts</li>
                  <li>Log Analysis</li>
                  <li>Automated ticket recommendation and workflows</li>
                </ul>
              </div>
              <div className='standard'>
                <h3>Standard</h3>
                <ul>
                  <li>Automated hyperscale cluster & cloud provisioning</li>
                  <li>Elastic auto provisioning</li>
                  <li>Resilience scripts </li>
                  <li>Dynamic vdms/ VDss provisioning</li>
                </ul>
              </div>
              <div className='advance'>
                <h3>Advance</h3>
                <ul>
                  <li>Hardware / Os / App server / license agnostics</li>
                  <li>Continuous security / Audit / Billing</li>
                  <li>
                    Centralized tools for monitoring different environments,
                    products, services, clouds
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default VerticalTabs;
