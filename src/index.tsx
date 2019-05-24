import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import * as serviceWorker from './serviceWorker';

interface EDRState {
    product: string;
    subtitle: string;
    traces: string[];
}

class EDRComponent extends React.Component {
    state: EDRState = {
        product: "EDR",
        subtitle: "Electronics Drilling Recorder",
        traces: ["Bit Depth", "Flow"],
    }
    getTracesSize() {
        return this.state.traces.length;
    }

    getTraceList() {
        return (
            <>
                {
                    this.state.traces.map((trace: string, index: number) =>
                        <li key={`k-${index}`}>{trace}</li>)
                }
            </>
        )
    };

    addTrace = () => {
        console.log("11001");
        this.setState({
            traces: [...this.state.traces, 'traceName'],
        });
    }

    render() {
        return (
            <>
                <h1>
                    Product: {this.state.product}
                </h1>
                {this.state.subtitle && <h2>Subtitle: {this.state.subtitle}</h2>}
                {this.getTracesSize() > 0 ? <p>We have {this.state.traces.length} traces</p> :
                    <p>We have no traces.</p>}
                <button className="button" onClick={this.addTrace}>Add Trace</button>
                <ol>{this.getTraceList()}</ol>
            </>
        )
    };
}

const pageContent = (
    <div className="App">
        <EDRComponent />
    </div>
);

ReactDOM.render(pageContent, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
