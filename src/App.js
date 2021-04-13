import './App.css';
import axios from 'axios';
import { For } from 'react-loops';

//         "id": "ecefeaf1-9786-4110-a95a-78f5c9bb8755",
// "questioner": "test3",
// "post": "これはテスト投稿です",
// "respondent": "回答者",
// "answer": null,
// "answered": false,
// "archived": false

function App() {
    let response = await axios.get('http://localhost:8080/list');
    console.log(response);
    return (
        <div className="App">
            {/* <table>
                <tr>
                    <th>ID</th>
                    <th>questioner</th>
                    <th>post</th>
                    <th>respondent</th>
                    <th>answer</th>
                    <th>answered</th>
                    <th>archived</th>
                </tr>
            </table> */}
        </div>
    );
}

export default App;
