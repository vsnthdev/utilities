/*
 *  This file contains some utility functions to time.
 *  Created On 04 August 2021
 */

export const sleep = (milliseconds: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export const setInterval = async (
    milliseconds: number,
    func: any,
): Promise<void> => {
    while (true) {
        await sleep(milliseconds)
        await func()
    }
}
