import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { status } = await request.json();
    const id = params.id;
    
    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    return NextResponse.json(
      { 
        success: true, 
        message: `Grievance ${id} status updated to ${status}`,
        data: {
          id,
          status,
          updatedAt: new Date().toISOString()
        }
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to update grievance status" },
      { status: 500 }
    );
  }
}
