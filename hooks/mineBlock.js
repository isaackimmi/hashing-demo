import cryptoJs from "crypto-js";

export default function mineBlock(block, message) {
  if (block === "" || message === "") {
    return null;
  }

  // Input Box 3
  //let msg = "genius josh, thank you...";

  // stuff used to find block
  let found = false;
  let nonce = 0;
  let hash;
  let leadingChars;
  let difficulty = 2;
  if (found) {
    return hash;
  }
  while (!found) {
    nonce += 1;
    hash = cryptoJs.SHA256(nonce + block + message).toString();
    leadingChars = hash.slice(0, difficulty);
    found =
      leadingChars === "00" // make this "000" if difficulty = 3
        ? true // exits loop
        : false;
  }

  console.log("MINED BLOCK!!!");
  console.log("HASH", hash);
  console.log("NONCE", nonce);

  return hash;
}
