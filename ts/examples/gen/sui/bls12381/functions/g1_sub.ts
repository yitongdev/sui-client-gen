import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export interface G1SubArgs {
  e1: TransactionObjectInput;
  e2: TransactionObjectInput;
}

/**
 * Move function: `g1_sub`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::bls12381`
 *
 * @param tx - The transaction object
 * @param e1 - Function parameter
 * @param e2 - Function parameter
 */
export function g1Sub(tx: Transaction, args: G1SubArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::bls12381::g1_sub`,
    arguments: [obj(tx, args.e1), obj(tx, args.e2)],
  });
}
