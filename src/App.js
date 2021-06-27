import './App.css';
import React from 'react';
import List from './component/question/list';
import { QuestionContext } from './context/QuestionContext';

const App = () => {
    return (
        <div>
            <QuestionContext.Provider value={{}}>
                <List />
            </QuestionContext.Provider>
        </div>
    );
};
export default App;
