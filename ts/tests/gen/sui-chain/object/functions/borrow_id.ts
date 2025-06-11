import { GenericArg, generic } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `borrow_id`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::object`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param t0 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function borrowId(
  tx: Transaction,
  typeArg: string,
  t0: GenericArg,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::object::borrow_id`,
    typeArguments: [typeArg],
    arguments: [generic(tx, `${typeArg}`, t0)],
  });
}
