import React, { useRef, useState, useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";
import { Editor } from "@tinymce/tinymce-react";
import Tones from "../components/Tones";
import { useLocation } from "react-router-dom";

export default function RichTextEditor() {
  const location = useLocation();
  const { topic, keywords } = location.state;  // get the topic and keywords from the location state
  const tonesArray = ["Informative", "Inspirational", "Humorous", "Analytical"];  // array of tones
  const [selectedTone, setSelectedTone] = useState(tonesArray[0]); // set the default tone to the first tone in the array
  const [isEditorReady, setIsEditorReady] = useState(false); // ediotor takes a while to load so we need to set a state to check if the editor is ready or not.
  const [hideTones, setHideTones] = useState(false); // hide the tones div when we have chosen the tone. they will not reappear unless browser is refreshed
  const [waiting, setWaiting] = useState(false); // this state is to check if response is recieved or not. this  will be show the laading animation in the generate button and keep the button disabled upon recieving the reposnse we will set it to false.
  const [empty, setEmpty] = useState(false);  // used in the error message animation when the editor is empty
 
  const editorRef = useRef(null);
  const ansBoxRef = useRef(null); 

  const tinyApiKey = import.meta.env.VITE_TINY_API_KEY;
  const openAIAPiKey = import.meta.env.VITE_OPENAI_API_KEY;
  const keywordString = keywords.join(", ");
  const blogPrompt = `Write a blog in an ${selectedTone} tone on the topic: "${topic}" and highlight the keywords: ${keywordString}.`;

  const handleClick = () => {
    // hide the tone div as we have chosen the first time. 
    if (!hideTones) {
      setHideTones(true);
    }
    if (editorRef.current && ansBoxRef.current) {
      const editorContent = editorRef.current.getContent(); // get the content from the editor
      if (!editorContent) {  
        setEmpty(true); // if the editor is empty then set the empty state to true and return
        return;
      }
      const text = editorContent.match(/<p>(.*?)<\/p>/)[1]; // the content is inside a <p> tags but it's not a html , it is a string. get the text between <p> </p> tags.
      const finalText = text.replace(/&nbsp;/g, " ").trim();
      // Update the content of the ans div
      APIcall(finalText);
    }
  };

  async function APIcall(prompt) { 
    setWaiting(true)
    const openai = new OpenAIApi(new Configuration({ apiKey: openAIAPiKey }));
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    const reply = response.data.choices[0].message.content; 
    if (reply) { 
      setWaiting(false);  // after getting the response, set the waiting to false.
    }
    if (ansBoxRef.current) {
      ansBoxRef.current.innerText = reply;
    }
  }

  useEffect(() => {
    if (isEditorReady && topic && keywords && editorRef.current) {
      editorRef.current.setContent(blogPrompt);
    }
  }, [isEditorReady, blogPrompt]);

  return (
    <div className="flex flex-col min-h-screen p-5 bg-gradient-to-r from-purple-300 to-emerald-300">
      <Editor
        apiKey={tinyApiKey}
        onInit={(_, editor) => {
          editorRef.current = editor;
        }}
        initialValue="Write something here."
        init={{
          height: 80,
          menubar: false,
          toolbar: false,
          statusbar: false,
        }}
        onEditorChange={() => {
          if (!isEditorReady) {
            setIsEditorReady(true);
          }
        }}
      />
      {!hideTones && (
        <Tones
          tonesArray={tonesArray}
          selectedTone={selectedTone}
          setSelectedTone={setSelectedTone}
        />
      )}
      <div className="relative flex"> 
      
        <button
          className={`inline-flex items-center gap-2 p-2 px-3 mx-auto my-5 text-white rounded bg-gradient-to-r from-green-400 to-blue-500 ${ waiting && 'opacity-80'}`}
          onClick={handleClick} 
          disabled={waiting}>  
          {waiting ? 'Generating' : "Generate"}
          {waiting &&  <div className='loading-circle animate-[spin_1s_linear_infinite]'></div>}
            
        </button>  
       
        <div className={`absolute ${!empty && 'hidden'} top-0 px-2 text-white transform -translate-x-1/2 bg-red-500 ${empty && 'animate-slide-up'} left-1/2`}
        onAnimationEnd={() => setEmpty(false)}>
          Please Write a prompt
        </div>
      </div>

      <div
        className="flex-grow w-full p-5 bg-gray-100 border border-black round rounded-xl"
        ref={ansBoxRef}
      ></div>
    </div>
  );
}
