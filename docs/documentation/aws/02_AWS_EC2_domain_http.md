# Mapping an AWS EC2 Application to a Custom Domain over HTTP

## 1. Create Your Domain

To access your application using a custom domain instead of the Elastic IP, you’ll need to register a domain name.

- You can register a domain through AWS **Route 53** or any other domain registrar (e.g., GoDaddy, Namecheap).
- After registering the domain, you'll configure the **DNS settings** to point to your EC2 instance’s Elastic IP.

## 2. Register DNS A Record (IPv4) for Your Domain/Subdomain

Once you have your domain, you need to configure the DNS settings to associate your domain with the EC2 instance.

- In your domain registrar's control panel (or Route 53 if using AWS), create an **A record** that points to your EC2 Elastic IP address.

For example:


|  Record Name  |    Type     | Value/Route Traffic to | TTL     |
|---------------|-------------|------------------------|---------|
|www.apps.com   | A           | `<your-elastic-ip>`    | 300     |
|amaralapps.com | A           | `<your-elastic-ip>`    | 300     |

If you're using subdomains, set the `Name` field to the appropriate subdomain (e.g., `app.yourdomain.com`).

## 3. Configure Nginx for HTTP Access

Now that your domain is linked to your EC2 instance, you’ll need to configure **Nginx** to serve your application over HTTP.

1. **Install Nginx** (if not installed yet):

```bash
sudo apt update
sudo apt install nginx
```

2. **Configure Nginx** for your application:
- Create a configuration file in `/etc/nginx/sites-available/your-domain`:

```bash
sudo nano /etc/nginx/sites-available/your-domain
```

- Add the following configuration to proxy traffic to your Docker container:


```bash
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:<your-app-port>;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

3. **Enable the configuration** by creating a symbolic link from the `sites-available` directory to `sites-enabled`:
```bash
sudo ln -s /etc/nginx/sites-available/your-domain /etc/nginx/sites-enabled/
```

4. **Test the Nginx configuration** to make sure there are no errors:
```bash
sudo nginx -t
```

5. **Restart Nginx** to apply the new configuration:
```bash
sudo systemctl restart nginx
```

At this point, Nginx should be serving your application via your domain over HTTP.

## 4. Access Your Application

Once Nginx is configured and running, visit your application in the browser using your custom domain:

```bash
http://yourdomain.com
```

--- 

## Summary of Commands

- Install Nginx:

```bash
sudo apt update && sudo apt install nginx
```

- Create Nginx config:

```bash
sudo nano /etc/nginx/sites-available/your-domain
```

- Add proxy settings in the config file:

```bash
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    location / {
        proxy_pass http://localhost:<your-app-port>;
    }
}
```

- Enable the config:

```bash
sudo ln -s /etc/nginx/sites-available/your-domain /etc/nginx/sites-enabled/
```

- Test Nginx:

```bash
sudo nginx -t
```

- Restart Nginx:

```bash
sudo systemctl restart nginx
```

- Access your app:

```bash
http://yourdomain.com
```