import * as React from 'react';
import './Home.css';


class Home extends React.Component<{},{ error: any,isLoaded: boolean,data: any}> {
    constructor(props: any) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: []
        };
    }
    componentDidMount() {
        this.getData()
    }

    getData() {
        fetch("http://127.0.0.1:5000/api/v1.0/teams")
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        data: data
                    });
                    console.log(this.state.data);
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    public render() {
        return (
            <div>
                <button><a>Button Home</a></button>
            </div>
        )
    }
}

export default Home;
