import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export interface G1DivArgs {
  e1: TransactionObjectInput;
  e2: TransactionObjectInput;
}

/**
 * Move function: `g1_div`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::bls12381`
 *
 * @param tx - The transaction object
 * @param e1 - Function parameter
 * @param e2 - Function parameter
 */
export function g1Div(tx: Transaction, args: G1DivArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::bls12381::g1_div`,
    arguments: [obj(tx, args.e1), obj(tx, args.e2)],
  });
}
