const express = require('express');
const app = express();
const port = 3001; 


app.use(express.static('public'));

app.get('/blog', (req, res) => {
    
    const blogPost = {
        title: "Getting Started",
        date: "October 23, 2023",
        author: "John Doe",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    };
   
    res.render('index', { blogPost });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
