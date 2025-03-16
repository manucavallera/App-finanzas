import { NextRequest, NextResponse } from "next/server";

export const GET = (request: NextRequest, { params: { testId: string } }) => {
  return NextResponse.json({ message: "test" });
};
