# Node Hello World

Simple node.js app that servers "hello world"

Great for testing simple deployments to the cloud

#AWS CI/ID Deployment

## EC2 Terminal Github Action Runner

1. In AWS create EC2 instance
2. Connect using SSH client
3. Setup git git Actions -> Runner Script on SSH Client terminal
4. Use Linux x64
5. on Run ./config.sh -> enter Runner group name = default, then runner name, also label same as name better, then \_work just press enter
6. finally then run ./run.sh
7. check the runner status (idle)
8. Setup Docker Username, token in Github -> secrets and variable -> Actions

## EC2 Terminal Docker installation

1. run "sudo apt update"
2. run "sudo apt install -y docker.io"
3. run "sudo systemctl start docker"
4. run "docker --version" -> version should look like "Docker version 27.5.1, build 27.5.1-0ubuntu3~24.04.2" NOT "Docker version 28.3.3, build 980b856"

## CICD pipeline setup

1. create .yml file in .github/workflow/ write the code same as in current directory
2. in .yml script should replace below things
3. shadhirshaz/node-hello -> [dockerhub-repo-name]
4. 3000 -> [your-port]
5. node-hello-container -> [your-branch]-container
6. deploy.yml file we can add multiple ports to run docker image [-p 80:3000]

## Error log on DEPLOY

1. "permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get "http://%2Fvar%2Frun%2Fdocker.sock/v1.47/containers/json": dial unix /var/run/docker.sock: connect: permission denied"
   i. run sudo su
   ii. chmod 666 /var/run/docker.sock
   iii. retry failed job
2. "permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Post "http://%2Fvar%2Frun%2Fdocker.sock/v1.51/images/create?fromImage=docker.io%2Fshadhirshaz%2Fnode-hello&tag=latest": dial unix /var/run/docker.sock: connect: permission denied"
   i. run sudo su
   ii. chmod 777 /var/run/docker.sock

## SSL Certificate connect prograss with custom domain

1. create elastic ip and associate with current instance
2. add DNS records in cloudflare(DNS managenemt), A Record, Proxy status should be "DNS Only"
