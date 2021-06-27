import './App.css';
import React, { useState } from 'react';
import List from './component/question/list';
import { QuestionContext } from './context/QuestionContext';

const App = () => {

    const [list, setList] = useState([]);

    return (
        <div>
            <QuestionContext.Provider value={{ list, setList }}>
                <List />
            </QuestionContext.Provider>
        </div>
    );
};
export default App;
