const e = require("express");
const express = require("express");
const router = express.Router();
const puppeteer = require('puppeteer');


async function run(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://yousician.com/blog/5-guitar-scales')

    const headings = await page.evaluate(()=> 
    Array.from(document.querySelectorAll('.blogSingle__main__content h2'), (e) => ({
        heading: e.innerText,
    })))
    console.log(headings);

    console.log("*************************************************");
    
    const paras = await page.evaluate(()=> 
    Array.from(document.querySelectorAll('.blogSingle__main__content p'), (e) => ({
        body: e.innerText,
    })))
    console.log(paras);
    
    console.log("*************************************************");
    
    
    await browser.close()

    return {headings, paras};
}

router.get('/getblog',async (req,res) => {
    try{
        obj = await run()
        res.status(200).send(obj);
    } catch(error) {
        console.error(error.message);
        res.status(500).send("Could not trigger run");
    }
    // res.send(obj);
})

module.exports = router;