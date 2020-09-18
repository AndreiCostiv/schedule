import React from 'react'
import firebase from '../../Firebase';
// Route layout:
import './Home.sass';
// Components:
import Header from '../../Components/UIComponents/Header';

const Home = () => {
    return (
        <section>
            <Header size = {1}>Schedule</Header>

            <button onClick = { () => firebase.auth().signOut()}>
                Log Out
            </button>
        </section>
    );
};

export default Home;