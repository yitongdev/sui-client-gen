import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface DenyListV2EnableGlobalPauseArgs {
  denyList: TransactionObjectInput;
  denyCapV2: TransactionObjectInput;
}

/**
 * Move function: `deny_list_v2_enable_global_pause`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param denyList - Function parameter
 * @param denyCapV2 - Function parameter
 * @param txContext - Function parameter
 */
export function denyListV2EnableGlobalPause(
  tx: Transaction,
  typeArg: string,
  args: DenyListV2EnableGlobalPauseArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::coin::deny_list_v2_enable_global_pause`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.denyList), obj(tx, args.denyCapV2)],
  });
}
