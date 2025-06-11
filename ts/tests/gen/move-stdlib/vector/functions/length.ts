import { GenericArg, vector } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `length`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::vector`
 *
 * @typeParam Element - Type parameter 0
 * @param tx - The transaction object
 * @param v - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function length(
  tx: Transaction,
  typeArg: string,
  v: Array<GenericArg> | TransactionArgument,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::vector::length`,
    typeArguments: [typeArg],
    arguments: [vector(tx, `${typeArg}`, v)],
  });
}
