### Test Solutions
Task 1 Button Functionality (Implemented)
-----------
Issue: The button on the page was not functioning correctly.
Solution: Implemented an event listener to toggle the visibility of the hidden section and updated the button text accordingly.
Code Changes:
•	Added event listener to the button with id show-hidden-section
•	Toggled visibility of the hidden section with id hidden-section
•	Updated button text based on the visibility of the hidden section


Task 2: Header Colour (Implemented)
----------
Issue: The color of the header/title "Winter Emergency Appeal" was not consistent with the brand.
Solution: Updated the color of the header to Human Appeal purple.
Code Changes:
•	Updated the <h1> element with class h1 to include the text-color--primary class


-------
Task 3: Page Speed Optimization
Suggested Solutions:

1. Remove Duplicate <head> Tags (Implemented)Ensured only one <head> element is present in the HTML document.
2. Optimize Hero Image (Implemented) Compressed the hero image to reduce file size and improve page load time.
3. Optimize Font Loading: We can use the <link rel="preload"> tag to preload font files and improve performance.
<link rel="preload" href="fonts/din-next/DINNextLTPro-Light.woff2" as="font" type="font/woff2" crossorigin="anonymous">
4. Prefer WOFF2: In styles.css we can use WOFF2 instead to WOFF. it offers better compression and performance.
5. Use Lazy Loading: For images that are not immediately visible, use lazy loading to defer loading until they are needed.
