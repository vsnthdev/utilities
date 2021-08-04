/*
 *  Utility functions related to filesystem.
 *  Created On 04 August 2021
 */

import fs from 'fs/promises'
import { promise } from '@vasanthdeveloper/utilities-base'

export const exists = async (path): Promise<boolean> => {
    const exists = await promise.handle(fs.stat(path))

    if (exists.err) {
        return false
    } else {
        return true
    }
}
