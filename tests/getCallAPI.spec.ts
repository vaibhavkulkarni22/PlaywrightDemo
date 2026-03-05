import { test, expect } from '@playwright/test';

test("Test GET API", async ({request}) => {

    const resp = await request.get("https://jsonplaceholder.typicode.com/posts/1"); // API endpoint URL
    console.log("API Response: ", resp);
    
    const respbody = await resp.body(); // this will return body in buffer type
    console.log("API Response body: ", respbody);
    
    const respjson = await resp.json(); // this will return body in json type
    console.log("API Response json: ", respjson);
    expect(respjson).toHaveProperty("userId", 1);
    expect(respjson).toHaveProperty("id", 1);
    expect(respjson).toHaveProperty("title", "sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
    expect(respjson.body).toContain("quia et suscipit\nsuscipit recusandae");
    
    const respheader = await resp.headers(); // this will return headers
    console.log("API Response headers: ", respheader);
    
    const respheaders = await resp.headersArray(); // this will return headers in array
    console.log("API Response headersArray: ", respheaders);
    
    const respstatus = await resp.status(); // this will return status code
    console.log("API Response status: ", respstatus);""
    expect(respstatus).toBe(200);
    
    const respstatusText = await resp.statusText(); // this will return status text
    console.log("API Response statusText: ", respstatusText);
    expect(respstatusText).toBe("OK");
    
    const respurl = await resp.url(); // this will return url
    console.log("API Response url: ", respurl);
    expect(respurl).toBe("https://jsonplaceholder.typicode.com/posts/1");

    const respok = await resp.ok(); // this will return true if status code is 200
    console.log("API Response ok: ", respok);
   
    const resptext = await resp.text(); // this will return text
    console.log("API Response text: ", resptext);
   
    const respheaders_cookie = respheader['set-cookie']; // get cookies from headers
    console.log("API Response cookies: ", respheaders_cookie);

    
    
    
    
    expect(respjson.title).toBe("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");


    
});