import React from 'react'

import firebase from '../../Firebase';
import './Home.sass';

const Home = () => {
    return (
        <section>
            <button onClick = { () => firebase.auth().signOut()}>
                Log Out
            </button>
        </section>
    );
};

export default Home;