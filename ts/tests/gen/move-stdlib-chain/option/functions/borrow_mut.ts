import { GenericArg, option as option_ } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `borrow_mut`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::option`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param option - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function borrowMut(
  tx: Transaction,
  typeArg: string,
  option: GenericArg | TransactionArgument | null,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::option::borrow_mut`,
    typeArguments: [typeArg],
    arguments: [option_(tx, `${typeArg}`, option)],
  });
}
