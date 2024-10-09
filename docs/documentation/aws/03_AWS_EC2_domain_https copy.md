# 3. Enable HTTPS for AWS EC2 Application
In this guide, you will learn how to secure your application hosted on AWS EC2 by enabling HTTPS with free SSL certificates from Let's Encrypt using **Certbot** and configuring **Nginx**.

### Prerequisites
- You should already have your domain configured and your application running over HTTP (as described in the previous guide).
- Nginx installed and configured for your domain.
- Certbot installed (for generating SSL certificates).

## 1. Install Certbot and Generate SSL Certificates
- First, ensure Certbot is installed. On Ubuntu, run:
```bash
sudo apt update
sudo apt install certbot python3-certbot-nginx
```
- After installation, use Certbot to automatically generate and configure the SSL certificates for your domain:
```bash
sudo certbot --nginx
```
- Certbot will automatically detect your Nginx configuration and list the domains configured. When prompted, choose the domain number that corresponds to the domain you want to secure.

- Certbot will handle the certificate generation and automatically update your Nginx configuration to use SSL.

## 2. Verify and Update Nginx Configuration
Certbot automatically modifies your Nginx configuration to enable HTTPS. However, it's good to verify or manually adjust the configuration if needed.

- Open your Nginx configuration file for your domain:
```bash
sudo nano /etc/nginx/sites-available/your-domain
```

- Ensure that the Nginx configuration has been updated to redirect HTTP traffic to HTTPS and use the SSL certificates. It should look something like this:Ensure that the Nginx configuration has been updated to redirect HTTP traffic to HTTPS and use the SSL certificates. It should look something like this:

```bash
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name yourdomain.com www.yourdomain.com;

    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    location / {
        proxy_pass http://localhost:<your-app-port>;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

- Save and close the file.

## 3. Restart Nginx
After generating the certificates and updating the configuration, restart Nginx to apply the changes:

```bash
sudo systemctl restart nginx
```

## 4. Test the Application Over HTTPS
Now that Nginx is serving your application over HTTPS:

- Open your web browser and navigate to:
```bash
https://yourdomain.com
```

- Ensure that your application is running and that there’s a padlock icon next to your URL in the browser, indicating the SSL certificate is active.

- To confirm that HTTP traffic is being properly redirected to HTTPS, try accessing the site using `http://yourdomain.com`. It should automatically redirect to the secure `https://` version.


## Set Up Automatic Certificate Renewal
Let’s Encrypt certificates expire every 90 days, but Certbot includes a built-in automatic renewal system. To ensure your certificates renew automatically, you can set up a cron job.

- Run the following command to test the automatic renewal process:

```bash
sudo certbot renew --dry-run
```

- Certbot installs a cron job to automatically renew certificates, so no further action should be needed.

---

## Summary of Commands

- Install Certbot:
```bash
sudo apt install certbot python3-certbot-nginx

```

- Generate and configure SSL certificates:
```bash
sudo certbot --nginx

```

- (Optional) Edit Nginx config:
```bash
sudo nano /etc/nginx/sites-available/your-domain
```

- Restart Nginx:
```bash
sudo systemctl restart nginx

```

- Test HTTPS:
```bash
https://yourdomain.com
```
