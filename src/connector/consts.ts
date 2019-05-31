const PDSA_PROTOCOL_WSS = "wss://";

const PDSA_PROTOCOL_HTTPS = "https://";

const PDSA_HOST: string = "kyou-1000hp.int.pason.com";

export const PDSA_GET_RIGACTIVITY: string = `${PDSA_PROTOCOL_HTTPS}${PDSA_HOST}/pdsa/rwa/v/rigactivity`;

export const PDSA_GET_ALL_MEMOS: string = `${PDSA_PROTOCOL_HTTPS}${PDSA_HOST}/pdsa/graphql?query=query { memos (startCreationTime: 0, endCreationTime: 9999999999999) { identifier  creationTime  displayTime text }}`;

export const PDSA_REALTIME_SUBSCRIPTION: string = `${PDSA_PROTOCOL_WSS}${PDSA_HOST}/pdsa/subscription`
