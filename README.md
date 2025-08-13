# Node Hello World

Simple node.js app that servers "hello world"

Great for testing simple deployments to the cloud

#AWS CI/ID Deployment

## Launch EC2 Instances with pem RSA key

## EC2 Terminal Docker installation
connect EC2 with SSH Client and install docker
```sh
   sudo apt update
```
```sh
   sudo apt install -y docker.io
```
```sh
   sudo systemctl start docker
```

```sh
   docker --version
```

Version Output
```sh
   CAUSE ERROR Docker version 28.3.3, build 980b856 
   WORKS FINE Docker version 27.5.1, build 27.5.1-0ubuntu3~24.04.2
```

## Setup Github Action Secrets and variables
1. DOCKER_TOKEN -> DockerHub -> Account Settings -> settings -> personal auth token
2. DOCKER_USERNAME -> Account Username
3. EC2_SSH_KEY -> Get from the file which create by using key pair pem RSA key when create EC2 instance
4. SSH_CLIENT_PUBLIC_IP -> On EC2 instance connect area (Eg: Ubuntu@<!PUBLIC_IP!>)

## CICD pipeline setup
1. create .yml file in .github/workflow/ write the code same as in current directory
2. in .yml script should replace below things
3. shadhirshaz/node-hello -> [dockerhub-repo-name]
4. 3000 -> [your-port]
5. node-hello-container -> [your-branch]-container
6. deploy.yml file we can add multiple ports to run docker image [-p 80:3000]

## Error log on DEPLOY
1. "permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get "http://%2Fvar%2Frun%2Fdocker.sock/v1.47/containers/json": dial unix /var/run/docker.sock: connect: permission denied"
```sh
   run sudo su
   chmod 666 /var/run/docker.sock
```
3. "permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Post "http://%2Fvar%2Frun%2Fdocker.sock/v1.51/images/create?fromImage=docker.io%2Fshadhirshaz%2Fnode-hello&tag=latest": dial unix /var/run/docker.sock: connect: permission denied"
```sh
   run sudo su
   chmod 777 /var/run/docker.sock
```

## SSL Certificate connect prograss with custom domain NGINX
### FREE SSL - Install Nginx web server

```sh
sudo apt install nginx
```

```sh
sudo nano /etc/nginx/sites-available/default
```

#### Add the following to the location part of the server block

```sh
server {
   server_name yourdomain.com www.yourdomain.com;

   location / {
      proxy_pass http://localhost:5000; #whatever port your app runs on
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection 'upgrade';
      proxy_set_header Host $host;
      proxy_cache_bypass $http_upgrade;
    }
}
```

##### Check NGINX config
```sh
sudo nginx -t
```

##### Restart NGINX
```sh
sudo service nginx restart
```

#### You should now be able to visit your IP with no port (port 80) and see your app. Now let's add a domain

### Installing Free SSL

#### Installing Certbot

```sh
sudo snap install core; sudo snap refresh core
```

```sh
sudo apt remove certbot
```

```sh
sudo snap install --classic certbot
```

```sh
sudo ln -s /snap/bin/certbot /usr/bin/certbot
```

#### Confirming Nginx’s Configuration
```sh
sudo nano /etc/nginx/sites-available/default
```

```sh
sudo systemctl reload nginx
```

#### Obtaining an FREE SSL Certificate
```sh
sudo certbot --nginx -d app.example.com 
```

Output:
```
IMPORTANT NOTES:
Successfully received certificate.
Certificate is saved at: /etc/letsencrypt/live/your_domain/fullchain.pem
Key is saved at: /etc/letsencrypt/live/your_domain/privkey.pem
This certificate expires on 2022-06-01.
These files will be updated when the certificate renews.
Certbot has set up a scheduled task to automatically renew this certificate in the background.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
If you like Certbot, please consider supporting our work by:
* Donating to ISRG / Let's Encrypt: https://letsencrypt.org/donate
* Donating to EFF: https://eff.org/donate-le
```

#### Verifying Certbot Auto-Renewal
```sh
sudo systemctl status snap.certbot.renew.service
```
Output:
```
○ snap.certbot.renew.service - Service for snap application certbot.renew
     Loaded: loaded (/etc/systemd/system/snap.certbot.renew.service; static)
     Active: inactive (dead)
TriggeredBy: ● snap.certbot.renew.timer
```

To test the renewal process, you can do a dry run with certbot:

```sh
sudo certbot renew --dry-run
```
