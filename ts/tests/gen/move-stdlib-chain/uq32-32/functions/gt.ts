import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface GtArgs {
  uq32321: TransactionObjectInput;
  uq32322: TransactionObjectInput;
}

/**
 * Move function: `gt`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::uq32_32`
 *
 * @param tx - The transaction object
 * @param uq32321 - Function parameter
 * @param uq32322 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function gt(tx: Transaction, args: GtArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::uq32_32::gt`,
    arguments: [obj(tx, args.uq32321), obj(tx, args.uq32322)],
  });
}
