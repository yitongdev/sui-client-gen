import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface ConvertArgs {
  u81: number | TransactionArgument;
  u82: number | TransactionArgument;
  element: TransactionObjectInput;
}

/**
 * Move function: `convert`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::group_ops`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param u81 - Function parameter
 * @param u82 - Function parameter
 * @param element - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function convert(
  tx: Transaction,
  typeArgs: [string, string],
  args: ConvertArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::group_ops::convert`,
    typeArguments: typeArgs,
    arguments: [pure(tx, args.u81, `u8`), pure(tx, args.u82, `u8`), obj(tx, args.element)],
  });
}
