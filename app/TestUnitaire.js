import {expect} from 'chai';
import {testEquilibre} from '../../khi2.js';

describe('index.js', () => {
    describe('#testEquilibre', () => {
        it('Ce que cela doit retourner', () => {
            expect(testEquilibre).to.be.equal(Array);
        });

        it('Doit retourner une erreur', () => {
            expect(testEquilibre('non')).to.be.equal(TypeError);
        });
    });
});

