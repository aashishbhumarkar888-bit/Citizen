import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Generate a mock ID
    const mockId = `REV-${Math.floor(Math.random() * 10000)}`;
    
    return NextResponse.json(
      { 
        success: true, 
        message: "Grievance submitted successfully",
        data: {
          id: mockId,
          ...data,
          status: "Submitted",
          createdAt: new Date().toISOString()
        }
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to submit grievance" },
      { status: 500 }
    );
  }
}
