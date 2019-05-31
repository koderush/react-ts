import { PDSA_GET_ALL_MEMOS, PDSA_GET_RIGACTIVITY, PDSA_REALTIME_SUBSCRIPTION } from "./consts";
import { RealtimeMessageType } from "./pdsaTypes"

export async function pdsaGetMemos(): Promise<string> {
    return pdsaGet(PDSA_GET_ALL_MEMOS);
}

export async function pdsaGetRigInfo(): Promise<string> {
    return pdsaGet(PDSA_GET_RIGACTIVITY);
}

async function pdsaGet(url: string): Promise<string> {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.text() as Promise<string>
        })
}

export class RealtimeUpdater {

    websocket: WebSocket;

    updateRealtime: any;

    constructor(updateRealtime: any) {
        this.websocket = new WebSocket(PDSA_REALTIME_SUBSCRIPTION);

        this.websocket.onclose = function () {
            console.log(`WebSocket connection to ${PDSA_REALTIME_SUBSCRIPTION} is closed`);
        };

        this.websocket.onopen = this.onOpen;

        this.websocket.onmessage = function (msg) {

            // console.log(msg.data);

            const realtimeMessage: RealtimeMessageType = JSON.parse(msg.data);
            updateRealtime(realtimeMessage);
        };
    }

    onOpen = () => {
        let request = {
            "requestId": 1559258710202,
            "messageTime": 1559258710202,
            "service": "realtimedata",
            "detail": {
                "messageType": "RealTimeDataSubscriptionRequest",
                "modificationType": "add",
                "channels": [
                    {
                        "identifier": "Channel.EDR.HOLE_DEPTH",
                        "summarization": "MAX"
                    },
                    {
                        "identifier": "Channel.EDR.BIT_DEPTH",
                        "summarization": "MAX"
                    },
                    {
                        "identifier": "Channel.EDR.HOOK_LOAD",
                        "summarization": "MAX"
                    },
                    {
                        "identifier": "Channel.EDR.STROKES_1",
                        "summarization": "MAX"
                    },
                    {
                        "identifier": "Channel.EDR.ROTARY",
                        "summarization": "MAX"
                    },
                    {
                        "identifier": "Channel.EDR.WT_ON_BIT",
                        "summarization": "MAX"
                    },
                    {
                        "identifier": "Channel.EDR.ROP",
                        "summarization": "MAX"
                    },
                    {
                        "identifier": "Channel.EDR.FLOW",
                        "summarization": "MAX"
                    },
                    {
                        "identifier": "Channel.EDR.TOTAL_MUD",
                        "summarization": "MAX"
                    },
                    {
                        "identifier": "Channel.EDR.TRIP_MUD",
                        "summarization": "MAX"
                    },
                    {
                        "identifier": "Channel.EDR.PUMP_RATE",
                        "summarization": "MAX"
                    },
                    {
                        "identifier": "Channel.EDR.BLOCK_HT",
                        "summarization": "MAX"
                    },
                ],
                "domainType": "time",
                "resolution": 1000
            }
        };

        this.subscribe(JSON.stringify(request));
    }

    subscribe = (request: string) => {
        this.websocket.send(request);
    }
}