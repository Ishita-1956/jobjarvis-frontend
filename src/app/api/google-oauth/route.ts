import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // Build the dashboard URL so the backend knows where to send the user after auth
  const { origin } = new URL(request.url);
  const dashboardUrl = `${origin}/dashboard`;

  try {
    // The backend returns JSON { redirect_url: "https://accounts.google.com/..." }
    // We fetch it server-side, then redirect the browser to the Google OAuth URL
    const response = await fetch(
      `https://jobjarviss.infinityandbeyond.co/signup-jobseeker?mode=signup&response_type=redirect&redirect_url=${encodeURIComponent(dashboardUrl)}`
    );

    const data = await response.json();

    if (data.redirect_url) {
      return NextResponse.redirect(data.redirect_url);
    }

    return NextResponse.json({ error: "No redirect URL received" }, { status: 500 });
  } catch (error) {
    return NextResponse.json({ error: "OAuth failed" }, { status: 500 });
  }
}
