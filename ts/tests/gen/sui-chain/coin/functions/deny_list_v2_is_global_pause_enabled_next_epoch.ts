import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `deny_list_v2_is_global_pause_enabled_next_epoch`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param denyList - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function denyListV2IsGlobalPauseEnabledNextEpoch(
  tx: Transaction,
  typeArg: string,
  denyList: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::coin::deny_list_v2_is_global_pause_enabled_next_epoch`,
    typeArguments: [typeArg],
    arguments: [obj(tx, denyList)],
  });
}
