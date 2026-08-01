
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      phone,
      course,
      message,
    } = body;

    // Validate required fields
    if (!name || !phone || !course) {
      return Response.json(
        {
          error:
            "Name, phone number, and course are required.",
        },
        {
          status: 400,
        }
      );
    }

    // Send email
    const { data, error } = await resend.emails.send({
      from: "Ecowish Craft <onboarding@resend.dev>",

      // Replace with your actual receiving email
      to: ["digitalrishavofficial@gmail.com"],

      subject: `New Admission Enquiry - ${course}`,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">

          <h1 style="color: #2E2A24;">
            New Admission Enquiry
          </h1>

          <p>
            You have received a new admission enquiry
            through the Ecowish Craft website.
          </p>

          <hr />

          <h3>Student Information</h3>

          <p>
            <strong>Name:</strong>
            ${name}
          </p>

          <p>
            <strong>Phone:</strong>
            ${phone}
          </p>

          <p>
            <strong>Course:</strong>
            ${course}
          </p>

          <h3>Message</h3>

          <p>
            ${message || "No message provided."}
          </p>

          <hr />

          <p style="color: #777;">
            This enquiry was submitted from the Ecowish Craft
            training website.
          </p>

        </div>
      `,
    });

    if (error) {
      console.error(
        "Resend email error:",
        error
      );

      return Response.json(
        {
          error:
            "We could not send your enquiry. Please try again.",
        },
        {
          status: 500,
        }
      );
    }

    return Response.json(
      {
        success: true,
        message:
          "Admission enquiry sent successfully.",
        data,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "Admission API error:",
      error
    );

    return Response.json(
      {
        error:
          "Something went wrong. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}

