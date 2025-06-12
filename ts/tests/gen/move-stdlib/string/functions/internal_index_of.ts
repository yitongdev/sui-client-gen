import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface InternalIndexOfArgs {
  v: Array<number | TransactionArgument> | TransactionArgument;
  r: Array<number | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `internal_index_of`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::string`
 *
 * @param tx - The transaction object
 * @param v - Function parameter
 * @param r - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function internalIndexOf(tx: Transaction, args: InternalIndexOfArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::string::internal_index_of`,
    arguments: [pure(tx, args.v, `vector<u8>`), pure(tx, args.r, `vector<u8>`)],
  });
}
