import cryptoJs from "crypto-js";

export default function mineBlock(nonce = 0, blockID, message, previousHash) {
  if (blockID === "" || message === "") {
    return null;
  }

  // stuff used to find block
  // stuff inside block: id, nonce, data, previousHash, hash
  let found = false;
  let hash;
  let leadingChars;
  let difficulty = 2;

  //if (blockchain.length === 1) {
  //  found = true;
  //}

  if (found) {
    return hash;
  }

  while (!found) {
    nonce += 1;
    hash = cryptoJs.SHA256(nonce + blockID + message + previousHash).toString();
    leadingChars = hash.slice(0, difficulty);
    found =
      leadingChars === "00" // make this "000" if difficulty = 3
        ? true // exits loop
        : false;
  }

  //console.log("MINED BLOCK!!!");
  //console.log("HASH", hash);
  //console.log("NONCE", nonce);

  return { hash, previousHash, nonce };
}
