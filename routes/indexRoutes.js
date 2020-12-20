const express = require("express"),
         Blog = require("../models/blogModel"),
       router = express.Router();

// let data = [
//     {
//         postTitle: "First Post",
//         postSubTitle: "That is a first post detail",
//         image: "https://images.unsplash.com/photo-1608135558974-64db55ad4f0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
//     },
//     {
//         postTitle: "Second Post",
//         postSubTitle: "That is a second post detail",
//         image: "https://images.unsplash.com/photo-1502412550130-75be706f3b5f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1051&q=80"
//     },
//     {
//         postTitle: "Third Post",
//         postSubTitle: "That is a third post detail",
//         image: "https://images.unsplash.com/photo-1514102057662-f649e6770e11?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80"
//     }
// ];

router.get("/", (req,res) => {
    Blog.find({}, (err,foundBlogs)=>{
        if (err) {
            console.log("EEEEEEEEEEEEERRRRRRRRRRRRRROOOOOOOOOORRRRR********");
            console.log(err);
        }else {
            console.log("*********BLOGSSSSSSSSSSSSSSSSSSSSSSS********");
            console.log(foundBlogs);
            res.render('home',{foundBlogs:foundBlogs});
        }
    });
}); 

router.get("/about", (req,res) => {
    res.render('about');
}); 

router.get("/contact", (req,res) => {
    res.render('contact');
}); 

router.get("/resume", (req,res) => {
    res.render('resume');
}); 



module.exports = router;


