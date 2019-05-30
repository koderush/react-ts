
export const PDSA_HOST: string = "https://kyou-1000hp.int.pason.com";
export const PDSA_GET_RIGACTIVITY: string = `${PDSA_HOST}/pdsa/rwa/v/rigactivity`;
export const PDSA_GET_ALL_MEMOS: string = `${PDSA_HOST}/pdsa/graphql?query=query { memos (startCreationTime: 0, endCreationTime: 9999999999999) { identifier  creationTime  displayTime text }}`;

