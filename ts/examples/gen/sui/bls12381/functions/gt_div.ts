import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export interface GtDivArgs {
  e1: TransactionObjectInput;
  e2: TransactionObjectInput;
}

/**
 * Move function: `gt_div`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::bls12381`
 *
 * @param tx - The transaction object
 * @param e1 - Function parameter
 * @param e2 - Function parameter
 */
export function gtDiv(tx: Transaction, args: GtDivArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::bls12381::gt_div`,
    arguments: [obj(tx, args.e1), obj(tx, args.e2)],
  });
}
