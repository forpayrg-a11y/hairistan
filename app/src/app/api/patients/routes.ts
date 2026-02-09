import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Patient from '@/models/Patient';

export async function POST(request: Request) {
    try {
        await connectDB(); // Connect to the database
        const body = await request.json(); // Get the data from the frontend

        const newPatient = await Patient.create(body); // Save to MongoDB

        return NextResponse.json({
            message: 'Patient registered successfully!',
            data: newPatient
        }, { status: 201 });
    } catch (error) {
        return NextResponse.json({
            message: 'Something went wrong',
            error: error
        }, { status: 500 });
    }
}