//Route Handler
// a file which u can export diffferent 
//function with GET, POST, PATCH, PUT, DELETE 
// return JSON data or accept 

export function GET(request) {
    console.log(request);

    return new Response('Hello!')
    
}

// export function POST(request){}
