import * as React from 'react';
import './UploadAntwoorden.css';


class UploadAntwoorden extends React.Component {
    public render() {
        return (
        <div>
            <form action="/uploader" method="POST">
                <div>
                    <div>
                        <label >Select pubquiz files...  <input type="file" name="answersheets" id="answersheets"/> </label>
                    </div>
                </div>
                <button type="submit">Process pubquiz answer sheets</button>
            </form>
        </div>
        )
    }
}

export default UploadAntwoorden;
