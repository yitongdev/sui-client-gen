import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `keys`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::vec_map`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param vecMap - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function keys(
  tx: Transaction,
  typeArgs: [string, string],
  vecMap: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::vec_map::keys`,
    typeArguments: typeArgs,
    arguments: [obj(tx, vecMap)],
  });
}
