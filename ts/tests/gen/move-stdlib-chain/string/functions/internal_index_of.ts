import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface InternalIndexOfArgs {
  vecU81: Array<number | TransactionArgument> | TransactionArgument;
  vecU82: Array<number | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `internal_index_of`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::string`
 *
 * @param tx - The transaction object
 * @param vecU81 - Function parameter
 * @param vecU82 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function internalIndexOf(
  tx: Transaction,
  args: InternalIndexOfArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::string::internal_index_of`,
    arguments: [
      pure(tx, args.vecU81, `vector<u8>`),
      pure(tx, args.vecU82, `vector<u8>`),
    ],
  });
}
