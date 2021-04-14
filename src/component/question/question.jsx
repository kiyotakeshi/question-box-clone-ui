import React from 'react';
import { Card } from 'semantic-ui-react';

const Question = (props) => {
    const { answered, post, questioner } = props.item;
    return (
        <Card
            onClick={ props.onClick }>
            <Card.Content
                header = { questioner }
                meta = { answered ? '回答済み' : '未回答' }
                description = { post }
            />
        </Card>
    );
}
export default Question;