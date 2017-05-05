"use strict";

import { roundToFloat16Bits, convertNumber } from "./lib";


/**
 * returns the nearest half precision float representation of a number.
 * @param {number} num 
 */
export default function hfround(num) {
    num = Number(num);

    // for optimization
    if(!Number.isFinite(num) || num === 0) {
        return num;
    }

    const x16 = roundToFloat16Bits(num);
    return convertNumber(x16);
}