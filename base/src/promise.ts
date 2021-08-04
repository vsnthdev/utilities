/*
 *  This file contains utility functions that work with a promise.
 *  Created On 04 August 2021
 */

export interface HandlePromiseImpl {
    err?: any
    returned?: any
}

// handle() is a utility function that will suppress a promise's rejection.
// Such that we don't need to use Try/Catch and use an if statement instead.
export const handle = async (
    promiseToHandle: Promise<any>,
): Promise<HandlePromiseImpl> => {
    return new Promise(r => {
        promiseToHandle
            .catch(err => {
                r({
                    err,
                })
            })
            .then(returned => {
                r({
                    returned,
                })
            })
    })
}
