import { PUBLISHED_AT } from "../../constants.js";
import { Transaction } from "@mysten/sui/transactions";

/**
 * Move function: `g2_generator`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::bls12381`
 *
 * @param tx - The transaction object
 */
export function g2Generator(tx: Transaction) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::bls12381::g2_generator`,
    arguments: [],
  });
}
