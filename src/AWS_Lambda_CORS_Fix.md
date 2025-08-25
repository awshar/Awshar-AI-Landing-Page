# AWS Lambda CORS Configuration Fix

## Problem
The contact form is getting "Failed to fetch" errors because your AWS Lambda function is not configured to handle CORS (Cross-Origin Resource Sharing) requests from your website.

## Solution
Your Lambda function needs to return proper CORS headers and handle OPTIONS preflight requests.

---

## Step 1: Update Your Lambda Function Code

Your Lambda function should look like this:

```python
import json
import boto3
from datetime import datetime

def lambda_handler(event, context):
    # CORS headers for all responses
    cors_headers = {
        'Access-Control-Allow-Origin': '*',  # Or your specific domain
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Accept, Origin',
        'Access-Control-Max-Age': '86400'
    }
    
    # Handle OPTIONS preflight request
    if event['requestContext']['http']['method'] == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': cors_headers,
            'body': json.dumps({'message': 'CORS preflight successful'})
        }
    
    # Handle POST request
    if event['requestContext']['http']['method'] == 'POST':
        try:
            # Parse the incoming JSON data
            body = json.loads(event['body'])
            
            # Extract form data
            name = body.get('name', '')
            email = body.get('email', '')
            company = body.get('company', '')
            interest_level = body.get('interestLevel', '')
            message = body.get('message', '')
            source = body.get('source', '')
            timestamp = body.get('timestamp', '')
            
            # Log the submission (replace with your email/database logic)
            print(f"New beta signup: {name} ({email}) from {company}")
            print(f"Interest: {interest_level}")
            print(f"Message: {message}")
            
            # TODO: Send email notification to hello@awshar.in
            # TODO: Store in database
            # TODO: Add to mailing list
            
            # Return success response with CORS headers
            return {
                'statusCode': 200,
                'headers': cors_headers,
                'body': json.dumps({
                    'success': True,
                    'message': 'Thank you! We have received your beta program request.'
                })
            }
            
        except Exception as e:
            print(f"Error processing request: {str(e)}")
            return {
                'statusCode': 500,
                'headers': cors_headers,
                'body': json.dumps({
                    'success': False,
                    'error': 'Internal server error'
                })
            }
    
    # Handle unsupported methods
    return {
        'statusCode': 405,
        'headers': cors_headers,
        'body': json.dumps({'error': 'Method not allowed'})
    }
```

---

## Step 2: For Node.js Lambda (Alternative)

If you're using Node.js instead of Python:

```javascript
exports.handler = async (event) => {
    // CORS headers for all responses
    const corsHeaders = {
        'Access-Control-Allow-Origin': '*', // Or your specific domain
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Accept, Origin',
        'Access-Control-Max-Age': '86400'
    };
    
    // Handle OPTIONS preflight request
    if (event.requestContext.http.method === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: corsHeaders,
            body: JSON.stringify({ message: 'CORS preflight successful' })
        };
    }
    
    // Handle POST request
    if (event.requestContext.http.method === 'POST') {
        try {
            const body = JSON.parse(event.body);
            
            // Extract form data
            const { name, email, company, interestLevel, message, source, timestamp } = body;
            
            // Log the submission
            console.log(`New beta signup: ${name} (${email}) from ${company}`);
            console.log(`Interest: ${interestLevel}`);
            console.log(`Message: ${message}`);
            
            // TODO: Send email notification to hello@awshar.in
            // TODO: Store in database
            // TODO: Add to mailing list
            
            return {
                statusCode: 200,
                headers: corsHeaders,
                body: JSON.stringify({
                    success: true,
                    message: 'Thank you! We have received your beta program request.'
                })
            };
            
        } catch (error) {
            console.error('Error processing request:', error);
            return {
                statusCode: 500,
                headers: corsHeaders,
                body: JSON.stringify({
                    success: false,
                    error: 'Internal server error'
                })
            };
        }
    }
    
    // Handle unsupported methods
    return {
        statusCode: 405,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Method not allowed' })
    };
};
```

---

## Step 3: Test Your Lambda Function

1. Deploy your updated Lambda function
2. Test with this curl command:

```bash
# Test OPTIONS request
curl -X OPTIONS \
  https://3d3m62k7cumzquvql3bzo53nr40pjoob.lambda-url.ap-south-1.on.aws/ \
  -H "Origin: http://localhost:3000" \
  -v

# Test POST request
curl -X POST \
  https://3d3m62k7cumzquvql3bzo53nr40pjoob.lambda-url.ap-south-1.on.aws/ \
  -H "Content-Type: application/json" \
  -H "Origin: http://localhost:3000" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "company": "Test Company",
    "interestLevel": "Beta Program",
    "message": "Test message",
    "source": "website_beta_form",
    "timestamp": "2025-01-15T10:30:00.000Z"
  }'
```

---

## Step 4: Verify CORS Headers

The successful response should include these headers:
```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: POST, OPTIONS
Access-Control-Allow-Headers: Content-Type, Accept, Origin
```

---

## Step 5: Security Considerations (Production)

For production, consider:

1. **Specific Origin**: Replace `*` with your actual domain:
   ```javascript
   'Access-Control-Allow-Origin': 'https://yourdomain.com'
   ```

2. **Rate Limiting**: Add rate limiting to prevent spam

3. **Input Validation**: Validate all incoming data

4. **Email Notifications**: Set up actual email sending (SES, SNS, etc.)

---

## Step 6: Add Email Notifications

To send emails to hello@awshar.in when forms are submitted:

```python
import boto3

# Using AWS SES
def send_notification_email(form_data):
    ses = boto3.client('ses', region_name='ap-south-1')  # Mumbai region
    
    try:
        response = ses.send_email(
            Source='noreply@awshar.in',  # Must be verified in SES
            Destination={
                'ToAddresses': ['hello@awshar.in']
            },
            Message={
                'Subject': {
                    'Data': f'New Beta Signup: {form_data["name"]}'
                },
                'Body': {
                    'Html': {
                        'Data': f'''
                        <h2>New Beta Program Signup</h2>
                        <p><strong>Name:</strong> {form_data["name"]}</p>
                        <p><strong>Email:</strong> {form_data["email"]}</p>
                        <p><strong>Company:</strong> {form_data["company"]}</p>
                        <p><strong>Interest:</strong> {form_data["interestLevel"]}</p>
                        <p><strong>Message:</strong> {form_data["message"]}</p>
                        <p><strong>Submitted:</strong> {form_data["timestamp"]}</p>
                        '''
                    }
                }
            }
        )
        print(f"Email sent successfully: {response['MessageId']}")
    except Exception as e:
        print(f"Failed to send email: {str(e)}")
```

---

## Quick Test

After implementing the fix, your form should work without CORS errors. The browser's developer console will show successful requests instead of "Failed to fetch" errors.