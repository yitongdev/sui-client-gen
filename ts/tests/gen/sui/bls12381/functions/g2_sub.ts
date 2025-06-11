import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface G2SubArgs {
  e1: TransactionObjectInput;
  e2: TransactionObjectInput;
}

/**
 * Move function: `g2_sub`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::bls12381`
 *
 * @param tx - The transaction object
 * @param e1 - Function parameter
 * @param e2 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function g2Sub(tx: Transaction, args: G2SubArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::bls12381::g2_sub`,
    arguments: [obj(tx, args.e1), obj(tx, args.e2)],
  });
}
