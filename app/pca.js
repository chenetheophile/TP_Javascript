import * as PCA from 'ml-pca';
import * as R from 'ramda';
import {getNumbersOfDataset, getNumberOfColumn} from './dataset-operation.js';

const PrincipalComponentAnalysis = new PCA.PCA(getNumbersOfDataset);
const generateRandom = R.pipe(
    Math.random,
    R.multiply(10),
);
const generatePoint = R.pipe(
    R.identity(),
    R.times(generateRandom),
)(getNumberOfColumn);
const prediction = PrincipalComponentAnalysis.predict([generatePoint]).to1DArray();

const CumulativeVariance = PrincipalComponentAnalysis.getCumulativeVariance();
const EingenValues = PrincipalComponentAnalysis.getEigenvalues();
const EingenVectors = PrincipalComponentAnalysis.getEigenvectors();
const getExplainedVariance = PrincipalComponentAnalysis.getExplainedVariance();
const getLoadings = PrincipalComponentAnalysis.getLoadings();
const getStandardDeviations = PrincipalComponentAnalysis.getStandardDeviations();

export {
    PrincipalComponentAnalysis,
    prediction,
    CumulativeVariance,
    EingenValues,
    EingenVectors,
    getLoadings,
    getExplainedVariance,
    getStandardDeviations,
};
