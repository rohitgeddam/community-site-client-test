import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


// import component
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// import pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import EventsPage from './pages/EventsPage';

import CollabPage from './pages/CollabPage';
import BadgePage from './pages/BadgePage';
import UserPage from './pages/UserPage';


import Layout from './components/Layout/Layout';


export default function Router() {
    return (
        
        <BrowserRouter>
            <Header/>
            <Layout>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route  path='/about' component={AboutPage}/>
                    <Route  path='/blog' component={BlogPage}/>
                    <Route  path='/contact' component={ContactPage}/>
                    <Route  path='/events' component={EventsPage}/>

                    <Route  path='/collab' component={CollabPage}/>
                    <Route  path='/badges' component={BadgePage}/>
                    <Route  path='/user' component={UserPage}/>

                </Switch>
            </Layout>
            <Footer/>
        </BrowserRouter>
        
    );
}

