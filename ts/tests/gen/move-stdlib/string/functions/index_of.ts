import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { String } from "../index.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface IndexOfArgs {
  s: string | TransactionArgument;
  r: string | TransactionArgument;
}

/**
 * Move function: `index_of`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::string`
 *
 * @param tx - The transaction object
 * @param s - Function parameter
 * @param r - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function indexOf(tx: Transaction, args: IndexOfArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::string::index_of`,
    arguments: [pure(tx, args.s, `${String.$typeName}`), pure(tx, args.r, `${String.$typeName}`)],
  });
}
