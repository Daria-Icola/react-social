import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Gallery from './components/Gallery/Gallery';
import Music from './components/Music/Music';
import Settings from './components/Settings/Setting';
import {Route, withRouter} from "react-router-dom";
import News from './components/News/News';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login';
import {initializeApp} from './redux/app-reducer';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';


class App extends Component {
        componentDidMount() {
                this.props.initializeApp();
        }

        render() {
                if (!this.props.initialized) {
                        return <Preloader />
                }

                return (
                        <Layout>
                        <div className='app-wrapper'>
                        <HeaderContainer />
                        <Navbar />
                        <div className='app-wrapper-content'>
                                {/* <Route path='/profile' component={Profile} />
                                <Route path='/dialogs' component={Dialogs} />*/}

                                <Route path='/profile/:userId?' 
                                        render={ () => <ProfileContainer/> }/>
                                <Route path='/users' 
                                        render={ () => <UsersContainer /> }/>
                                <Route path='/dialogs' 
                                        render={ () => <DialogsContainer /> }/>
                                <Route path='/gallery' 
                                        render={ () => <Gallery /> }/>
                                <Route path='/music' 
                                        render={ () => <Music /> }/>
                                <Route path='/news' 
                                        render={ () => <News /> }/>
                                <Route path='/login' 
                                        render={ () => <Login /> }/>

                        </div>
                        </div>
                        </Layout>
                )
        }
}

const mapStateToProps = (state) => ({
        initialized: state.app.initialized
})

export default compose(
        withRouter, 
        connect(mapStateToProps, {initializeApp}))(App);
