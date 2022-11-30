import cryptoJs from "crypto-js";

export default function checkHash(
  nonce,
  blockID,
  message,
  previousHash,
  currentHash
) {
  //  if (blockID === "" || message === "") {
  //    return null;
  //  }

  // stuff used to find block
  // stuff inside block: id, nonce, data, previousHash, hash
  let sameHash = false;
  let hash;

  hash = cryptoJs.SHA256(nonce + blockID + message + previousHash).toString();
  console.log(hash);
  console.log(currentHash);
  if (hash === currentHash) {
    sameHash = true;
  }

  //console.log("MINED BLOCK!!!");
  //  console.log("HASH", hash);
  //console.log("NONCE", nonce);

  return sameHash;
}
