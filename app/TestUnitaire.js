import {expect, it, describe} from 'chai';
import * as R from 'ramda';
import {testEquilibre} from '../app/khi2.js';
import {transformCSVText} from '../app/csv-to-array.js';
import {
    getNumberOfColumn,
    getNumbersOfDataset,
    nbClassDataset,
    tableauObservationEquilibre,
    tableauObservationReel,
} from '../app/dataset-operation.js';
import {
    CumulativeVariance,
    EingenValues,
    EingenVectors, getExplainedVariance,
    getLoadings, getStandardDeviations,
    prediction,
    PrincipalComponentAnalysis,
} from '../app/pca.js';

describe('khi2.js', () => {
    describe('testEquilibre', () => {
        it('Ce que cela doit retourner', () => {
            expect(R.type(testEquilibre)).to.be.equal(R.type({}));
        });

        // it('Doit retourner une erreur', () => {
        //     expect(testEquilibre()).to.throw('TypeError: testEquilibre is not a function');
        //
        // });
    });
});

describe('csv-to-array.js', () => {
    describe('transformCSVText', () => {
        it('Ce que cela doit retourner', () => {
            expect(R.type(transformCSVText)).to.be.equal(R.type([]));
        });
        // it('Doit retourner une erreur', () => {
        //     expect(transformCSVText('non')).to.be.equal(TypeError);
        // });
    });
});

describe('dataset_operations.js', () => {
    describe('tableauObservationEquilibre', () => {
        it('Ce que cela doit retourner', () => {
            expect(R.type(tableauObservationEquilibre)).to.be.equal(R.type([]));
        });

        // it('Doit retourner une erreur', () => {
        //     expect(tableauObservationEquilibre('non')).to.be.equal(TypeError);
        // });
    });
    describe('tableauObservationReel', () => {
        it('Ce que cela doit retourner', () => {
            expect(R.type(tableauObservationReel)).to.be.equal(R.type([]));
        });

        // it('Doit retourner une erreur', () => {
        //     expect(tableauObservationReel('non')).to.be.equal(TypeError);
        // });
    });
    describe('nbClassDataset', () => {
        it('Ce que cela doit retourner', () => {
            expect(R.type(nbClassDataset)).to.be.equal(R.type(1));
        });

        // it('Doit retourner une erreur', () => {
        //     expect(nbClassDataset('non')).to.be.equal(TypeError);
        // });
    });
    describe('getNumbersOfDataset', () => {
        it('Ce que cela doit retourner', () => {
            expect(R.type(getNumbersOfDataset)).to.be.equal(R.type([]));
        });

        // it('Doit retourner une erreur', () => {
        //     expect(getNumbersOfDataset('non')).to.be.equal(TypeError);
        // });
    });
    describe('getNumberOfColumn', () => {
        it('Ce que cela doit retourner', () => {
            expect(R.type(getNumberOfColumn)).to.be.equal(R.type(1));
        });

        // it('Doit retourner une erreur', () => {
        //     expect(getNumberOfColumn('non')).to.be.equal(TypeError);
        // });
    });
});

describe('pca.js', () => {
    describe('PrincipalComponentAnalysis', () => {
        it('Ce que cela doit retourner', () => {
            expect(R.type(PrincipalComponentAnalysis)).to.be.equal(R.type({}));
        });

        // it('Doit retourner une erreur', () => {
        //     expect(PrincipalComponentAnalysis('non')).to.be.equal(TypeError);
        // });
    });
    describe('prediction', () => {
        it('Ce que cela doit retourner', () => {
            expect(R.type(prediction)).to.be.equal(R.type([]));
        });

        // it('Doit retourner une erreur', () => {
        //     expect(prediction('non')).to.be.equal(TypeError);
        // });
    });
    describe('CumulativeVariance', () => {
        it('Ce que cela doit retourner', () => {
            expect(R.type(CumulativeVariance)).to.be.equal(R.type([]));
        });

        // it('Doit retourner une erreur', () => {
        //     expect(CumulativeVariance('non')).to.be.equal(TypeError);
        // });
    });
    describe('EingenValues', () => {
        it('Ce que cela doit retourner', () => {
            expect(R.type(EingenValues)).to.be.equal(R.type([]));
        });

        // it('Doit retourner une erreur', () => {
        //     expect(EingenValues('non')).to.be.equal(TypeError);
        // });
    });
    describe('EingenVectors', () => {
        it('Ce que cela doit retourner', () => {
            expect(R.type(EingenVectors)).to.be.equal(R.type({}));
        });

        // it('Doit retourner une erreur', () => {
        //     expect(EingenVectors('non')).to.be.equal(TypeError);
        // });
    });
    describe('getLoadings', () => {
        it('Ce que cela doit retourner', () => {
            expect(R.type(getLoadings)).to.be.equal(R.type({}));
        });

        // it('Doit retourner une erreur', () => {
        //     expect(getLoadings('non')).to.be.equal(TypeError);
        // });
    });
    describe('getExplainedVariance', () => {
        it('Ce que cela doit retourner', () => {
            expect(R.type(getExplainedVariance)).to.be.equal(R.type([]));
        });

        // it('Doit retourner une erreur', () => {
        //     expect(getExplainedVariance('non')).to.be.equal(TypeError);
        // });
    });
    describe('getStandardDeviations', () => {
        it('Ce que cela doit retourner', () => {
            expect(R.type(getStandardDeviations)).to.be.equal(R.type([]));
        });

        // it('Doit retourner une erreur', () => {
        //     expect(getStandardDeviations('non')).to.be.equal(TypeError);
        // });
    });
});
