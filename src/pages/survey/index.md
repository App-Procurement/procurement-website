---
templateKey: survey-page
path: /survey
title: Survey
Surveyjson:
  data: >-
    {
        "pages": [
            {
                "name": "page1",
                "elements": [
                    {
                        "type": "checkbox",
                        "name": "What best describe your current state of team ? Please choose the following",
                        "isRequired": true,
                        "choices": [
                        "The team is producing higher quality products than before .The releases are more dependable than before.",
                        "Team delivering functionality to users more quickly and/or more often than before",
                        "The team has higher morale than before. The business is recognizing greater economic value than before",
                        "The team is more responsive to our customer(s) than before. A speedy feedback driven process tool chain is established between customers requirements and engineering team"
                        ]
                    },
                     {
                        "type": "checkbox",
                        "name": "Describe organization & Team structure  for  developing product ?  Please choose the following",
                        "isRequired": true,
                        "choices": [
                        "Dev, Ops, Service Management, security QA teams are distinct and independent?",
                        "QA is embedded with Dev Teams to ensure high quality in operations",
                        "You have rightly adopted “ You build it , You Operate “ culture",
                        "Security is interwoven into the development process",
                        "Support Tickets are assigned immediately to dev teams without passing through Ops reviews"
                        ]
                    },
                    {
                        "type": "checkbox",
                        "name": "How would you describe how your dev and ops teams share tools?",
                        "isRequired": true,
                        "choices": [
                        "We are all one team, sharing responsibilities and using a common set of tools and sharing information.",
                        "Dev and ops teams use a common set of tools but don't have visibility into each others' work.",
                        "Dev and ops teams have different responsibilities and their own sets of tools, and they struggle to share data.",
                        "Dev and ops teams use a common set of tools but share information manually.",
                        "Dev and ops teams share some responsibilities but still use separate tools."
                        ]
                    },
                    {
                        "type": "checkbox",
                        "name": "What is your organizational structure around service delivery?",
                        "isRequired": true,
                        "choices": [
                        "Development gets it to work and hands off to ops to finish the job",
                        "Product management writes stories with operations as a top level concern",
                        "Ops engineers are embedded in dev teams",
                        "We have just one team, not two",
                        "Our architecture is designed for operations and scale"
                        ]
                    },
                    {
                        "type": "checkbox",
                        "name": "What is your organizational state around technology delivery? ",
                        "isRequired": true,
                        "choices": [
                        "The team do not have significant technical debt.",
                        "The team incorporate refactoring into our daily work to reduce technical debt.",
                        "Team can decide which tool team use .The tool choices are based on what is best for the people who use the tools.",
                        "Team prioritizes keeping the software deployable over working on new features.",
                        "developers can easily create environments that closely match production - even when physical resources are constrained for all dependent systems and without coding mocks and stubs?"
                        ]
                    },
                    {
                        "type": "checkbox",
                        "name": "How would you describe the project prioritization process in your company?",
                        "isRequired": true,
                        "choices": [
                        "Budgetary planning cycle (year, quarter)",
                        "Small projects & iterative products",
                        "Planning cadence (weeks)",
                        "Continuous experimentation and releases",
                        "Continuous planning"
                        ]
                    },
                    {
                        "type": "checkbox",
                        "name": "How would your describe the business requirement communication between teams?",
                        "isRequired": true,
                        "choices": [
                        "Team define and manage requirements and present them in a structured and visual way that everyone in the software development lifecycle can understand. Team have full visibility of change",
                        "organizational structure and tooling support cross-functional teams that put more emphasis on the processes associated with releasing new capabilities rather than with supporting individual roles?",
                        "There is an agreement between business, dev and ops on critical services (transaction counts, performance, uptime, etc.) that are necessary to meet pre-defined business goals",
                        "Developers have a centralized portal in order to access, develop and test APIs as they code their applications?",
                        "Developers have access to the operations/support team incident details and conduct formal/informal meetings to improve application supportability?"
                        ]
                    }
                ]        
            },
            {
                "name": "page2",
                "elements": [
                   {
                        "type": "checkbox",
                        "name": "What is the ratio to unplanned / bugfix work vs. new features / improving infrastructure?",
                        "choices": [
                        "Predominately new features, rarely unplanned work",
                        "Mostly unplanned work, some new feature development",
                        "Mostly new features, some unplanned work",
                        "A balanced mix of both unplanned work and new feature development",
                        "Predominately unplanned work, rarely new feature development"
                        ]
                    },
                    {
                        "type": "checkbox",
                        "name": "What best describe your current state of engineering team traits? Please choose the following",
                        "choices": [
                        "Team consistently handle complex, multi-tier deployments for thousands of servers and complex services without having to rely on the development of one-off customized scripts or manual processing?",
                        "Development and testing teams automatically replicating/reproducing more realistic conditions from production systems to create accurate virtual services and testing scenarios?",
                        "Developers consistently spot code quality issues early in the development process, before they get near to production?",
                        "You have feedback mechanisms in place to ensure continuous assessment and drive improvement and progress?"
                        ]
                    },
                    {
                        "type": "checkbox",
                        "name": "What best describe your current state of engineering team skill sets",
                        "choices": [
                        "Distinct Team of Product Manager/ Architect/Dev/QA/OPS , with Dev/QA having some key expertise on some languages / Framework .",
                        "Dev team does write some automation tests , but there are separate QA and Operation Team",
                        "Product Management team aware of operation concerns, write stories with operation in mind, architects have adequate knowledge of infrastructure & applications both and rest all engineering team is Full stack developer who understand operation and can automate operations."
                        ]
                    },
                     {
                        "type": "checkbox",
                        "name": "What best describe your criterion for  current state of resource hiring",
                        "choices": [
                        "Mostly based on specific skill & framework, fit for specific area of development & QA.",
                        "Development resources who has holistic view on both Infrastructure and Application",
                        "Architects who have capability to draft multi cloud hybrid architectures",
                        "Product Managers having thorough understanding of operation aspects.",
                        "Developers skilled on development/deployments / operations"
                        ]
                    },
                    {
                        "type": "checkbox",
                        "name": "What best describe your training process",
                        "choices": [
                        "No formal training in place , only happens through project level mentoring",
                        "You have some defined training for language & framework in place i.e used in projects.",
                        "You have training program available that guide your product managers to gain operation excellence and engineering team to gain DevOps excellence.",
                        "You continuously improve your training based on latest framework and technologies and input from Architecture team"
                        ]
                    },
                    {
                        "type": "checkbox",
                        "name": "How would you describe the project prioritization process in your company?",
                        "choices": [
                        "Budgetary planning cycle year, quarter",
                        "Small projects & iterative product",
                        "Planning cadence weeks",
                        "Continuous experimentation and release",
                        "Continuous plannings"
                        ]
                    }
                ]
            },
            {
                "name": "page3",
                "elements": [
                   {
                        "type": "checkbox",
                        "name": "How would you describe your typical deployment process for key projects?",
                        "choices": [
                        "Team develops code using continuous integration (CI)",
                        "Team commits and pushes to a shared main branch/trunk at least once daily",
                        "Each commit to main branch starts an automated build.",
                        "Team members have an option to start a series of automated tests as they see fit.",
                        "When the build fails, the errors are usually fixed and the new build is run as soon as possible.",
                        "Automated tests are regularly run at least once per day and are part of the standard workflow.",
                        "You keep the number of our branches to a minimum and not more than five active branches on the application's code repo.",
                        "Your team never has code lock periods when no one can check in code or do pull requests due to merging conflicts.",
                        "On my team, we can perform deployments during normal business hours with negligible downtime.",
                        "Our software is in a deployable state early in the lifecycle.",
                        "We don't fear code deployments.",
                        "Code deployments are not disruptive, easy and pain-free.",
                        "When the automated tests pass, I am confident the software is releasable.",
                        "When people get feedback that the system is not deployable (such as failing builds or tests), they make fixing these issues their highest priority.",
                        "Fast feedback on the quality and deploy ability of the system is available to anyone on the team.",
                        "My organization deploys code to production more often than once per month.",
                        "The majority or all of our code is deployed automatically to various environments.",
                        "We can deploy our system to production - at any time - on demand.",
                        "If there are deployment issue, the process is automatically aborted and the new features are rolled back without excessive friction.",
                        "The lead time between a line of code has been written in development and available to live users in production has decreased over the last three months.",
                        "Every change that passes the automated tests is deployed to production automatically.",
                        "Are your teams fully proficient at handling any unforeseen issues that cause the rollback of an application release?",
                        "Are your teams establishing continuous feedback loops to share important information before and after each release?",
                        "Do your release deployment processes include integrating Continuous Integration and Build tools, automated Testing tools, Containerization (e.g. Docker) and/or Infrastructure Configuration and Cloud Provisioning tools?",
                        "Are your application release deployments fully automated end-to-end across development, test and production environments?",
                        "Can developers easily create a sandbox that matches production?",
                        "Can you deploy new versions of your application to production without downtime? Do you support blue/green deployment?",
                        "Are deployments automated end-to-end across development, test and production?",
                        "Does your release process include comprehensive auditing and reporting capabilities?",
                        "Do your release and deployment practices provide comprehensive auditing and reporting capabilities to ensure IT governance and compliance?"
                        ]
                    }
                ]
            },
            {
                "name": "page4",
                "elements": [
                   {
                        "type": "checkbox",
                        "name": "How would you describe your typical release process for key projects?",
                        "choices": [
                        "Continuous deployment to production augmented with experimental releases ",
                        "Continuous deployment to production",
                        "Traditional waterfall release process",
                        "Continuous delivery to pre-production",
                        "Continuous integration, automating code into the master branch"
                        ]
                    },
                    {
                        "type": "checkbox",
                        "name": "In general, how do applications perform once released into production?",
                        "choices": [
                        "New application releases have major issues in production forcing rollbacks",
                        "Continuous integration reveals potential problems prior to release",
                        "New applications occasionally have minor issues requiring fixes once in production",
                        "Continuous delivery and continuous improvement prevent the need for rollbacks", 
                        "Continuous deployment enables quick rollback to remediate operational issues"
                        ]
                    },
                    {
                        "type": "checkbox",
                        "name": "How quickly can developers see the results of the integration / unit / etc. testing?",
                        "choices": [
                        "We do not have any testing in place",
                        "10 minutes to 1 hour",
                        "1 hour to 1 day",
                        "1 day or greater",
                        "10 minutes or less"
                        ]
                    },
                     {
                        "type": "checkbox",
                        "name": "How would you describe your build deployment technology adoption and implementation",
                        "choices": [
                        "A elastic deployment automation framework is available central to organization",
                        "We use container technologies heavily to provision build and deployment environment dynamically",
                        "The organization use modern framework to unify the deployment of various different components of the system",
                        "The deployment framework can be extended quickly to meet the business SLA",
                        "The Development team is capable of creating integration tests environment in their local machine rapidly",
                        "The build & deployment trend analytics is available for system quality improvement",
                        "The team has integrated unit , integration, code quality , coverage , code security , ui , regression , performance , acceptance tests as a part of continuous delivery process",
                        "Continuous delivery statistics are visible across the components and services from a single window",
                        "Can your team provide comprehensive visibility into your application release activities and timing to all major stakeholders?"
                        ]
                    },
                    {
                        "type": "checkbox",
                        "name": "How often do you deploy code to production?",
                        "choices": [
                            "Yearly",
                            "Every few months",
                            "Several times a day",
                            "Weekly",
                            "Daily",
                            "Monthly"
                        ]
                    }
                ]
             },
             {
                "name": "page5",
                "elements": [
                   {
                        "type": "checkbox",
                        "name": "What best describes your testing environment?",
                        "choices": [
                        "Hostile environment testing",
                        "Load testing / redirecting transactions from production into a test environment",
                        "Unit testing",
                        "Automated integrated testing",
                        "Manual testing with testing environment separated from development"
                        ]
                    },
                    {
                        "type": "checkbox",
                        "name": "What best describes your test efficiency?",
                        "choices": [
                        "your teams quickly generate, discover and mask sensitive data/messages from existing systems, and/or generate synthetic data sets to increase test coverage and reduce search times?",
                        "Is testing (including unit, functional, load, regression and performance) fully automated across the SDLC, with validation mechanisms and strategies shared across teams?",
                        "As requirements are updated/changed, can systems auto-generate test-cases along with access to the required test data?",
                        "Automated tests are regularly run at least once per day and are part of the standard workflow.",
                        "Teams develop and test against systems that behave like the production system.",
                        "All team members are responsible for creating and maintaining automated acceptance tests.",
                        "Test failures are likely to indicate a real defect.",
                        "Teams can easily access a common pool of tests so they can reproduce failures.",
                        "Every change that passes the automated tests is deployed to production automatically."
                        ]
                    },
                    {
                        "type": "checkbox",
                        "name": "What best describes your test framework adoption?",
                        "choices": [
                        "You maintain all your test cases inside a tool.",
                        "You have a test framework in place that can integrate all your unit, integration, UI , Performance , Acceptance tests and generate test results in central location",
                        "Your team is skilled at  adopting a matured TDD and BDD framework where they can easily hook the acceptance tests",
                        "The test framework can be easily integrated with the continuous delivery system to show consolidated test results for each tests on each services",
                        "Your team has adequate knowledge and understanding of writing DSL based BDD driven tests"
                        ]
                    },
                     {
                        "type": "checkbox",
                        "name": "What best describes your test automation capability?",
                        "choices": [
                        "You have automated unit/integration/UI/Regression/Performance/ Code Security/Code Quality / Coverage/ Acceptance Tests",
                        "Your automated tests are written per component wise and you maintain a finer level of separation of your actual code and automation test code", 
                        "You have a right integration of test case tool to automation tests",
                        "You have a visibility of component wise different test results in a single place",
                        "You have real time tests trend analytics present to analyze tests effectiveness",
                        "You have some availability and functional tests that continuously run in production to check system reliability"
                        ]
                    }
                ]
            },
            {
                "name": "page6",
                "elements": [
                   {
                        "type": "checkbox",
                        "name": "How would you describe the state of design processes in your company",
                        "choices": [
                        "We regularly evaluate the design of our system and make incremental changes to it.",
                        "We regularly set aside time to work on improving the design of our system and reduce technical debt, even if it means delaying feature delivery.",
                        "We can make large-scale changes to the design of our system without the permission of somebody outside the team.",
                        "In general, architects collaborate regularly with teams to evolve the design of our systems."
                        ]
                    },
                    {
                        "type": "checkbox",
                        "name": "How would you describe the state of architectural adoption in your company",
                        "choices": [
                        "We have mostly large products managed by large teams, having effective library and API management in place",
                        "We apply component engineering effectively and our products mostly composed of components interacting through api and service buses.",
                        "Every component of our product is distributed and Horizontally scalable",
                        "We are developing microservices capable of being deployed to any cloud , each having a right blend of auxiliary services and databases (SQL/NOSQL/CACHE/GRAPH/BIG )"
                        ]
                    },
                    {
                        "type": "checkbox",
                        "name": "How would you describe the state of cloud architecture in your company",
                        "choices": [
                        "Our workloads are mostly residing in our private clouds and pure physical environments",
                        "We have tools and framework available to distribute our workloads in our private cloud as  well as specific public cloud provider.",
                        "We have adopted hybrid cloud wherein public clouds are connected in private address space",
                        "We are creating optimized resource pooling in hybrid cloud and deploy our services across the clouds"
                        ]
                    },
                     {
                        "type": "checkbox",
                        "name": "How would you describe the state of application delivery model",
                        "choices": [
                        "Applications are delivered as packages for multiple OS environment", 
                        "Applications are delivered as host templates capable of running to any cloud on the fly",
                        "Application services are delivered as container with build once run anywhere model",
                        "Application services are delivered with right blend of container and faas model"
                        ]
                    },
                    {
                        "type": "checkbox",
                        "name": "What best describe the state of infrastructure provisioning capability in your organization",
                        "choices": [
                        "We provision server , network , storage primarily through automation scripts and some are manual",
                        "We provision entire infrastructure in software defined manner in our private cloud through the cloud orchestrator",
                        "We provision the infrastructure and pool resources across the cloud in complete software defined manner"
                        ]
                    }
                ]
            },
            {
                "name": "page7",
                "elements": [
                   {
                        "type": "checkbox",
                        "name": "What best describes your operation monitoring capability?",
                        "choices": [
                        "Monitoring Tool in place which can monitor the following from single window",
                        "Monitoring practices scale to manage more modern distributed and microservices-style architectures with many new languages and data stores and potentially thousands of services to support?",
                        "Teams can visually depict changes in application environments to quickly identify when and where changes occurred, together with the resulting impact on performance?",
                        "Is your monitoring able to distinguish the most critical and recurrent problems and how they impact business services, without lengthy configuration and baselining?",
                        "Has your organization been effective in moving monitoring into development and test - making it an established element of the process in those areas to prevent defects from getting into production?",
                        "Do you have complete end-to-end visibility into all business services and transactions - from customer engagement via mobile devices and apps, through middleware and databases to back-end systems-of-record.",
                        "How effective are your teams in monitoring information and analytics on mobile app behavior and usage to not only resolve problems, but also drive development improvements?",
                        "Can your teams monitor complete business services that link end-user experience, end-to-end transactions and applications to infrastructure and pinpoint root cause and potential impact?",
                        "Are your teams able to quickly correlate and analyze multiple application performance metrics to solve complex emerging problems before they impact end-user experience?",
                        "Do teams have visibility into system capacity in order to understand the impact of increased system workloads?",
                        "Are your teams aware of third-party dependencies to ensure reliable service delivery?",
                        "Do teams have a unified view that enables them to quickly pinpoint and triage problems?"
                        ]
                    },
                    {
                        "type": "checkbox",
                        "name": "What best describes your operation log analysis capability?",
                        "choices": [
                        "Central Log collection and search tool is present and team is trained on that.",
                        "You have intelligent log analysis tools present that continuously gives insights to application services reliability & performance.",
                        "Your log analysis tools are integrated with ITSM tool to raise alerts depending on log analysis result."
                        ]
                    }
                ]
            },
            {
                "name": "page8",
                "elements": [
                   {
                        "type": "checkbox",
                        "name": "What best describes your ITSM process capability?",
                        "choices": [
                        "You have a central ITSM tool and Operation SLA’s defined and different teams in operation address different tickets",
                        "You do resource provisioning manually through ITSM tickets",
                        "You have intelligent tools that does automated ticket remediation",
                        "Your resource provisioning is entirely automatics , the architecture guarantee automated elastic provisioning of cluster , services , and associated resources"
                        ]
                    },
                    {
                        "type": "checkbox",
                        "name": "What best describes your operation log analysis capability?",
                        "choices": [
                        "Central Log collection and search tool is present and team is trained on that.",
                        "You have intelligent log analysis tools present that continuously gives insights to application services reliability & performance.",
                        "Your log analysis tools are integrated with ITSM tool to raise alerts depending on log analysis results."
                        ]
                    },
                    {
                        "type": "checkbox",
                        "name": "What best describes your audit capability?",
                        "choices": [
                        "You have tools and scripts in place to do regular application and infrastructure  security audits",
                        "You have audit trails tools present to perform audit trailing",
                        "You have continuous security and continuous compliance system in place that gives you real time visibility on security and compliance",
                        "You have centralized tools for auditing different environments (dev/stage/qa/tests) , products deployed across clouds in real time"
                        ]
                    },
                    {
                        "type": "checkbox",
                        "name": "What best describe your resilience  capability?",
                        "choices": [
                        "You mostly troubleshot from you log analysis or  monitoring tool and restore the services manually",
                        "You have diagnostics scripts available that you run to troubleshoot failure and restore services manually",
                        "Application support resiliency through resilience architecture (circuit breaker sort of)", 
                        "Automation scripts are present which does regular and preventive maintenance in response to system nature "
                        ]
                    },
                    {
                        "type": "checkbox",
                        "name": "What best describe your operation maturity in adopting advanced technologies?",
                        "choices": [
                        "You have automated ticker remediation and workflows that caters your 60% tickets",
                        "You provision your infrastructure with automated tools that seamlessly does hyper scaling cluster and cloud provisioning",
                        "You have centralized tool to monitor different product , environments , services and clouds",
                        "You have continuous security , billing , compliance mechanism in place"
                        ]
                    }
                ]
            }
        ]
    }
---
