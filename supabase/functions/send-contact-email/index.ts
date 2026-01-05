import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message }: ContactEmailRequest = await req.json();

    console.log("Received contact form submission:", { name, email, subject });

    // Validate inputs
    if (!name || !email || !subject || !message) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send notification email to you (the portfolio owner)
    const notificationResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["irshadm791@gmail.com"],
        subject: `New Contact: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">New Contact Form Submission</h1>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0 0 10px 0;"><strong>From:</strong> ${name}</p>
              <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 0;"><strong>Subject:</strong> ${subject}</p>
            </div>
            
            <div style="background: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h3 style="color: #334155; margin-top: 0;">Message:</h3>
              <p style="color: #475569; white-space: pre-wrap;">${message}</p>
            </div>
            
            <p style="color: #64748b; font-size: 12px; margin-top: 20px;">
              This email was sent from your portfolio contact form.
            </p>
          </div>
        `,
      }),
    });

    const notificationData = await notificationResponse.json();
    console.log("Notification email response:", notificationData);

    if (!notificationResponse.ok) {
      console.error("Failed to send notification email:", notificationData);
      throw new Error(`Failed to send notification email: ${notificationData.message || JSON.stringify(notificationData)}`);
    }

    console.log("Notification email sent successfully");

    // Send confirmation email to the sender
    const confirmationResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Irshad Ahmed <onboarding@resend.dev>",
        to: [email],
        subject: "Thank you for contacting me!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #1e40af;">Thank You, ${name}!</h1>
            
            <p style="color: #334155; font-size: 16px; line-height: 1.6;">
              I've received your message and will get back to you within 24 hours.
            </p>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #334155; margin-top: 0;">Your Message Summary:</h3>
              <p style="margin: 0 0 10px 0;"><strong>Subject:</strong> ${subject}</p>
              <p style="color: #475569; white-space: pre-wrap; margin: 0;">${message}</p>
            </div>
            
            <p style="color: #334155; font-size: 16px; line-height: 1.6;">
              Looking forward to discussing your project!
            </p>
            
            <p style="color: #334155;">
              Best regards,<br>
              <strong>Irshad Ahmed</strong><br>
              Full-Stack Developer
            </p>
            
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
            
            <p style="color: #64748b; font-size: 12px;">
              This is an automated response. Please do not reply to this email.
            </p>
          </div>
        `,
      }),
    });

    if (!confirmationResponse.ok) {
      const confirmationData = await confirmationResponse.json();
      console.error("Failed to send confirmation email, but notification was sent:", confirmationData);
    } else {
      console.log("Confirmation email sent successfully");
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails sent successfully" 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Error in send-contact-email function:", errorMessage);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
