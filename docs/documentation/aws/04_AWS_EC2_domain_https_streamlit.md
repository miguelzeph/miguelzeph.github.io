# 4. Enable HTTPS for AWS EC2 Application with Streamlit
This guide explains how to set up HTTPS for a Streamlit application running in Docker using SSL certificates.

## 1. Create the Streamlit Configuration Folder
First, create the configuration directory for Streamlit, where you will save the `config.toml` file.


```bash
mkdir -p ~/.streamlit/
nano ~/.streamlit/config.toml
```


## 2. Configure the `config.toml` File
Edit the config.toml file to include HTTPS settings, specifying the paths to your SSL certificates. Add the following content to the file:
```bash
[server]
enableCORS = false
enableXsrfProtection = false
port = 8502
sslCertFile = "/app/fullchain.pem"
sslKeyFile = "/app/privkey.pem"
```


## 3. Obtain SSL Certificates
If you don’t have SSL certificates yet, obtain them using Certbot or another certification service. This example assumes the certificates are located at `/etc/letsencrypt/live/covid.amaralapps.com/`.



## 4. Run the Docker Container
With the certificates in place, start the Docker container for Streamlit, mounting the necessary files (certificates and config.toml):

```bash

docker run -d --name covid-dashboard \
  -p 8502:8502 \
  -v /etc/letsencrypt/live/covid.amaralapps.com/fullchain.pem:/app/fullchain.pem \
  -v /etc/letsencrypt/live/covid.amaralapps.com/privkey.pem:/app/privkey.pem \
  -v ~/.streamlit/config.toml:/root/.streamlit/config.toml \
  miguelzeph/covid-dashboard:latest
```