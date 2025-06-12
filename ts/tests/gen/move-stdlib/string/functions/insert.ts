import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { String } from "../index.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface InsertArgs {
  s: string | TransactionArgument;
  at: bigint | TransactionArgument;
  o: string | TransactionArgument;
}

/**
 * Move function: `insert`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::string`
 *
 * @param tx - The transaction object
 * @param s - Function parameter
 * @param at - Function parameter
 * @param o - Function parameter
 */
export function insert(tx: Transaction, args: InsertArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::string::insert`,
    arguments: [
      pure(tx, args.s, `${String.$typeName}`),
      pure(tx, args.at, `u64`),
      pure(tx, args.o, `${String.$typeName}`),
    ],
  });
}
