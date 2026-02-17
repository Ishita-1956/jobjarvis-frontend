import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://jobjarviss.infinityandbeyond.co/signup-jobseeker?mode=signup"
    );

    const data = await response.json();

    return NextResponse.redirect(data.redirect_url);
  } catch (error) {
    return NextResponse.json(
      { error: "OAuth failed" },
      { status: 500 }
    );
  }
}
