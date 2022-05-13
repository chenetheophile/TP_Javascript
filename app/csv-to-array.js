import fs from 'node:fs';
import * as R from 'ramda';
import {Path, encode} from './common.js';

const data = R.pipe(
    fs.readFileSync,
)(Path, encode);

const transformCSVText = R.pipe(
    R.pipe(
        R.split('\n'),
        R.map(
            R.pipe(
                R.split(','),
                R.map(R.trim),
            ),
        ),
    ),
)(data);

export {transformCSVText};
