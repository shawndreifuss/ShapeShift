var blogData = [
    {
        title: "The Power of Juicing for Your Fitness Journey",
        date: "October 23, 2023",
        author: "Meline Sarkissian",
        content: "When it comes to enhancing your fitness journey, you might think of hitting the gym, following a strict workout routine, and maintaining a balanced diet. But have you ever considered adding a glass of fresh juice to your daily regimen? Juicing is not just a health fad; it's a fantastic way to boost your fitness goals. Let's explore the incredible benefits of incorporating fresh juices into your fitness routine. Freshly squeezed juices are a concentrated source of essential vitamins, minerals, and antioxidants. Whether it's a vibrant green juice packed with leafy greens or a fruity blend bursting with antioxidants, these nutrient-packed beverages provide your body with a natural energy boost. The vitamins and minerals in these juices can help you feel more awake and energized for your workouts.",
    },
    {
        title: "Sleep: The Unsung Hero of Your Fitness Journey",
        date: "October 24, 2023",
        author: "Meline Sarkissian",
        content: "In the pursuit of better health and fitness, we often focus on exercise routines and dietary choices. But there's another crucial aspect that we sometimes overlook: sleep. Getting a good night's sleep isn't just about feeling refreshed; it plays a fundamental role in your fitness journey. Let's explore the importance of sleep for your overall well-being and athletic performance. One of the most significant benefits of sleep for fitness enthusiasts is its impact on muscle recovery and growth. When you work out, you create tiny tears in your muscle fibers. These tears need time to repair and strengthen, a process that primarily occurs during sleep. Without adequate sleep, your body doesn't have the opportunity to heal, and your fitness progress can be hampered.",
    },
    {
        title: "The Heart-Pumping Benefits of Cardio Exercise",
        date: "October 24, 2023",
        author: "Meline Sarkissian",
        content: "Cardiovascular exercise, commonly known as cardio, is a cornerstone of fitness for good reason. Whether you're jogging in the park, cycling through scenic trails, or dancing to your favorite tunes, engaging in cardio workouts offers a multitude of health benefits. Let's explore why cardio exercise is a vital component of any fitness routine. As the name suggests, cardio exercise is all about caring for your heart. When you engage in activities that elevate your heart rate and increase blood flow, you're strengthening your heart muscles. Over time, this can lead to a reduced risk of heart disease and lower blood pressure, contributing to your overall cardiovascular health. Cardio exercise also benefits your respiratory system. It can enhance lung capacity and oxygen exchange, making it easier to breathe during everyday activities and physical exercise. This improved lung function helps you feel more vital and energetic.",
    }
];


var source = document.getElementById("blog-template").innerHTML;
var template = Handlebars.compile(source);


var blogContainer = document.querySelector("main");


blogData.forEach(function (blogPost) {
    var html = template(blogPost);
    blogContainer.innerHTML += html;
});
