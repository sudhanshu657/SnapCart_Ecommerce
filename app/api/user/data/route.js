import connectDB from "@/config/db";
import User from "@/models/User";
import { getAuth, clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function GET(request){
    try {
        const { userId } = getAuth(request);

        if (!userId) {
            return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
        }

        console.log('🔍 /api/user/data called with userId:', userId);

        await connectDB();

        // Use findOne since _id is a String type (Clerk userId), not ObjectId
        let user = await User.findOne({ _id: userId });
        console.log('🔍 User found in DB:', user ? 'YES' : 'NO');

        // If user not found by Clerk userId, fetch from Clerk and upsert
        if (!user) {
            const client = await clerkClient();
            const clerkUser = await client.users.getUser(userId);
            const email = clerkUser.emailAddresses[0]?.emailAddress || '';
            const name = [clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(' ') || 'User';

            // Check if a record already exists with this email (old/mismatched _id)
            const existingByEmail = await User.findOne({ email });

            if (existingByEmail) {
                // Update the _id to match the current Clerk userId
                await User.deleteOne({ email });
                user = await User.create({
                    _id: userId,
                    email,
                    name,
                    imageUrl: clerkUser.imageUrl || '',
                    cartItems: existingByEmail.cartItems || {}
                });
                console.log('✅ User re-created with correct Clerk _id (email matched old record)');
            } else {
                user = await User.create({
                    _id: userId,
                    email,
                    name,
                    imageUrl: clerkUser.imageUrl || '',
                    cartItems: {}
                });
                console.log('✅ User auto-created in DB from Clerk data');
            }
        }

        return NextResponse.json({ success: true, data: user });

    } catch (error) {
        console.error('❌ /api/user/data error:', error.message);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}