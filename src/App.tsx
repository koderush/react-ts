import React from 'react';
import {connect} from "react-redux";
import './index.css';
import {TraceState} from "./store/types";
import {AppState} from "./store";
import {AddTraceActionCreator, RemoveTraceActionCreator, thunkAddTrace} from "./store/actions";

interface AppProps {
    addTrace: typeof AddTraceActionCreator;
    removeTrace: typeof RemoveTraceActionCreator;
    addAsynchTrace: any;
    trace: TraceState;
}

class App extends React.Component<AppProps> {
    getTracesSize() {
        return this.props.trace.traces.length;
    }

    getTraceList() {
        return (
            <>
                {
                    this.props.trace.traces.map((trace: string, index: number) =>
                        <li key={`k-${index}`}>{trace}</li>)
                }
            </>
        )
    };

    addOneTrace = () => {
        console.log('addOneTrace()');
        this.props.addTrace('new trace');

        this.props.addAsynchTrace();
    }

    removeOneTrace = () => {
        console.log('removeOneTrace()');
        this.props.removeTrace();
    }

    render() {
        return (
            <>
                <h1>
                    Product: EDR
                </h1>
                {this.getTracesSize() > 0 ? <p>We have {this.props.trace.traces.length} traces</p> :
                    <p>We have no traces.</p>}
                <p>
                    <button className="button" onClick={this.addOneTrace}>Add Trace</button>
                </p>
                <p>
                    <button className="button" onClick={this.removeOneTrace}>Remove Trace</button>
                </p>
                <ol>{this.getTraceList()}</ol>
            </>
        )
    };
}


const mapStateToProps = (appState: AppState) => ({
    trace: appState.traceReducer,
})

const mapDispatchToProps = {
    addTrace: AddTraceActionCreator,
    removeTrace: RemoveTraceActionCreator,
    addAsynchTrace: thunkAddTrace,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
