import {test, expect} from '@playwright/test';

test("My first test", async ({page}) =>{
    expect (100).toBe(100);
});

test("My second test", async ({page}) =>{
    expect (100).toBe(101);
});

test("My third test", async ({page}) =>{
    expect (11).toBe(11);
});      
test("My fourth test", async ({page}) =>{
    expect ("Vaibhav Kulkarni").toContain("Vaibhav");
});   
test("My fifth test", async ({page}) =>{
    expect ("Vaibhav Kulkarni".includes("Vaibhav")).toBeTruthy();
    expect ("Vaibhav Kulkarni".includes("Kulkarni")).toBe(true);
});

