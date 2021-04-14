import React from 'react';
import { For } from 'react-loops';
import { Card } from 'semantic-ui-react';
import Question from './question';
import axios from 'axios';

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            showingDetail: false,
            detail: null
        }
    }

    componentDidMount() {
        axios.get(`/list`)
            .then(res => {
                this.setState({ list: res.data });
            });
    }

    changeView = (key,e) => {
        this.setState({
            showingDetail: !this.state.showingDetail,
            detail: this.state.list.filter(i => i.id === key).pop()
        });

    }

    render() {
        return this.state.showingDetail ? (
            <Question
                item={ this.state.detail }
                onClick={ this.changeView.bind(this) }
            />
        ) : (
            <Card.Group>
                <For of={ this.state.list }>{ question => (
                    <Question
                        key={ question.id }
                        item={ question }
                        onClick={ this.changeView.bind(this, question.id) }
                    />
                ) }</For>
            </Card.Group>
        );
    }
}