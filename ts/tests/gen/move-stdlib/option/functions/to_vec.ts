import { GenericArg, option } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `to_vec`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::option`
 *
 * @typeParam Element - Type parameter 0
 * @param tx - The transaction object
 * @param t - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function toVec(
  tx: Transaction,
  typeArg: string,
  t: GenericArg | TransactionArgument | null,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::option::to_vec`,
    typeArguments: [typeArg],
    arguments: [option(tx, `${typeArg}`, t)],
  });
}
