import * as React from 'react';
import './Nav.css';
import Home from '../Home/Home';
import UploadAntwoorden from '../UploadAntwoorden/UploadAntwoorden';
import QuizVragen from '../QuizVragen/QuizVragen';
import Nakijken from '../Nakijken/Nakijken';
import ToonUitslag from '../ToonUitslag/ToonUitslag';
import SpeelPubQuiz from '../SpeelPubQuiz/SpeelPubQuiz';

class Nav extends React.Component <{}, { currentPage: string}> {
    constructor(props: any) {
        super(props);
        this.state = {
            currentPage: 'home'
        };
    }

    public render() {
        return (
            <div>
                <ul>
                    <li onClick={() => {this.determineContent('home')}}>Home</li>
                    <li onClick={() => {this.determineContent('uploadAntwoorden')}}>Upload antwoordvellen</li>
                    <li onClick={() => {this.determineContent('quizVragen')}}>Quiz vragen</li>
                    <li onClick={() => {this.determineContent('nakijken')}}>Nakijken</li>
                    <li onClick={() => {this.determineContent('toonUitslag')}}>Toon uitslag</li>
                    <li onClick={() => {this.determineContent('speelPubQuiz')}}>Speel pubquiz</li>
                </ul>
                {this.state.currentPage == 'home' && <Home/>}
                {this.state.currentPage == 'uploadAntwoorden' && <UploadAntwoorden/>}
                {this.state.currentPage == 'quizVragen' && <QuizVragen/>}
                {this.state.currentPage == 'nakijken' && <Nakijken/>}
                {this.state.currentPage == 'toonUitslag' && <ToonUitslag/>}
                {this.state.currentPage == 'speelPubQuiz' && <SpeelPubQuiz/>}
            </div>
        );
    }

    public determineContent(content: string){
        this.setState({currentPage: content})
    }
}

export default Nav;
