import { GenericArg, generic } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `id_bytes`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::object`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param t0 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function idBytes(
  tx: Transaction,
  typeArg: string,
  t0: GenericArg,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::object::id_bytes`,
    typeArguments: [typeArg],
    arguments: [generic(tx, `${typeArg}`, t0)],
  });
}
