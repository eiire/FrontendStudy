// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions"
// for the development and functioning of living organisms.

String.prototype['map'] = Array.prototype.map
function DNAStrand(dna){
    return dna.map(ch => {
        if (ch === 'A') return 'T'
        if (ch === 'T') return 'A'
        if (ch === 'C') return 'G'
        if (ch === 'G') return 'C'
    }).join('')
}