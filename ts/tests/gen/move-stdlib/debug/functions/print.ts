import { GenericArg, generic } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `print`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::debug`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param x - Function parameter
 */
export function print(
  tx: Transaction,
  typeArg: string,
  x: GenericArg,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::debug::print`,
    typeArguments: [typeArg],
    arguments: [generic(tx, `${typeArg}`, x)],
  });
}
