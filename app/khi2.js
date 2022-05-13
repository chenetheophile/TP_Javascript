import * as chiSquaredTest from 'chi-sq-test';
import {tableauObservationEquilibre, tableauObservationReel, nbClassDataset} from './dataset-operation.js';

const testEquilibre = chiSquaredTest.gof(tableauObservationEquilibre, tableauObservationReel, -(nbClassDataset - 1));

export {testEquilibre};
