import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Gallery from './components/Gallery/Gallery';
import Music from './components/Music/Music';
import Settings from './components/Settings/Setting';
import {Route} from "react-router-dom";
import News from './components/News/News';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login';

import 'antd/dist/antd.css';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const App = (props) => {
  return (

    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    
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

export default App;
