import { PUBLISHED_AT } from "../../constants.js";
import { Transaction } from "@mysten/sui/transactions";

/**
 * Move function: `g1_generator`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::bls12381`
 *
 * @param tx - The transaction object
 */
export function g1Generator(tx: Transaction) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::bls12381::g1_generator`,
    arguments: [],
  });
}
