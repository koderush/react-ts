export interface MemoType {
    identifier: string;
    creationTime: number;
    displayTime: number;
    text: string;
}

export interface MemosType {
    memos: MemoType[];
}

export interface MemoResponseType {
    data: MemosType;
}

export interface WellSiteType {
    wellGuid: string;
    name: string,
    numGovt: string,
    timeZone: string,
    operator: string,
    dataHubOperatorIdentifier: number,
    spudTime: number,
    releaseTime: number,
    groundElevation: string,
    wellCrs: string,
    tightHoleStatus: string,
    status: string,
    wellSiteLocale: any;
    wellVisitUids: any;
    wellBoreUids: any;
    wellLocationUid: string,
    uid: any;
}

export interface RigActivityResponseType {
    wellLocation: any;
    rig: any;
    wellSite: WellSiteType;
    wellVisit: any;
    wellBore: any;
}

export interface RealtimeValueType {
    value: number;
    identifier: string;
    summarization: string;
}

export interface RealtimeMessageDetailType {
    messageType: string;
    domainType: string;
    resolution: number;
    values: RealtimeValueType[];
}

export interface RealtimeMessageType {
    messageTime: number;
    requestId: string;
    service: string;
    detail: RealtimeMessageDetailType;
}
