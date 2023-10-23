// Sample data for a blog post
const blogPost = {
    title: "Juicing for Health",
    date: "October 23, 2023",
    author: "Meline Sarkissian",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
};

const source = document.getElementById("blog-template").innerHTML;

const template = Handlebars.compile(source);

const html = template({ blogPost });

document.querySelector("main").innerHTML += html;
