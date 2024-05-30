/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
array:NFT_s

2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
    

3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let nft_s = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (nftName, description, createdBy, ownedBy, dateOfCreation) {
    let nft = {
      nftName,
      description,
      createdBy,
      ownedBy,
      dateOfCreation
    };

    nft_s.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
   nft_s.forEach((nft,index) =>{
      console.log(
         `NFT NUMBER: ${index+1}
            Name : ${nft.nftName}
            Description : ${nft.description}
            Creator : ${nft.createdBy}
            Owner : ${nft.ownedBy}
            Date of creation : ${nft.dateOfCreation}
         `
      )
   });
   
}



// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   let length =  nft_s.length;
   return length;
}

// call your functions below this line

mintNFT('Piece 1','First nft','Anisha','Anisha','2024-01-01');
mintNFT('Piece 2','Second nft','Anamika','Anisha','2024-03-02');
mintNFT('Piece 3','Third nft','Sonali','Sonali','2024-05-04');

console.log("Listing all NFTs");
listNFTs();

console.log("Total number of supply:"+ getTotalSupply());