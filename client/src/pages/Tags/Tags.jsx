import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import "./Tags.css";

const Tags = () => {

  const tagsList = [
    {
      id: 1,
      tagName: "javascript",
      tagDesc: "For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript)."
    },
    {
      id: 2,
      tagName: "python",
      tagDesc: "Python is a multi-paradigm, dynamically typed, multi-purpose programming language. It is designed to be quick to learn, understand."
    },
    {
      id: 3,
      tagName: "java",
      tagDesc: "Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the language itself. "
    },
    {
      id: 4,
      tagName: "c#",
      tagDesc: 'C# (pronounced "see sharp") is a high-level, statically typed, multi-paradigm programming language developed by Microsoft. C# code usually targets.'
    },
    {
      id: 5,
      tagName: "php",
      tagDesc: "PHP is a widely used, open source, general-purpose, multi-paradigm, dynamically typed and interpreted scripting language designed initially."
    },
    {
      id: 6,
      tagName: "android",
      tagDesc: "Android is Google's mobile operating system, used for programming or developing digital devices (Smartphones, Tablets, Automobiles."
    },
    {
      id: 7,
      tagName: "html",
      tagDesc: "HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser. "
    },
    {
      id: 8,
      tagName: "css",
      tagDesc: "CSS (Cascading Style Sheets) is a representation style sheet language used for describing the look and formatting of HTML"
    },
    {
      id: 9,
      tagName: "c++",
      tagDesc: "C++ is a general-purpose programming language. Initially, it was designed as an extension to C and has a similar syntax, but it is now a."
    },
    {
      id: 10,
      tagName: "node.js",
      tagDesc: "Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library."
    },
  ]

  return (
    <div className='home-container'>
      <div className='home-container-1'>
        <LeftSidebar />
      </div>
      <div className='home-tag'>
        <h1 className='tags-h1'>Tags</h1>
        <p className='tags-p'>A tag is a keyword or label that categorizes your question with other, similar question.</p>
        <p className='tags-p'>Using the right tags makes it eaiser for others to find and answer your question.</p>
        
        <div className="tags-list-container">
          {
            tagsList.map((tag) => (
              <TagsList tag={tag} key={tag.id}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Tags