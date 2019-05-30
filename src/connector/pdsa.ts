import {PDSA_GET_ALL_MEMOS, PDSA_GET_RIGACTIVITY} from "./consts";

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
