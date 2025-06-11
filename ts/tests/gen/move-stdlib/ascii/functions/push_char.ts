import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { String } from "../index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface PushCharArgs {
  string: string | TransactionArgument;
  char: TransactionObjectInput;
}

/**
 * Move function: `push_char`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::ascii`
 *
 * @param tx - The transaction object
 * @param string - Function parameter
 * @param char - Function parameter
 */
export function pushChar(
  tx: Transaction,
  args: PushCharArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::ascii::push_char`,
    arguments: [
      pure(tx, args.string, `${String.$typeName}`),
      obj(tx, args.char),
    ],
  });
}
