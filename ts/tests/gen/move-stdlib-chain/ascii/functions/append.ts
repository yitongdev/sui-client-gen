import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { String } from "../index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface AppendArgs {
  string1: string | TransactionArgument;
  string2: string | TransactionArgument;
}

/**
 * Move function: `append`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::ascii`
 *
 * @param tx - The transaction object
 * @param string1 - Function parameter
 * @param string2 - Function parameter
 */
export function append(tx: Transaction, args: AppendArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::ascii::append`,
    arguments: [
      pure(tx, args.string1, `${String.$typeName}`),
      pure(tx, args.string2, `${String.$typeName}`),
    ],
  });
}
