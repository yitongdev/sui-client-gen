import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface ContainsArgs {
  self: TransactionObjectInput;
  key: GenericArg;
}

/**
 * Move function: `contains`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::vec_map`
 *
 * @typeParam K - Type parameter 0
 * @typeParam V - Type parameter 1
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param key - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function contains(
  tx: Transaction,
  typeArgs: [string, string],
  args: ContainsArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::vec_map::contains`,
    typeArguments: typeArgs,
    arguments: [obj(tx, args.self), generic(tx, `${typeArgs[0]}`, args.key)],
  });
}
