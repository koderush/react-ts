import React from 'react';
import {connect} from "react-redux";
import './index.css';
import {RigInfoState, MemoState, MemoType} from "./store/types";
import {AppState} from "./store";
import {
    RemoveMemoActionCreator,
    GetMemoAsyncDispatchCreator,
    GetRigInfoAsyncDispatchCreator
} from "./store/actions";

interface AppProps {
    removeMemo: typeof RemoveMemoActionCreator;
    getMemo: any;
    getRigInfo: any;
    memo: MemoState;
    rigInfo: RigInfoState;
}

class App extends React.Component<AppProps> {
    getMemosSize() {
        return this.props.memo.memos.length;
    }

    renderMemoList() {
        return (
            <>
                {
                    this.props.memo.memos.map((memo: MemoType, index: number) =>
                        <li key={`k-${index}`}>{memo.identifier}, {memo.text}, {memo.creationTime}</li>)
                }
            </>
        )
    };

    componentDidMount() {
        // This is to demo automatically get rig info when the page is loaded.
        this.props.getRigInfo();
    }

    render() {
        return (
            <>
                <p>
                    Rig Info: {this.props.rigInfo.info}
                </p>
                {this.getMemosSize() > 0 ? <p>We have {this.props.memo.memos.length} memos</p> :
                    <p>We have no memos.</p>}
                <p>
                    <button className="button" onClick={this.props.getMemo}>Get Memo</button>
                </p>
                <p>
                    <button className="button" onClick={this.props.removeMemo}>Remove Memo (from client)</button>
                </p>
                <ul>{this.renderMemoList()}</ul>
            </>
        )
    };
}


const mapStateToProps = (appState: AppState) => ({
    memo: appState.memoReducer,
    rigInfo: appState.rigInfoReducer,
})

const mapDispatchToProps = {
    getMemo: GetMemoAsyncDispatchCreator,
    removeMemo: RemoveMemoActionCreator,
    getRigInfo: GetRigInfoAsyncDispatchCreator,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
