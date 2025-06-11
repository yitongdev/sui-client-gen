import { GenericArg, generic } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `is_one_time_witness`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::types`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param t - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function isOneTimeWitness(
  tx: Transaction,
  typeArg: string,
  t: GenericArg,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::types::is_one_time_witness`,
    typeArguments: [typeArg],
    arguments: [generic(tx, `${typeArg}`, t)],
  });
}
