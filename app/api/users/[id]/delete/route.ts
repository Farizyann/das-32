import { data } from "@/app/api/data";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

interface Context {
    params: { id: number };
}

export async function DELETE(request: NextRequest, context: Context) {
    const { id } = context.params;
    const x = data.users.find(elm => elm.id == id)
    if(x){
        data.users = data.users.filter(elm => elm.id != id)
        return NextResponse.json(true);
    }else{
        return NextResponse.json(false);
    }
}