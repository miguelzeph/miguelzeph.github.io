
# 5. Setting Up AWS WorkMail and SES for Email Sending

This guide will walk you through the steps to set up an AWS WorkMail email account for your custom domain (e.g., `amaralapps.com`) and configure AWS SES (Simple Email Service) to send emails through Python using the `boto3` library.

## Prerequisites

- Access to the AWS Management Console
- An existing custom domain (e.g., `amaralapps.com`)

## Step 1: Setting Up AWS WorkMail with Your Domain

- **Log in to the AWS Management Console** and go to **WorkMail**.
- Choose **Get Started** or **Create Organization** if it’s your first time.
- **Add your custom domain**:
    - Go to **Domains** in the WorkMail console.
    - Click **Add Domain** and enter your custom domain (e.g., `amaral.com`).
    - Follow the instructions to verify your domain through DNS by adding the provided TXT record in your domain registrar’s DNS settings.
- **Create an Email Account**:
    - Navigate to the **Organization** tab and select **Create User**.
    - Enter the email address you want to create (e.g., `contact@amaralapps.com`).
- Accessing the workmail:
    - Visite the page: **https://YOUR-WORKMAIL-DOMAIN-NAME.awsapps.com**/`mail` (P.S. Never forget the `/mail`)

## Step 2: Setting Up IAM for AWS SES Access

To use AWS SES with Python's `boto3`, you need to create an IAM user with SES permissions:

1. Go to the **IAM Console** in AWS and choose **Users**.
2. Click **Add user**, name your user (e.g., `ses-user`), and select **Programmatic access**.
3. Attach the **AmazonSESFullAccess** policy to grant permissions.
4. Finish the setup and save the **Access Key ID** and **Secret Access Key**. You will need these keys to authenticate from Python. `P.S. Save the Secret Access Key because it will appear just once`

## Step 3: Configuring AWS SES

### 1. Register Your Email in AWS SES:

1. Go to the **SES Console**.
2. Choose **Email Addresses** and then **Verify a New Email Address**.
3. Enter the email you created in WorkMail (e.g., `contact@amaralapps.com`) and verify it.
4. After verifying, you may now use this email to send and receive emails.

### 2. Generate AWS SES Credentials:

- Your **Access Key ID** and **Secret Access Key** from the IAM setup will be used in the code to authenticate SES requests.

## Step 4: Sending an Email with Python's `boto3` Library

The following example code shows how to send an email using AWS SES with `boto3`:

```python
import boto3
from botocore.exceptions import ClientError
from config import config

# Configuring AWS SES
AWS_REGION = config.get("email.aws_region")
SENDER_EMAIL = config.get("email.sender_email")
RECIPIENT_EMAIL = config.get("email.recipient_email")
AWS_ACCESS_KEY_ID = config.get("email.aws_access_key_id")
AWS_SECRET_ACCESS_KEY = config.get("email.aws_secret_access_key")

def send_email_to_recipient(name, email, subject, message):
    ses_client = boto3.client(
        'ses',
        region_name=AWS_REGION,
        aws_access_key_id=AWS_ACCESS_KEY_ID,
        aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
    )
    
    body_text = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"
    body_html = f"""<html>
    <head></head>
    <body>
    <h1>Contacting</h1>
    <p><strong>Name:</strong> {name}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Message:</strong></p>
    <p>{message}</p>
    </body>
    </html>
    """
    
    try:
        response = ses_client.send_email(
            Destination={'ToAddresses': [RECIPIENT_EMAIL]},
            Message={
                'Body': {
                    'Html': {'Charset': 'UTF-8', 'Data': body_html},
                    'Text': {'Charset': 'UTF-8', 'Data': body_text},
                },
                'Subject': {'Charset': 'UTF-8', 'Data': subject},
            },
            Source=SENDER_EMAIL,
        )
        return response['MessageId']
    except ClientError as e:
        return str(e.response['Error']['Message'])
```

### Explanation of the Code

- **Configuration**: The `config` module holds AWS credentials and configuration settings like `AWS_REGION`, `SENDER_EMAIL`, etc.
- **SES Client**: Created using `boto3.client` with SES-specific parameters and AWS credentials.
- **Email Content**: Configured as plain text and HTML. Customize `body_text` and `body_html` as needed.
- **Send Email**: Using `send_email` from the SES client, which includes `Destination`, `Message`, and `Source` parameters.

By following these steps, you should be able to create a WorkMail email, register it with AWS SES, and send emails programmatically using Python.