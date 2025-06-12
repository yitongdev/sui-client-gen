import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { String } from "../index.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface InsertArgs {
  string1: string | TransactionArgument;
  u64: bigint | TransactionArgument;
  string2: string | TransactionArgument;
}

/**
 * Move function: `insert`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::ascii`
 *
 * @param tx - The transaction object
 * @param string1 - Function parameter
 * @param u64 - Function parameter
 * @param string2 - Function parameter
 */
export function insert(tx: Transaction, args: InsertArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::ascii::insert`,
    arguments: [
      pure(tx, args.string1, `${String.$typeName}`),
      pure(tx, args.u64, `u64`),
      pure(tx, args.string2, `${String.$typeName}`),
    ],
  });
}
