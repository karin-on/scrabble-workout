import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Home.scss';

const Home = () => (
    <main className={classes.Home}>
        <section className={classes.Hero}>
            <h2 className={classes.Header}>Home Screen</h2>
        </section>
        <section className={classes.StartGame}>
            <Link to="/game" className={classes.StartGameAction}>
                Zagraj
            </Link>
        </section>
    </main>
);

export { Home };
