import React, { useContext, useEffect, useState } from 'react';
import { For } from 'react-loops';
import { Card } from 'semantic-ui-react';
import Question from './question';
import axios from 'axios';
import { QuestionContext } from '../../context/QuestionContext';

const List = () => {
    const { list, setList } = useContext(QuestionContext);

    const initState = {
        // list: [],
        showingDetail: false,
        detail: null,
    };

    const [state, setState] = useState(initState);
    // const { list, showingDetail, detail } = state;
    const { showingDetail, detail } = state;

    useEffect(() => {
        axios.get(`/list`).then((res) => {
            // setState({ ...state, list: res.data });
            setList(res.data);
        });
    }, []);

    return (
        <>
            <Card.Group>
                <For of={list}>
                    {(question) => (
                        // {debugger}
                        // console.log(question)
                        // <Question key={question.id} item={question} />
                        <Question key={question.id} />
                        // <Card key={question.id}>
                        //     <Card.Content
                        //         header={question.questioner}
                        //         meta={question.answered ? '回答済み' : '未回答'}
                        //         description={question.post}
                        //     />
                        // </Card>
                    )}
                </For>
            </Card.Group>
        </>
    );
};

export default List;

// export default class List extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             list: [],
//             showingDetail: false,
//             detail: null
//         }
//     }

//     componentDidMount() {
//         axios.get(`/list`)
//             .then(res => {
//                 this.setState({ list: res.data });
//             });
//     }

//     changeView = (key,e) => {
//         this.setState({
//             showingDetail: !this.state.showingDetail,
//             detail: this.state.list.filter(i => i.id === key).pop()
//         });

//     }

//     render() {
//         return this.state.showingDetail ? (
//             <Question
//                 item={ this.state.detail }
//                 onClick={ this.changeView.bind(this) }
//             />
//         ) : (
//             <Card.Group>
//                 <For of={ this.state.list }>{ question => (
//                     <Question
//                         key={ question.id }
//                         item={ question }
//                         onClick={ this.changeView.bind(this, question.id) }
//                     />
//                 ) }</For>
//             </Card.Group>
//         );
//     }
// }
