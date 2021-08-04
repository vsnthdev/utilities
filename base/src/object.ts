/*
 *  Utility functions related to Objects.
 *  Created On 04 August 2021
 */

export const renameKey = (from, to, obj) => {
    obj[to] = obj[from]
    delete obj[from]
}
