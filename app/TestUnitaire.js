import {expect} from 'chai';
import {parseTimeToSeconds} from '../../index.js';

describe('index.js', () => {
    describe('#NomFonction', () => {
        it('Ce que cela doit retourner', () => {
            expect(NomFonction('TrucAtester')).to.be.equal(CeAquoiCaDoitEtreEgale);
        });

        it('Doit retourner une erreur', () => {
            expect(NomFonction('non')).to.be.equal(Number.NaN);
            expect(NomFonction('')).to.be.equal(Number.NaN);
        });
    });
});