import { data } from "@/app/api/data";
import { IUser } from "@/type/type";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

interface Context {
    params: { id: number };
}

export async function PATCH(request: NextRequest, context: Context) {
    const { id } = context.params;
    const body: any = await request.json();
    const x:any = data.users.find(elm => elm.id == id)
    const xIndex:any = data.users.findIndex(elm => elm.id == id)
    if(x){
        for(let key in body){
            x[key] = body[key]
        }
        data.users[xIndex] = x;
        return NextResponse.json(x);
    }else{
        return NextResponse.json({message: 'user not found'});
    }
}