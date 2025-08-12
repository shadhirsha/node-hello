# Node Hello World

Simple node.js app that servers "hello world"

Great for testing simple deployments to the cloud

#AWS CI/ID Deployment

## EC2 Terminal configuration

1. In AWS create EC2 instance
2. Connect using SSH client
3. Setup git git Actions -> Runner Script on SSH Client terminal
4. Use Linux x64
5. on Run ./config.sh -> enter Runner group name = default, then runner name, also label same as name better, then \_work just press enter
6. finally then run ./run.sh
7. check the runner status (idle)

## Docker Image Setup

1. Setup Docker Username, password in Github -> secrets and variable -> Actions
2. create .yml file in .github/workflow/ write the code same as in current directory
3. in .yml script should replace below things
4. shadhirshaz/node-hello -> [dockerhub-repo-name]
5. 3000 -> [your-port]
6. node-hello-container -> [your-branch]-container
7. If Error msg Shows "permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get "http://%2Fvar%2Frun%2Fdocker.sock/v1.47/containers/json": dial unix /var/run/docker.sock: connect: permission denied" then go
8. run sudo su
9. chmod 777 /var/run/docker.sock
10. retry failed job
