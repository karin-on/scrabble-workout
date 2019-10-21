import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import classes from './Game.scss';
import { Slots } from './Slots/Slots';
import { Backspace } from './Backspace/Backspace';
import { Letters } from './Letters/Letters';
import { Submit } from './Submit/Submit';
import { Timer } from './Timer/Timer';

import { WORD_LENGTH } from '../../config/config';
import { shuffleArray, generateID } from '../../helpers';
import { initWords } from '../../store/actions/init-words';
import { submitAnswer } from '../../store/actions/submit-answer';

class GameView extends Component {
    state = {
        letters: [],
        lettersInSlots: [],
        isSubmitVisible: false,
    };

    componentDidMount() {
        const { allWords, dispatch } = this.props;

        if (allWords.length) {
            dispatch(initWords(allWords));
        }
    }

    componentDidUpdate(prevProps) {
        const { allWords, words, dispatch } = this.props;

        if (allWords !== prevProps.allWords) {
            dispatch(initWords(allWords));
        }

        if (words !== prevProps.words && words.length) {
            this.initLetters(words);
        }
    }

    initLetters = (words) => {
        const lettersObjects = words[0].split('')
            .map((letter) => ({
                value: letter,
                id: generateID(),
                active: true,
            }));
        /* eslint-disable react/no-did-update-set-state */
        this.setState({
            letters: shuffleArray(lettersObjects),
        });
    };

    toggleLettersActiveState = (id) => {
        const { letters } = this.state;

        const index = letters.findIndex((el) => el.id === id);
        letters[index].active = !letters[index].active;
        this.setState({
            letters,
        });
    };

    handleLetterClick = (id) => {
        const { letters, lettersInSlots } = this.state;
        const letterSelected = letters
            .find((el) => el.id === id);

        this.toggleLettersActiveState(id);
        const updatedLettersInSlots = [...lettersInSlots, letterSelected];

        this.setState({
            lettersInSlots: updatedLettersInSlots,
        }, () => {
            if (updatedLettersInSlots.length === WORD_LENGTH) {
                this.setState({
                    isSubmitVisible: true,
                });
            }
        });
    };

    handleBackspaceClick = () => {
        const { lettersInSlots } = this.state;
        const lastLetterID = lettersInSlots[lettersInSlots.length - 1].id;

        this.toggleLettersActiveState(lastLetterID);
        lettersInSlots.pop();

        this.setState({
            lettersInSlots,
        });
    };

    submit = () => {
        const { lettersInSlots } = this.state;
        const { dispatch, history } = this.props;

        dispatch(submitAnswer(
            lettersInSlots.length === WORD_LENGTH
                ? this.joinLetters(lettersInSlots)
                : '',
        ));
        history.replace('/result');
    };

    onSubmit = () => {
        this.submit();
    };

    onCancel = () => {
        this.setState({
            isSubmitVisible: false,
        });
    };

    timeIsOver = () => {
        this.submit();
    };

    joinLetters = (arr) => arr.reduce((a, b) => a + b.value, '');

    render() {
        const { loading, error } = this.props;
        const { letters, lettersInSlots, isSubmitVisible } = this.state;

        if (loading) {
            return <main className={classes.Game}>Pobieram dane...</main>;
        }

        if (error) {
            return <main className={classes.Game}>Wystąpił błąd</main>;
        }

        return (
            <main className={classes.Game}>
                <Timer timeIsOver={this.timeIsOver} />
                <Slots
                    lettersInSlots={lettersInSlots}
                />
                <Backspace
                    clicked={this.handleBackspaceClick}
                    disabled={lettersInSlots.length === 0 || isSubmitVisible}
                />
                {
                    !isSubmitVisible
                        ? (
                            <Letters
                                letters={letters}
                                clicked={this.handleLetterClick}
                            />
                        )
                        : (
                            <Submit
                                onSubmit={this.onSubmit}
                                onCancel={this.onCancel}
                            />
                        )
                }
            </main>
        );
    }
}

GameView.propTypes = {
    dispatch: PropTypes.func.isRequired,
    allWords: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    words: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired,
};

GameView.defaultProps = {
    error: null,
};

const mapStateToProps = ({ allWords: { data: allWords, loading, error }, words }) => (
    { allWords, loading, error, words }
);

const Game = connect(mapStateToProps)(GameView);
export { Game };
