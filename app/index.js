import * as R from 'ramda';
import * as iris from 'ml-dataset-iris';
import * as chiSquaredTest from 'chi-sq-test';
import * as PCA from 'ml-pca';

const dataset = iris;

const nbPiocheAleatoireDataset = 1000;

const classDataset = R.pipe(
    dataset.getDistinctClasses,
);

const nbClassDataset = R.pipe(
    classDataset,
    R.length(),
);

const nbElementDataset = R.pipe(
    dataset.getDataset,
    R.length(),
);

const randomInt = R.pipe(
    Math.random,
    R.multiply(nbElementDataset(dataset.getDataset())),
    Math.floor,
);

const getRandomDatasetElement = R.pipe(
    randomInt,
    R.nth(R.__, dataset.getDataset()),

);
const getRandomDatasetType = R.pipe(
    getRandomDatasetElement,
    R.last(),
);

const tableauObservationEquilibre = R.pipe(
    nbClassDataset,
    R.repeat(nbPiocheAleatoireDataset),

);
const tableauObservationReel = R.pipe(
    nbClassDataset,
    R.multiply(nbPiocheAleatoireDataset),
    R.times(getRandomDatasetType),
    R.sort((a, b) => a.localeCompare(b)),
    R.groupWith(R.equals()),
    R.flatten(),
    R.countBy(R.identity()),
    R.values(),
);

const testEquilibre = chiSquaredTest.gof(tableauObservationEquilibre(), tableauObservationReel(), -(nbClassDataset() - 1));

console.log(nbClassDataset());
console.log(classDataset());
console.log(nbElementDataset());
console.log(randomInt());
console.log(getRandomDatasetElement());
console.log(getRandomDatasetType());
console.log(tableauObservationEquilibre());
console.log(tableauObservationReel());
console.log(testEquilibre);

const getPoint=[1,0,2,1];

const PrincipalComponentAnalysis = new PCA.PCA(dataset.getNumbers());
const prediction=PrincipalComponentAnalysis.predict([getPoint]).to1DArray();
const CumulativeVariance=PrincipalComponentAnalysis.getCumulativeVariance();
const EingenValues =PrincipalComponentAnalysis.getEigenvalues();
const EingenVectors =PrincipalComponentAnalysis.getEigenvectors();
const getExplainedVariance=PrincipalComponentAnalysis.getExplainedVariance();
const getLoadings=PrincipalComponentAnalysis.getLoadings();
const getStandardDeviations=PrincipalComponentAnalysis.getStandardDeviations();

console.log(PrincipalComponentAnalysis);
console.log(prediction);
console.log(CumulativeVariance);
console.log(EingenValues);
console.log(EingenVectors);
console.log(getExplainedVariance);
console.log(getLoadings);
console.log(getStandardDeviations);
