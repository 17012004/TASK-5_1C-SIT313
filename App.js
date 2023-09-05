import React, { useState } from 'react';
import './App.css';
import CUSTOMBAR from './QUESTIONSECTION';
import OPTIONS from './OPTIONS';
import CustomSection from './Bar';
import ArticleSection from './ARTICLE';


function App() {
  const [selectedOption, setSelectedOption] = useState('question'); // Default to 'question'

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
 
  return (
    
    <div className="App">
      
      <OPTIONS onSelect={handleOptionSelect} />
      <CustomSection/>
      {selectedOption === 'question' ? <CUSTOMBAR /> : null}
      <ArticleSection/>  
        
      
    </div>
  );
}
export default App;

// import React from 'react'
// import { Form, Checkbox } from 'semantic-ui-react'
// import QUESTIONS from './QUESTIONS'
// import ARTICLES from './ARTICLES'
// import './ARTICLES.css';
// import './QUESTIONS.css';

// function App() {
//   const [value, setValue] = React.useState('Article')

//   return (
//     <>
//     <Form>
//       <Form.Field>
//         Select Post Type: 
//       </Form.Field>
//       <Form.Field>
//         <Checkbox
//           radio
//           label='Article'
//           name='checkboxRadioGroup'
//           value='Article'
//           checked={value === 'Article'}
//           onChange={(e, data) => setValue(data.value)}
//         />
//       </Form.Field>
//       <Form.Field>
//         <Checkbox
//           radio
//           label='Question'
//           name='checkboxRadioGroup'
//           value='Question'
//           checked={value === 'Question'}
//           onChange={(e, data) => setValue(data.value)}
//         />
//       </Form.Field>
//     </Form>
//     {value === "Question" ? (
//      <ARTICLES/>
//     ) : (
      
//       <QUESTIONS/>
//     )
//   }
//   </>
//   )
// }

// export default App

// // import React from 'react';
// // import PostPage from './postPage';
// // import ArticleForm from './ArticleForm';
// // import PostButton from './PostButton';
// // import PostTypeSelector from './PostTypeSelector';
// // import QuestionForm from './QuestionForm';
// // //import '/.PostPage.css';

// // import './App.css';

// // function App() {
// //   return (
// //     <>
// //     <PostPage />
// //     <PostButton />
// //     <PostTypeSelector/>
// //     <ArticleForm/>
// //     <QuestionForm/>
// //     </>
// //     // <div className="App">
// //     //   <header className="App-header">
// //     //     <img src={logo} className="App-logo" alt="logo" />
// //     //     <p>
// //     //       Edit <code>src/App.js</code> and save to reload.
// //     //     </p>
// //     //     <a
// //     //       className="App-link"
// //     //       href="https://reactjs.org"
// //     //       target="_blank"
// //     //       rel="noopener noreferrer"
// //     //     >
// //     //       Learn React
// //     //     </a>
// //     //   </header>
// //     // </div>
// //   );
// // }

// // export default App;
