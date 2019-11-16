import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';

import classes from './Game.scss';
import { Slots } from './Slots/Slots';
import { Backspace } from './Backspace/Backspace';
import { Letters } from './Letters/Letters';
import { Submit } from './Submit/Submit';
import { Timer } from './Timer/Timer';

import { WORD_LENGTH } from '../../config/config';
import { shuffleArray, generateID, isMobile } from '../../helpers';
import { initWords } from '../../store/actions/init-words';
import { submitAnswer } from '../../store/actions/submit-answer';


class GameView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            letters: [],
            lettersInSlots: [],
            currentAnswer: [],
            isSubmitVisible: false,
            dragDisabled: true,
        };
        this.handleResize = this.handleResize.bind(this);
        this.debouncedResizeListener = debounce(this.handleResize, 50);
    }

    componentDidMount() {
        const { allWords, dispatch } = this.props;

        if (allWords.length) {
            dispatch(initWords(allWords));
        }

        this.setDragAndDrop();
        window.addEventListener('resize', this.debouncedResizeListener);
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

    componentWillUnmount() {
        window.removeEventListener('resize', this.debouncedResizeListener);
    }

    handleResize = () => {
        const { letters, lettersInSlots, dragDisabled } = this.state;
        if (isMobile() === dragDisabled) {
            return;
        }
        if (!isMobile()) {
            const lettersOutsideSlots = letters
                .filter((letter) => letter.active);

            this.setState({
                letters: lettersInSlots.concat(lettersOutsideSlots),
                currentAnswer: [...lettersInSlots.concat(lettersOutsideSlots)],
                isSubmitVisible: false,
            }, this.activateAllLetters);
        } else {
            this.setState({
                lettersInSlots: [...letters],
                currentAnswer: [...letters],
                isSubmitVisible: true,
            }, this.deactivateAllLetters);
        }
        this.setDragAndDrop();
    };

    setDragAndDrop = () => {
        this.setState({
            dragDisabled: isMobile(),
        });
    };

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
        }, this.initAnswer);
    };

    initAnswer = () => {
        if (isMobile()) {
            return;
        }
        const { letters } = this.state;

        this.setState({
            currentAnswer: [...letters],
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

    activateAllLetters = () => {
        const { letters } = this.state;
        letters.forEach((letter, index) => {
            letters[index].active = true;
        });
        this.setState({
            letters,
        });
    };

    deactivateAllLetters = () => {
        const { letters } = this.state;
        letters.forEach((letter, index) => {
            letters[index].active = false;
        });
        this.setState({
            letters,
        });
    };

    handleLetterClick = (id) => {
        if (!isMobile()) {
            return;
        }

        const { letters, lettersInSlots } = this.state;
        const letterSelected = letters
            .find((el) => el.id === id);

        this.toggleLettersActiveState(id);
        const updatedLettersInSlots = [...lettersInSlots, letterSelected];

        this.setState({
            lettersInSlots: updatedLettersInSlots,
            currentAnswer: [...updatedLettersInSlots],
        }, () => {
            if (updatedLettersInSlots.length === WORD_LENGTH) {
                this.setState({
                    isSubmitVisible: true,
                });
            }
        });
    };

    handleDragEnd = (result) => {
        const { source, destination, draggableId } = result;
        const { letters } = this.state;

        if (!destination || destination.index === source.index) {
            return;
        }

        const movedLetter = letters[source.index];
        const updatedLetters = letters
            .filter((letter) => letter.id !== draggableId);
        updatedLetters.splice(destination.index, 0, movedLetter);

        this.setState({
            letters: updatedLetters,
            currentAnswer: [...updatedLetters],
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
        const { currentAnswer } = this.state;
        const { dispatch, history } = this.props;

        dispatch(submitAnswer(this.joinLetters(currentAnswer)));
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
        const {
            letters,
            lettersInSlots,
            isSubmitVisible,
            dragDisabled,
        } = this.state;


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
                                dragDisabled={dragDisabled}
                                dragEnd={this.handleDragEnd}
                            />
                        )
                        : (
                            <Submit
                                onSubmit={this.onSubmit}
                                onCancel={this.onCancel}
                                showCancel={dragDisabled}
                            />
                        )
                }
                {
                    !dragDisabled
                        ? (
                            <Submit
                                onSubmit={this.onSubmit}
                                onCancel={this.onCancel}
                                showCancel={dragDisabled}
                            />
                        )
                        : null
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
