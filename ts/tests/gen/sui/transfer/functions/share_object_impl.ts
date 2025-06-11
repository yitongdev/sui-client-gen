import { GenericArg, generic } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `share_object_impl`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param obj - Function parameter
 */
export function shareObjectImpl(
  tx: Transaction,
  typeArg: string,
  obj: GenericArg,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::transfer::share_object_impl`,
    typeArguments: [typeArg],
    arguments: [generic(tx, `${typeArg}`, obj)],
  });
}
