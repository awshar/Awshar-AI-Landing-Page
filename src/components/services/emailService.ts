// DEPRECATED: Email service for handling form submissions
// This file is kept for reference only
// 
// ✅ NOW USING: AWS Lambda Backend
// Endpoint: https://3d3m62k7cumzquvql3bzo53nr40pjoob.lambda-url.ap-south-1.on.aws/
// 
// Form submissions are now handled directly in ContactSection.tsx
// via POST requests to the AWS Lambda function URL

interface FormData {
  name: string;
  email: string;
  company?: string;
  planInterest?: string;
  message?: string;
}

interface EmailResponse {
  success: boolean;
  message?: string;
  error?: string;
}

// DEPRECATED: EmailJS configuration (no longer used)
// Now using AWS Lambda backend instead
const EMAILJS_SERVICE_ID = 'DEPRECATED_USE_AWS_BACKEND';
const EMAILJS_TEMPLATE_ID_BETA = 'DEPRECATED_USE_AWS_BACKEND';
const EMAILJS_PUBLIC_KEY = 'DEPRECATED_USE_AWS_BACKEND';

// Production-ready EmailJS implementation
export const sendBetaWaitlistEmail = async (formData: FormData): Promise<EmailResponse> => {
  try {
    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim()) {
      throw new Error("Name and email are required");
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      throw new Error("Please enter a valid email address");
    }

    // Import EmailJS dynamically
    const emailjs = await import('@emailjs/browser');

    // Prepare template parameters for EmailJS
    const templateParams = {
      to_email: "hello@awshar.in",
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company || 'Not provided',
      interest_level: formData.planInterest || 'Not specified',
      message: formData.message || 'No message provided',
      subject: `🎯 New Beta Waitlist Signup - ${formData.name}`,
      submitted_date: new Date().toLocaleString('en-IN', { 
        timeZone: 'Asia/Kolkata',
        dateStyle: 'full',
        timeStyle: 'medium'
      })
    };

    console.log("Sending email via EmailJS...", templateParams);

    // Check if EmailJS is properly configured
    if (EMAILJS_SERVICE_ID === 'your_service_id_here' || 
        EMAILJS_TEMPLATE_ID_BETA === 'your_template_id_here' || 
        EMAILJS_PUBLIC_KEY === 'your_public_key_here') {
      
      // Development mode - log email content
      console.log("📧 EmailJS not configured yet. Email would be sent to hello@awshar.in:");
      console.log("Subject:", templateParams.subject);
      console.log("Template Params:", templateParams);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      return {
        success: true,
        message: "Form submitted successfully (development mode)"
      };
    }

    // Production mode - send actual email via EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_BETA,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log("EmailJS response:", response);

    if (response.status === 200) {
      return {
        success: true,
        message: "Thank you! We'll get back to you soon."
      };
    } else {
      throw new Error("Failed to send email");
    }

  } catch (error) {
    console.error("Email service error:", error);
    
    // Provide user-friendly error messages
    if (error instanceof Error) {
      if (error.message.includes('network') || error.message.includes('fetch')) {
        return {
          success: false,
          error: "Network error. Please check your connection and try again."
        };
      } else if (error.message.includes('service') || error.message.includes('template')) {
        return {
          success: false,
          error: "Email service temporarily unavailable. Please contact us directly at hello@awshar.in"
        };
      } else {
        return {
          success: false,
          error: error.message
        };
      }
    }
    
    return {
      success: false,
      error: "Unable to send email. Please contact us directly at hello@awshar.in"
    };
  }
};

// Helper function to validate Indian phone numbers (optional)
export const validateIndianPhone = (phone: string): boolean => {
  const phoneRegex = /^(\+91|91)?[6-9]\d{9}$/;
  return phoneRegex.test(phone.replace(/\s+/g, ''));
};

// Newsletter subscription email service
export const sendNewsletterSubscription = async (email: string): Promise<EmailResponse> => {
  try {
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Please enter a valid email address");
    }

    // Prepare email content
    const emailContent = {
      to: "hello@awshar.in",
      subject: `📧 New Newsletter Subscription - ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
          <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #dc2626; margin-bottom: 20px; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
              📧 New Newsletter Subscription
            </h2>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #374151; margin-bottom: 15px;">Subscription Details:</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 12px; background-color: #f3f4f6; font-weight: bold; width: 120px;">Email:</td>
                  <td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb;">
                    <a href="mailto:${email}" style="color: #dc2626; text-decoration: none;">${email}</a>
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
              <p>📅 <strong>Subscribed:</strong> ${new Date().toLocaleString('en-IN', { 
                timeZone: 'Asia/Kolkata',
                dateStyle: 'full',
                timeStyle: 'medium'
              })}</p>
              <p>🌐 <strong>Source:</strong> Awshar AI Website - Newsletter Form</p>
              <p>📍 <strong>Location:</strong> India (IST)</p>
            </div>

            <div style="margin-top: 20px; padding: 15px; background-color: #dbeafe; border-radius: 6px; border-left: 4px solid #3b82f6;">
              <p style="margin: 0; color: #1e40af; font-size: 14px;">
                <strong>Next Steps:</strong> Add this email to the newsletter list and send a welcome email with upcoming content previews.
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
New Newsletter Subscription

Email: ${email}
Type: Newsletter Subscription
Source: Footer "Stay Updated" form

---
Subscribed: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
Source: Awshar AI Website
      `
    };

    // Simulate network delay for demo
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Log for development (remove in production)
    console.log("📧 Newsletter subscription email would be sent to hello@awshar.in:");
    console.log(emailContent);

    // Simulate successful response
    return {
      success: true,
      message: "Newsletter subscription email sent successfully"
    };

  } catch (error) {
    console.error("Newsletter email service error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send newsletter subscription"
    };
  }
};

// Helper function to detect business email (optional)
export const isBusinessEmail = (email: string): boolean => {
  const commonPersonalDomains = [
    'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 
    'rediffmail.com', 'yahoo.in', 'gmail.co.in'
  ];
  
  const domain = email.toLowerCase().split('@')[1];
  return !commonPersonalDomains.includes(domain);
};