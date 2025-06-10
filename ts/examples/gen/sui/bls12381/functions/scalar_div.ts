import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export interface ScalarDivArgs {
  e1: TransactionObjectInput;
  e2: TransactionObjectInput;
}

/**
 * Move function: `scalar_div`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::bls12381`
 *
 * @param tx - The transaction object
 * @param e1 - Function parameter
 * @param e2 - Function parameter
 */
export function scalarDiv(tx: Transaction, args: ScalarDivArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::bls12381::scalar_div`,
    arguments: [obj(tx, args.e1), obj(tx, args.e2)],
  });
}
