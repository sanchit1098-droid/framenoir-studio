import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, businessName, email, propertyLocation, projectType, message } = body;

    // Server-side validation
    if (!fullName || !businessName || !email || !propertyLocation || !projectType || !message) {
      return NextResponse.json(
        { error: "All required fields must be provided." },
        { status: 400 }
      );
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address format." },
        { status: 400 }
      );
    }

    const formEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    if (formEndpoint && formEndpoint.startsWith("http")) {
      const formspreeRes = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!formspreeRes.ok) {
        const errorData = await formspreeRes.json().catch(() => ({}));
        return NextResponse.json(
          { error: errorData?.error || "Failed to relay message to Formspree." },
          { status: 502 }
        );
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry received successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error processing enquiry." },
      { status: 500 }
    );
  }
}
