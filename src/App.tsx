import React from 'react';
import {connect} from "react-redux";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import './index.css';
import {TraceState} from "./store/types";
import {AppState} from "./store";
import {AddTraceActionCreator, RemoveTraceActionCreator, AsyncActionCreator} from "./store/actions";

interface AppProps {
    addTrace: typeof AddTraceActionCreator;
    removeTrace: typeof RemoveTraceActionCreator;
    addAsyncInfo: any;// ThunkAction<void, AppState, null, Action<string>>;
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
    }

    removeOneTrace = () => {
        console.log('removeOneTrace()');
        this.props.removeTrace();
    }

    addSomeAsyncInfo = () => {
        console.log('addAsyncInfo');
        this.props.addAsyncInfo();
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
                <p>
                    <button className="button" onClick={this.addSomeAsyncInfo}>Add Async Info</button>
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
    addAsyncInfo: AsyncActionCreator,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
