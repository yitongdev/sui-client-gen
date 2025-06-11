import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface V2IsGlobalPauseEnabledNextEpochArgs {
  denyList: TransactionObjectInput;
  u64: bigint | TransactionArgument;
  vecU8: Array<number | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `v2_is_global_pause_enabled_next_epoch`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::deny_list`
 *
 * @param tx - The transaction object
 * @param denyList - Function parameter
 * @param u64 - Function parameter
 * @param vecU8 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function v2IsGlobalPauseEnabledNextEpoch(
  tx: Transaction,
  args: V2IsGlobalPauseEnabledNextEpochArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::deny_list::v2_is_global_pause_enabled_next_epoch`,
    arguments: [
      obj(tx, args.denyList),
      pure(tx, args.u64, `u64`),
      pure(tx, args.vecU8, `vector<u8>`),
    ],
  });
}
