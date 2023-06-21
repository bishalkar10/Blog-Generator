# Blog-Generator 
This is a React single page web application. On the Homepage user can navigate through diffrent category of topics. User can delete existing topics and add new Topics. Click the **Write** Button and it will take you to the second screen of the Page.This is a blog writer powered by GPT-3.5-turbo. You get to choose four option in which tone the blog will be genereted. After the first click the tones option will be removed from the page and then you will not be able to select the tones from thr options. This is similar to chatgpt. You can ask question and it will give answers.   


This App supports Undo (ctrl + z ) and redo (ctrl + y) fucntions in the editor or input field. 
This App uses TinyMCE editor in the input Field. YOu need to generate an API for the TInyMCE Rich Text editor and openAI api to work this app in your machine.   

![Home Page](https://github.com/bishalkar10/Blog-Generator/assets/112653391/a6d22b9b-ae80-4a57-af6c-dfce407b9b98)
 ![Editor Page](https://github.com/bishalkar10/Blog-Generator/assets/112653391/21f2d51c-909c-468e-9697-dea05f6682a5)
![Add New Toppic](https://github.com/bishalkar10/Blog-Generator/assets/112653391/1f199bd2-e368-4614-a869-0d9faf4ab0df)
![sample](https://github.com/bishalkar10/Blog-Generator/assets/112653391/844cda12-ab08-42b8-a86c-454b580de75e)
![Prompt Error](https://github.com/bishalkar10/Blog-Generator/assets/112653391/419e0794-2088-49ca-bcb6-b10d66565fc9)


-This web application is build using HTML, Tailwind Css, Vite + React.
-I have used react-router-dom to create routes for different pages.
-This web application is not optimized for small tablets and mobiles.
-I have used environment variable to hide the API token in the code. 

#Installation :
Visit the repo and then :

1. Click on the fork button. This will create a copy the of this repo on your account.
2. Click on the green color code button in your repo.
3. Click on the clipboard button to copy.
4. Open your VS Code Editor or IDE whatever you have.
5. Navigate to the directory where you want to clone the repo.
6. Type `git clone` in command line argument.
7. run `npm i` to install dev dependencies.  
8. Then Generate TinyMCE editor and openAI api keys. 
9. In the root directory create a file *.env*. There create two environment varible like this. (assuming your openaiAPI api key is *openaiapikey* and tinyMCE api key is *tinymceapikey*)
```
VITE_OPENAI_API_KEY=openaiapikey 
VITE_TINY_API_KEY=tinymceapikey
```
10. Wait patiently and then run `npm run dev`. Then opent the link shown in the terminal . It's probably : **localhost:3000/**
