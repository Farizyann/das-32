import { data } from "@/app/api/data";
import { IUser } from "@/type/type";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

interface Context {
    params: { id: number };
}

export async function POST(request: NextRequest, context: Context) {
    const body: any = await request.json();
    data.users.push({...body})
    console.log(data.users);
    
    return NextResponse.json(data.users);
}