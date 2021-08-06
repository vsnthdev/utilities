/*
 *  Utility functions usable for web environments.
 *  Created On 03 August 2021
 */

// $() basically acts like a smaller replacement
// to jQuery's $
// see https://twitter.com/vsnthdev/status/1400836076109852675
export const $ = s =>
    (a => (a.length > 1 ? a : a[0]))(document.querySelectorAll(s))

export * from '@vasanthdeveloper/utilities-base'
