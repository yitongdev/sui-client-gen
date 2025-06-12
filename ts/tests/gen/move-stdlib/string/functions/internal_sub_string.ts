import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface InternalSubStringArgs {
  v: Array<number | TransactionArgument> | TransactionArgument;
  i: bigint | TransactionArgument;
  j: bigint | TransactionArgument;
}

/**
 * Move function: `internal_sub_string`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::string`
 *
 * @param tx - The transaction object
 * @param v - Function parameter
 * @param i - Function parameter
 * @param j - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function internalSubString(tx: Transaction, args: InternalSubStringArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::string::internal_sub_string`,
    arguments: [pure(tx, args.v, `vector<u8>`), pure(tx, args.i, `u64`), pure(tx, args.j, `u64`)],
  });
}
