import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { String } from "../index.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface SubStringArgs {
  s: string | TransactionArgument;
  i: bigint | TransactionArgument;
  j: bigint | TransactionArgument;
}

/**
 * Move function: `sub_string`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::string`
 *
 * @param tx - The transaction object
 * @param s - Function parameter
 * @param i - Function parameter
 * @param j - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function subString(tx: Transaction, args: SubStringArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::string::sub_string`,
    arguments: [
      pure(tx, args.s, `${String.$typeName}`),
      pure(tx, args.i, `u64`),
      pure(tx, args.j, `u64`),
    ],
  });
}
