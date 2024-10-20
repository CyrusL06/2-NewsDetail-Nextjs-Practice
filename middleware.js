//handles the incoming request, usually takes a look at incoming req
// blocks, tweak, authenticate 
//redirect
//or go on after evaluating request

//Look in the documentation


import { NextResponse } from "next/server";

// run the 
export function middleware(request){
    // console.log(request);
    
    return NextResponse.next()
}

// filter for a single page
export const config = {
    matcher: '/news'
}