import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface JoinInactiveStakeToValidatorArgs {
  storage: TransactionObjectInput;
  u64: bigint | TransactionArgument;
  stakedSui: TransactionObjectInput;
}

/**
 * Move function: `join_inactive_stake_to_validator`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::storage`
 *
 * @param tx - The transaction object
 * @param storage - Function parameter
 * @param u64 - Function parameter
 * @param stakedSui - Function parameter
 */
export function joinInactiveStakeToValidator(
  tx: Transaction,
  args: JoinInactiveStakeToValidatorArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::storage::join_inactive_stake_to_validator`,
    arguments: [obj(tx, args.storage), pure(tx, args.u64, `u64`), obj(tx, args.stakedSui)],
  });
}
