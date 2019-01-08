# DAT405 Creative Coding

Assignment 1 Melissa Junttila

In this assignment we were asked individually to develop a generative work that either displays a new static content every time it runs, changes visual conditions over time or changes according to user interactions.
We used the code editor Atom to create and edit the code, GitHub Repository to document and save our work and P5.js library to create the contents of the program.

My program is based on keyboard events. When you press different keys, new content appears and this causes a random and chaotic collision of different text and shapes to happen on screen but it still looks aesthetically pleasing.

In the program the keys 1, 2, 3, 4 are the ones linked to the keypressed function. When you press 1 or 2 text appears on screen, different text based on whether you press 1 or 2. When you press 3 or 4, different shapes appear on screen. 3 makes randomly coloured and sized circles appear in the middle of the screen and 4 creates a bit more complex shape which changes when you move your mouse around the screen, differently depending on vertical and horizontal coordinates of the mouse.

My intention was to make all of these text and shapes go together well even though everything is just random and unexpected. The sizing and colours in all of the objects and text are randomized which makes everything look more interesting and go together better. I also edited the index html file to add a bit of welcoming text on the screen and to explain how to use the program.

My GitHub link: https://github.com/melissajunttila/dat405


Assignment 2 Melissa Junttila

In this assignment we were asked to create an interactive data visualization work that reads an online/offline set of data and visualizes the content either as a static display or animated.

I chose the OpenWeatherMap API as the database of my program, because it is very clear to use for a beginner like me and has a lot of different weather information in it. At first I tried to use some film open data and make a visualization of that, but it turned out to be way too complex for me at this stage of learning and I had to change my idea at the last day before deadline.

In my program you can search for weather information in any city in the world by writing the name of it on the search box and clicking search. I added a mousepressed event to the search button to make it work. Then the program shows information of the current temperature, humidity and wind speed in the chosen city by text and also image icons are linked to each piece of information. These icons change their size depending on the weather information of each city. So when for example the temperature is colder, the icon is smaller than it is when it is warmer.

