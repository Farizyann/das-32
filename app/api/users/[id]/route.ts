import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { data } from "../../data";

interface Context {
    params: { id: number };
}

export async function GET(request: NextRequest, context: Context) {
    const { id } = context.params;
    const x = data.users.find(elm => elm.id == id)
    if(x){
        return NextResponse.json(x);
    }else{
        return NextResponse.json({message: 'user not found'});

    }

}
