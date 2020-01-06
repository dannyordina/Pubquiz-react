import * as React from 'react';
import './ToonUitslag.css';


class ToonUitslag extends React.Component {
    public render() {
        return (
            <div>
                <ul ng-repeat="team in revealteams">
                    <li>
                        <span className="teamname">//team.teamname//</span>
                        <span className="score">//team.score//</span>
                    </li>
                </ul>
            </div>
        )
    }
}

export default ToonUitslag;
