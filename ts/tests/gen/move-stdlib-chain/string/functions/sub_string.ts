import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { String } from "../index.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface SubStringArgs {
  string: string | TransactionArgument;
  u641: bigint | TransactionArgument;
  u642: bigint | TransactionArgument;
}

/**
 * Move function: `sub_string`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::string`
 *
 * @param tx - The transaction object
 * @param string - Function parameter
 * @param u641 - Function parameter
 * @param u642 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function subString(tx: Transaction, args: SubStringArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::string::sub_string`,
    arguments: [
      pure(tx, args.string, `${String.$typeName}`),
      pure(tx, args.u641, `u64`),
      pure(tx, args.u642, `u64`),
    ],
  });
}
