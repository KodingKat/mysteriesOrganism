// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

// Factory function to simulate the specimen.
const pAequorFactory = (specimenNum, dna) =>( {
    specimenNum,
    dna,
    // Method to simulate the mutation of the specimen.
    mutate() {
        let newBase = returnRandBase();
        let randBaseIndex = Math.floor(Math.random() * this.dna.length);
        if (newBase === this.dna[randBaseIndex]) {
            this.mutate();
        } else {
            this.dna[randBaseIndex] = newBase;
        }
    },
    
    //Method to compare the DNA of different specimens.
    compareDNA(currDNA, simDNA) {
      let simDNACount = 0;
        for (let x=0; x<currDNA.length; x++) {
          if (currDNA[x] === simDNA[x]) {
            simDNACount +=1;
          }
        }
        let finalSimDNA = (simDNACount/currDNA.length)*100;
        console.log(`Specimen #1 and speciment #2 have ${finalSimDNA}% DNA in common.`)
    }
})