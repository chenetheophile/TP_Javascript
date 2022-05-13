import * as R from 'ramda';
import {transformCSVText} from './csv-to-array.js';

const nbPiocheAleatoireDataset = 10;

const datasetAvecColonne = transformCSVText;

const dataset = R.pipe(
    R.drop(1),
    R.dropLast(1),
)(datasetAvecColonne);

const findClassColumnIndex = R.pipe(
    R.indexOf('Class'),
)(datasetAvecColonne[0]);

const getClassOfIndex = R.pipe(
    R.nth(R.__, datasetAvecColonne),
    R.ifElse(R.pipe(
            R.length(),
            R.equals(1),
        ),
        R.or(R.isEmpty(), R.isNil()),
        R.nth(findClassColumnIndex)),
);

const classDataset = R.pipe(
    R.length(),
    R.subtract(R.__, 1),
    R.times(getClassOfIndex),
    R.drop(1),
    R.uniq(),
)(datasetAvecColonne);

const nbClassDataset = R.length(classDataset);

const nbElementDataset = R.length(dataset);

const randomInt = R.pipe(
    Math.random,
    R.multiply(nbElementDataset),
    Math.floor,
);

const getRandomDatasetElement = R.pipe(
    randomInt,
    R.nth(R.__, dataset),
);
const getRandomDatasetType = R.pipe(
    getRandomDatasetElement,
    R.last(),
);

const tableauObservationEquilibre = R.repeat(nbPiocheAleatoireDataset, nbClassDataset);

const tableauObservationReel = R.pipe(
    R.multiply(nbPiocheAleatoireDataset),
    R.times(getRandomDatasetType),
    R.sort((a, b) => a.localeCompare(b)),
    R.groupWith(R.equals()),
    R.flatten(),
    R.countBy(R.identity()),
    R.values(),
)(nbClassDataset);

const getNumbersOfDataset = R.pipe(
    R.length(),
    R.times(R.pipe(
        R.nth(R.__, dataset),
        R.map(Number),
        R.take(findClassColumnIndex),
        R.concat(R.pipe(
            R.length(),
            R.subtract(findClassColumnIndex),
            R.multiply(-1),
            R.drop(dataset),
        )(dataset))),
    ),
)(dataset);

const getNumberOfColumn = R.pipe(
    R.head(),
    R.length(),
    R.subtract(1),
    R.multiply(-1),
)(dataset);
export {tableauObservationEquilibre, tableauObservationReel, nbClassDataset, getNumbersOfDataset, getNumberOfColumn};
