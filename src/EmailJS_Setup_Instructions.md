# EmailJS Setup Instructions for Awshar AI

To receive emails from your "Join our beta program" form, you need to set up EmailJS. Follow these steps:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (Free plan allows 200 emails/month)
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended):
   - **Gmail**: Easy setup with your Google account
   - **Outlook**: If you use Microsoft email
   - **Custom SMTP**: For other email providers
4. For Gmail:
   - Click "Connect Account"
   - Authorize EmailJS to access your Gmail
   - Use `hello@awshar.in` as the sender email
5. Copy the **Service ID** (you'll need this later)

## Step 3: Create Email Templates

### Template 1: Beta Waitlist Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject**: {{subject}}

**Email Body (HTML)**:
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
  <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    <h2 style="color: #dc2626; margin-bottom: 20px; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
      🎯 New Beta Waitlist Signup - Awshar AI
    </h2>
    
    <div style="margin-bottom: 20px;">
      <h3 style="color: #374151; margin-bottom: 15px;">Contact Information:</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 12px; background-color: #f3f4f6; font-weight: bold; width: 120px;">Name:</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb;">{{from_name}}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; background-color: #f3f4f6; font-weight: bold;">Email:</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb;">
            <a href="mailto:{{from_email}}" style="color: #dc2626; text-decoration: none;">{{from_email}}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; background-color: #f3f4f6; font-weight: bold;">Company:</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb;">{{company}}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; background-color: #f3f4f6; font-weight: bold;">Interest:</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb;">{{interest_level}}</td>
        </tr>
      </table>
    </div>

    <div style="margin-bottom: 20px;">
      <h3 style="color: #374151; margin-bottom: 10px;">Message:</h3>
      <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; border-left: 4px solid #dc2626;">
        {{message}}
      </div>
    </div>

    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
      <p>📅 <strong>Submitted:</strong> {{submitted_date}}</p>
      <p>🌐 <strong>Source:</strong> Awshar AI Website - Beta Waitlist Form</p>
      <p>📍 <strong>Location:</strong> India (IST)</p>
    </div>

    <div style="margin-top: 20px; padding: 15px; background-color: #dcfce7; border-radius: 6px; border-left: 4px solid #16a34a;">
      <p style="margin: 0; color: #166534; font-size: 14px;">
        <strong>Next Steps:</strong> Follow up within 24 hours with onboarding information and beta access details.
      </p>
    </div>
  </div>
</div>
```

4. Set **To Email**: `hello@awshar.in`
5. Save and copy the **Template ID**

### Template 2: Newsletter Template

1. Create another template for newsletter subscriptions
2. Use this content:

**Subject**: {{subject}}

**Email Body (HTML)**:
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
  <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    <h2 style="color: #dc2626; margin-bottom: 20px; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
      📧 New Newsletter Subscription - Awshar AI
    </h2>
    
    <div style="margin-bottom: 20px;">
      <h3 style="color: #374151; margin-bottom: 15px;">Subscription Details:</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 12px; background-color: #f3f4f6; font-weight: bold; width: 120px;">Email:</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb;">
            <a href="mailto:{{subscriber_email}}" style="color: #dc2626; text-decoration: none;">{{subscriber_email}}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; background-color: #f3f4f6; font-weight: bold;">Type:</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb;">Newsletter Subscription</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; background-color: #f3f4f6; font-weight: bold;">Source:</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb;">Footer "Stay Updated" form</td>
        </tr>
      </table>
    </div>

    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
      <p>📅 <strong>Subscribed:</strong> {{subscribed_date}}</p>
      <p>🌐 <strong>Source:</strong> Awshar AI Website - Newsletter Form</p>
    </div>

    <div style="margin-top: 20px; padding: 15px; background-color: #dbeafe; border-radius: 6px; border-left: 4px solid #3b82f6;">
      <p style="margin: 0; color: #1e40af; font-size: 14px;">
        <strong>Next Steps:</strong> Add this email to the newsletter list and send a welcome email.
      </p>
    </div>
  </div>
</div>
```

3. Set **To Email**: `hello@awshar.in`
4. Save and copy the **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" in your EmailJS dashboard
2. Copy your **Public Key** (starts with "user_" or similar)

## Step 5: Update Your Code

Edit `/components/services/emailService.ts` and replace these values:

```typescript
const EMAILJS_SERVICE_ID = 'your_actual_service_id_here';
const EMAILJS_TEMPLATE_ID_BETA = 'your_actual_beta_template_id_here';
const EMAILJS_TEMPLATE_ID_NEWSLETTER = 'your_actual_newsletter_template_id_here';
const EMAILJS_PUBLIC_KEY = 'your_actual_public_key_here';
```

## Step 6: Test the Forms

1. Save your changes and restart your dev server
2. Fill out the "Join our beta program" form on your website
3. Check your `hello@awshar.in` inbox for the email
4. Test the newsletter subscription in the footer

## Alternative Email Services

If you prefer not to use EmailJS, here are other options:

### Option 1: Formspree (Easy)
1. Go to [formspree.io](https://formspree.io)
2. Create account and get form endpoint
3. Update forms to POST directly to Formspree

### Option 2: Netlify Forms (If using Netlify)
1. Add `data-netlify="true"` to your forms
2. Forms will automatically work on Netlify

### Option 3: Backend API
1. Create a backend service (Node.js, Python, etc.)
2. Use services like SendGrid, Mailgun, or AWS SES
3. Update the fetch calls in emailService.ts

## Troubleshooting

**Emails not arriving?**
- Check EmailJS dashboard for sending status
- Verify all IDs are correct in emailService.ts
- Check spam folder
- Ensure hello@awshar.in exists and can receive emails

**Getting "service not configured" error?**
- Make sure you've replaced all placeholder values in emailService.ts
- Clear browser cache and restart dev server

**Need help?**
- EmailJS documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Free plan limitations: 200 emails/month
- For production use, consider upgrading to a paid plan