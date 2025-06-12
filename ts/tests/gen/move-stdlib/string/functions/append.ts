import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { String } from "../index.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface AppendArgs {
  s: string | TransactionArgument;
  r: string | TransactionArgument;
}

/**
 * Move function: `append`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::string`
 *
 * @param tx - The transaction object
 * @param s - Function parameter
 * @param r - Function parameter
 */
export function append(tx: Transaction, args: AppendArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::string::append`,
    arguments: [pure(tx, args.s, `${String.$typeName}`), pure(tx, args.r, `${String.$typeName}`)],
  });
}
