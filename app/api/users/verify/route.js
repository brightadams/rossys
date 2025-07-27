// app/api/users/verifyUser/route.ts
import User from "@/models/user";
import { connectToDB } from '@/utils/database';
import { NextResponse } from 'next/server';

export async function PATCH(request) {
  try {
    await connectToDB();

    // Parse the request body
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 }
      );
    }

    // Find and update the user
    const updatedUser = await User.findOneAndUpdate(
      { email },
      { $set: { verified: true } },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: 'User verification status updated successfully',
        user: updatedUser
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error updating verification status:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Optionally add other HTTP methods
export async function GET() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}