import React, { useContext } from 'react';
import { Card } from 'semantic-ui-react';
import { QuestionContext } from '../../context/QuestionContext';

const Question = (props) => {
    // const { answered, post, questioner } = props.item;
    const { list } = useContext(QuestionContext);
    // const { answered, post, questioner } = useContext(QuestionContext);
    // list.filter((question) => {
    //     question === props.key
    // });
    debugger
    return (
        <>
        </>
        // <Card onClick={props.onClick}>
        //     <Card.Content
        //         header={questioner}
        //         meta={answered ? '回答済み' : '未回答'}
        //         description={post}
        //     />
        // </Card>
    );
};
export default Question;
