# MacKay's Painting Corner

MacKay's Painting Corner is a site for Table Top hobby enthusiasts who are interested in having their armies/miniatures painted for them, so they can get to playing the games faster and don't have to stress about learning the skills needed to become a high quality painter.
The site will have an easy to see gallery showcasing the painting standards and abilities of the artist, as well is quotes of other satisfied customers. as well as an easy to use way to get a quote for the site users own projects.

![Responsice Mockup]()

## User Stories 
|Story No.|Story|
| ------------- | ------------- |
|1| As a First-time User, <br> I want to be able to see examples of what the artist has created <br> so I can tell if they are worth the money and if I want to have my army look like that. <br><br> I know I am done when I have an easy to use gallery that shows all past commissions and artwork |
|2|As the artist, <br> I want anyone who goes to the website to be able to get the information they need easily <br> so that users are more likely to view my art and request a commission. <br><br> I know I am done when I have and inviting landing page with noticeable buttons for seeing the gallery and getting a quote for a commission.|
|3|As a Potential Buyer, <br> I want to be able to get in touch with the artist about my idea and quickly get a quote <br> So I can get an idea how much it will cost and how long it will take <br><br> I know I am done when I have a way to contact the artist, and easy to follow instructions to get the important information across to get an accurate quote.|
|4|As a First-time user,<br> I want to be able to find a community of like-minded people <br> so I can find people who share my interests. <br> <br> I know I am done users can quickly find social media links to the artists community, video tutorials and live streams.|
|5|As a new painter, <br> I want to be able to get tips on how to paint better <br> so that I can improve as a painter.<br> <br> I know I am done when users can find tutorials on the arists platorms. |

***

<!-- ## Features

In this section, you should go over the different parts of your project, and describe each in a sentence or so. You will need to explain what value each of the features provides for the user, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things. -->

### Existing Features

- __Navigation Bar__

  - Featured on all three pages, the full responsive navigation bar includes links to the Home page, Gallery and Commission page and is identical in each page to allow for easy navigation.
  - This section will allow the user to easily navigate from page to page across all devices without having to revert back to the previous page via the ‘back’ button.

![Nav Bar]()

- __The landing page image__

  - The landing includes a hero image photograph of a painted army/mini with call to action buttons for getting your own commissions and seeing the gallery.
  - This section introduces the user to Mackay's painting corner with an eye catching animation to grab their attention

![Landing Page]()

- __The Footer__

  - The footer section includes links to the relevant social media sites for MacKay's Painting Corner. The links will open to a new tab to allow easy navigation for the user.
  - The footer is valuable to the user as it encourages them to keep connected via social media

![Footer]()

- __Gallery__

  - The gallery will provide the user with supporting images to see what the artist is capable of.
  - This section is valuable to the user as they will be able to compare the artist to the industry standards and the exepectations of the viewer.
  - It will have distinct sections for "Army Level" "Unit Level" and "Hero Level" so viewers can see what they would be paying for.

![Gallery]()

- __Commissions__

  - This page will allow the user to get in touch with the artist for the booking a commission.
  - It will have a form that will be easy to fill out and give the artist enough information to form a general price quote.
  - Information such as What you want painted,(i.e army, unit or hero) a section for a breif description of any particulars they want (i.e any conversions, scheme/colour/theme) as well as a way to link a .JPG for reference material.

![Commissions]()

<!--For some/all of your features, you may choose to reference the specific project files that implement them.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:-->

### Features Left to Implement

- an about Artist Page

## Testing

<!-- In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your project’s features and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.-->

### Bugs
#### Bug 1
- The landing page image was not scaling as intended over all screen sizes, so i added new code and multiple images to load at correct screen sizes
Original code:
```
<img class="hero-image" src="assets/images/mobile-landing-page-lg.jpg" alt="Photo of hand painted miniature">
```
New code:
```
<picture class="hero-image">
                <source class="hero-image" media="(max-width:376px)" srcset="assets/images/mobile-landing-page-xsm.jpg">
                <source class="hero-image" media="(min-width:377px) and (max-width:426px)" srcset="assets/images/mobile-landing-page-sm.jpg">
                <source class="hero-image" media="(min-width:427px) and (max-width:768px)" srcset="assets/images/mobile-landing-page-med.jpg">
                <source class="hero-image" media="(min-width:768px)" srcset="assets/images/mobile-landing-page-lg.jpg">
                <img class="hero-image" src="assets/images/mobile-landing-page-lg.jpg" alt="Photo of hand painted miniature">
              </picture>
```
#### Bug 2 

### Validator Testing
<!-->
- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-running-2.0%2Findex.html)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-running-2.0%252Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#css)-->

### Unfixed Bugs

<!--You will need to mention unfixed bugs and why they were not fixed. This section should include shortcomings of the frameworks or technologies used. Although time can be a big variable to consider, paucity of time and difficulty understanding implementation is not a valid reason to leave bugs unfixed.-->

## Deployment

<!--This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub)

- The site was deployed to GitHub pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the Settings tab
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here - <https://code-institute-org.github.io/love-running-2.0/index.html>-->

## Credits
  
  

### Content
- Processes from the CI Love Running project was used to help create this website - [CI Love Running](https://code-institute-org.github.io/love-running-2.0/index.html)

- HTML, CSS and Javascript code help was taken from w3schools - [W3Schools](https://www.w3schools.com/)

- Navbar from Bootstrap (https://getbootstrap.com/docs/5.3/components/navbar/#nav)


### Media

- embedded video (https://www.youtube.com/watch?v=DoUPT_ctBBY&t=520s) from [Richard Gray](https://www.youtube.com/@demonrich) as a placeholder for how videos could be shown. 


#### Icons
- All page Icons - [Font Awesome](https://fontawesome.com/)

<!--
In this section you need to reference where you got your content, media and extra help from. It is common practice to use code from other repositories and tutorials, however, it is important to be very specific about these sources to avoid plagiarism.

You can break the credits section up into Content and Media, depending on what you have included in your project.-->

### Content
<!--
- The text for the Home page was taken from Wikipedia Article A
- Instructions on how to implement form validation on the Sign Up page was taken from [Specific YouTube Tutorial](https://www.youtube.com/)
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)-->

### Media
<!--
- The photos used on the home and sign up page are from This Open Source site
- The images used for the gallery page were taken from this other open source site

Congratulations on completing your Readme, you have made another big stride in the direction of being a developer!-->

## Other General Project Advice

<!--Below you will find a couple of extra tips that may be helpful when completing your project. Remember that each of these projects will become part of your final portfolio so it’s important to allow enough time to showcase your best work!

- One of the most basic elements of keeping a healthy commit history is with the commit message. When getting started with your project, read through [this article](https://chris.beams.io/posts/git-commit/) by Chris Beams on How to Write  a Git Commit Message
  - Make sure to keep the messages in the imperative mood

- When naming the files in your project directory, make sure to consider meaningful naming of files, point to specific names and sections of content.
  - For example, instead of naming an image used ‘image1.png’ consider naming it ‘landing_page_img.png’. This will ensure that there are clear file paths kept.

- Do some extra research on good and bad coding practices, there are a handful of useful articles to read, consider reviewing the following list when getting started:
  - [Writing Your Best Code](https://learn.shayhowe.com/html-css/writing-your-best-code/)
  - [HTML & CSS Coding Best Practices](https://medium.com/@inceptiondj.info/html-css-coding-best-practice-fadb9870a00f)
  - [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html#General)

Getting started with your Portfolio Projects can be daunting, planning your project can make it a lot easier to tackle, take small steps to reach the final outcome and enjoy the process!-->
