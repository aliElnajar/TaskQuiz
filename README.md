 ### hello , lemme talk briefly about the project
> since it was a fullstack app i choosed to use next 13 , all files are inside src folder , mainly there's 3 main files
1. app: having api folder and pages which are 3 pages(welcoming-questions-ranking) pages
2. components:  i've used it to divide the question to mini componentes and to have leaner code
3. utils :  having the functions i used to call the apis as well as reducer file having the reducer fn and initial state

# 1- the backend part
> just 2 apis
 1. questions: the get api will response with 10 random questions and the options which are the 4 answers
2- ranking: the post api , receiving the request which's the score , sending it to helper function that takes the score add it to the array of scores and get the rank sending it back to the api to be sent to the frontend to be displayed

# 2- the frontend part
> as i mentioned 3 pages
1. welcoming page:  just a simple page directing the user to the question page 
2. question page: sending request and getting the data(questions,answers) sending it to another component, every question will be displayed by order, there's progress bar and buttons of answers, the choosen one will change to green if answer is correct, red if incorrect and all buttons will be disabled once user choose one , next button will navigate user to next question or to ranking page that button will be disabled if the user didn't choose yet.
3. ranking page: will send post request with score to the api getting the response (ranking)  and display it with a button navigating user back to start a new quiz,
>ps: next13 had a bug sending the post request in ranking page so i switched the way from using use hook (the way i choosed in questions page) traditional way in fetching data on component mount (useEffect)

#### as well i've used
1- tailwind css for styling and tailwind component lib called daisyui
2- next 13 loading and error pages which will wrap up the pages behind the scenes and will be displayed on error/loading state
> here is a video of the project https://drive.google.com/file/d/1Mqz_oTEOChIFcvhb4g2L9hrjXGq4jx1q/view?usp=sharing
