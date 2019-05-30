import React from 'react';
import {connect} from "react-redux";
import './index.css';
import {RigInfoState, MemoState} from "./store/types";
import {AppState} from "./store";
import {
    RemoveMemoActionCreator,
    GetMemoAsyncDispatchCreator,
    GetRigInfoAsyncDispatchCreator
} from "./store/actions";
import {MemoType} from "./connector/pdsaTypes";

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
                <div>
                    <p>Rig Information: </p>
                    <ul>
                        <li>Well Name: {this.props.rigInfo.info.name}</li>
                        <li>Time Zone: {this.props.rigInfo.info.timeZone}</li>
                        <li>Operator: {this.props.rigInfo.info.operator}</li>
                        <li>Status: {this.props.rigInfo.info.status}</li>
                    </ul>
                </div>

                <p>We have {this.props.memo.memos.length} memos</p>

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
