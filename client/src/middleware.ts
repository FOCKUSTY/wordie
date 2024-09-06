import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

const middleware = async (req: NextRequest, ev: NextFetchEvent) =>
{
    const headers = req.headers;

    if(!headers)
        return NextResponse.redirect(req.nextUrl.origin);
};
    
export default middleware;