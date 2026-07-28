# ADARSH JHA (23070122261) 

![GitHub](https://img.shields.io/badge/GitHub-Repository-black?logo=github)
![Git](https://img.shields.io/badge/Git-Version%20Control-F05032?logo=git)
![Jira](https://img.shields.io/badge/Jira-Tracking-0052CC?logo=jira)
![Docker](https://img.shields.io/badge/Docker-Containerization-2496ED?logo=docker)
![Jenkins](https://img.shields.io/badge/Jenkins-CI%2FCD-D24939?logo=jenkins)
![Java](https://img.shields.io/badge/Java-Maven-orange?logo=openjdk)
![React](https://img.shields.io/badge/React-Frontend-61DAFB?logo=react)

## Student Information

- **Name:** Adarsh Jha
- **Course:** DevOps Laboratory
- **Branch: ** CSE 
- **PRN:** 23070122261

## Table of Contents

- [Repository Structure](#repository-structure)
- [Assignments](#assignments)
- [Projects](#projects)
- [Technologies Used](#technologies-used)
- [Learning Outcomes](#learning-outcomes)
- [Conclusion](#conclusion)
- [Author](#author)

## Repository Structure

```text
DevOps-Lab-Assignments/
├── Assignment-TW1.1-Git
├── Assignment-TW1.2-Jira
├── Assignment-TW1.3Docker-Jenkins
├── Project-1-Dockerizing-Jenkins-Pipeline
├── Project-2-React-Docker
├── Project-Distributed-Jenkins
└── README.md
```

```mermaid
flowchart TD
	A[DevOps Lab Repository] --> B[Git Workflow]
	A --> C[Jira Tracking]
	A --> D[Docker + Jenkins Freestyle]
	A --> E[Dockerized Jenkins Pipeline]
	A --> F[React Docker Deployment]
	A --> G[Distributed Jenkins Pipeline]
```

## Assignments

### Assignment TW1.1 - Git Workflow & Collaboration

**Objective**

Practice Git fundamentals including branching, collaboration, merge conflict handling, and repository synchronization with GitHub.

**Features**

- Repository initialization and remote connection
- Branch creation and collaboration workflow
- File modifications and commits
- Merge conflict demonstration and resolution

**Workflow**

```mermaid
flowchart LR
	A[Initialize Repository] --> B[Create Branch]
	B --> C[Edit Files]
	C --> D[Push to GitHub]
	D --> E[Create Pull Request]
	E --> F[Resolve Conflict]
	F --> G[Merge Completed]
```

<details>
<summary><b>📸 Execution Screenshots (Click to Expand)</b></summary>

#### Conflict resolved after merge review
<img src="Assignment-TW1.1-Git/Screenshot/conflict%20resolved.png" width="900">

#### Conflict created during collaboration
<img src="Assignment-TW1.1-Git/Screenshot/git%20conflic%201.3.png" width="900">

#### Merge conflict detected in the branch
<img src="Assignment-TW1.1-Git/Screenshot/git%20conflict.png" width="900">

#### Initial Git workflow verification
<img src="Assignment-TW1.1-Git/Screenshot/git%20tw1.1.png" width="900">

#### Branch created and tracked on GitHub
<img src="Assignment-TW1.1-Git/Screenshot/github%20branch.png" width="900">

#### Local Docker environment used during validation
<img src="Assignment-TW1.1-Git/Screenshot/localhost%20docker.png" width="900">

#### File modification committed for collaboration
<img src="Assignment-TW1.1-Git/Screenshot/modification%20auth.png" width="900">

</details>

### Assignment TW1.2 - Jira Project & Issue Tracking

**Objective**

Create and manage a Jira project to organize tasks, track issues, and manage workflow progress.

**Features**

- Jira project setup
- Issue creation and assignment
- Workflow management
- Task tracking and progress visibility

<details>
<summary><b>📸 Execution Screenshots (Click to Expand)</b></summary>

#### Jira dashboard overview
<img src="Assignment-TW1.2-Jira/screenshot/jira1.png" width="900">

#### Jira issue tracking view
<img src="Assignment-TW1.2-Jira/screenshot/jira2.png" width="900">

</details>

### Assignment TW1.3 - Docker & Jenkins Freestyle Project

**Objective**

Containerize an application with Docker and automate the build process through a Jenkins Freestyle job.

**Features**

- Docker installation and initialization
- Docker image build and container execution
- Jenkins installation and freestyle job configuration
- Build success verification

<details>
<summary><b>📸 Execution Screenshots (Click to Expand)</b></summary>

#### Docker engine initialization
<img src="Assignment-TW1.3Docker-Jenkins/Screenshot/docker%20engine%20start1.3.png" width="900">

#### Docker environment setup
<img src="Assignment-TW1.3Docker-Jenkins/Screenshot/docker%20initilize.png" width="900">

#### Docker image build process
<img src="Assignment-TW1.3Docker-Jenkins/Screenshot/docker%20build.png" width="900">

#### Docker container run output
<img src="Assignment-TW1.3Docker-Jenkins/Screenshot/docker%20run.png" width="900">

#### Local application available on Docker host
<img src="Assignment-TW1.3Docker-Jenkins/Screenshot/localhost%20docker.png" width="900">

#### Jenkins freestyle job configuration
<img src="Assignment-TW1.3Docker-Jenkins/Screenshot/jenkins%201.png" width="900">

#### Jenkins build confirmation
<img src="Assignment-TW1.3Docker-Jenkins/Screenshot/jenkins2.png" width="900">

#### Main branch push after successful delivery
<img src="Assignment-TW1.3Docker-Jenkins/Screenshot/main%20push.png" width="900">

</details>

## Projects

### Project 1 - Dockerizing Jenkins Pipeline

**Objective**

Run Jenkins inside Docker and automate Maven-based CI using a pipeline-as-code approach.

**Features**

- Jenkins controller running in Docker
- Pipeline as code with Jenkinsfile
- Maven build automation
- Continuous integration flow

```mermaid
flowchart LR
	A[GitHub Repository] --> B[Jenkins in Docker]
	B --> C[Maven Build]
	C --> D[Pipeline Result]
```

<details>
<summary><b>📸 Execution Screenshots (Click to Expand)</b></summary>

#### Jenkins pipeline started in Docker
<img src="Project-1-Dockerizing-Jenkins-Pipeline/screenshots/Screenshot%202026-07-27%20234707.png" width="900">

#### Pipeline stage progression
<img src="Project-1-Dockerizing-Jenkins-Pipeline/screenshots/Screenshot%202026-07-27%20235440.png" width="900">

#### Build execution and verification
<img src="Project-1-Dockerizing-Jenkins-Pipeline/screenshots/Screenshot%202026-07-27%20235453.png" width="900">

#### Final pipeline completion
<img src="Project-1-Dockerizing-Jenkins-Pipeline/screenshots/Screenshot%202026-07-27%20235459.png" width="900">

</details>

### Project 2 - React Docker Deployment

**Objective**

Containerize and deploy a React application with Docker, then validate the application in a browser.

**Features**

- React application containerization
- Docker image creation and run
- Local deployment verification
- UI validation in the browser

```mermaid
flowchart LR
	A[React Source Code] --> B[Docker Build]
	B --> C[Docker Container]
	C --> D[Local Browser Verification]
```

<details>
<summary><b>📸 Execution Screenshots (Click to Expand)</b></summary>

#### React app build and initial container check
<img src="Project-2-React-Docker/screenshot/Screenshot%202026-07-27%20235812.png" width="900">

#### Application running in the browser
<img src="Project-2-React-Docker/screenshot/Screenshot%202026-07-27%20235951.png" width="900">

#### Container status and deployment validation
<img src="Project-2-React-Docker/screenshot/Screenshot%202026-07-28%20000108.png" width="900">

#### Docker runtime verification
<img src="Project-2-React-Docker/screenshot/Screenshot%202026-07-28%20001535.png" width="900">

#### React UI successfully rendered
<img src="Project-2-React-Docker/screenshot/Screenshot%202026-07-28%20002116.png" width="900">

#### Final browser confirmation
<img src="Project-2-React-Docker/screenshot/Screenshot%202026-07-28%20002124.png" width="900">

#### Final application snapshot
<img src="Project-2-React-Docker/screenshot/Screenshot%202026-07-28%20002313.png" width="900">

</details>

### Project 4 - Distributed Jenkins Pipeline

**Objective**

Execute a distributed Jenkins pipeline using multiple Docker agents to separate build responsibilities.

**Features**

- Jenkins controller and multiple agents
- Distributed Maven build execution
- GitHub integration
- Build artifact generation

```mermaid
flowchart TD
	A[GitHub] --> B[Jenkins Controller]
	B --> C[Agent 1]
	B --> D[Agent 2]
	C --> E[Maven Build]
	D --> E
	E --> F[Generated JAR]
```

<details>
<summary><b>📸 Execution Screenshots (Click to Expand)</b></summary>

#### Jenkins controller and distributed pipeline start
<img src="Project-Distributed-Jenkins/screenshot/Screenshot%202026-07-28%20130722.png" width="900">

#### Agent allocation and pipeline execution
<img src="Project-Distributed-Jenkins/screenshot/Screenshot%202026-07-28%20131137.png" width="900">

#### Maven build on distributed agent
<img src="Project-Distributed-Jenkins/screenshot/Screenshot%202026-07-28%20131339.png" width="900">

#### Build stage progress
<img src="Project-Distributed-Jenkins/screenshot/Screenshot%202026-07-28%20132316.png" width="900">

#### Intermediate build verification
<img src="Project-Distributed-Jenkins/screenshot/Screenshot%202026-07-28%20132838.png" width="900">

#### Pipeline running on assigned agent
<img src="Project-Distributed-Jenkins/screenshot/Screenshot%202026-07-28%20133842.png" width="900">

#### Build log and stage status
<img src="Project-Distributed-Jenkins/screenshot/Screenshot%202026-07-28%20133902.png" width="900">

#### Agent handoff and pipeline progression
<img src="Project-Distributed-Jenkins/screenshot/Screenshot%202026-07-28%20133911.png" width="900">

#### Artifact packaging step
<img src="Project-Distributed-Jenkins/screenshot/Screenshot%202026-07-28%20134640.png" width="900">

#### Successful pipeline execution
<img src="Project-Distributed-Jenkins/screenshot/Screenshot%202026-07-28%20135502.png" width="900">

#### Post-build validation
<img src="Project-Distributed-Jenkins/screenshot/Screenshot%202026-07-28%20141540.png" width="900">

#### Build success summary
<img src="Project-Distributed-Jenkins/screenshot/Screenshot%202026-07-28%20141547.png" width="900">

#### Final distributed build completion
<img src="Project-Distributed-Jenkins/screenshot/Screenshot%202026-07-28%20141800.png" width="900">

</details>

## Technologies Used

- Git
- GitHub
- Jira
- Docker
- Jenkins
- Maven
- Java
- React
- Node.js

## Learning Outcomes

- Git branching, merging, and collaboration workflows
- Merge conflict resolution in real repository changes
- Jira project planning and issue tracking
- Docker image creation, container runtime, and validation
- Jenkins Freestyle job setup and CI orchestration
- Pipeline-as-code execution with Jenkinsfiles
- Distributed Jenkins builds with multiple agents
- End-to-end CI/CD workflow understanding

## Conclusion

This repository captures the practical outcomes of a DevOps laboratory workflow across Git, Jira, Docker, Jenkins, Maven, Java, and React. The projects demonstrate how source control, issue tracking, containerization, build automation, and distributed CI pipelines work together in a realistic delivery process.

## Author

<div align="center">

**Adarsh Jha**

</div>
