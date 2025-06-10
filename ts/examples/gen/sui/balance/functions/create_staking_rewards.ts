import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

/**
 * Move function: `create_staking_rewards`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::balance`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param value - Function parameter
 * @param ctx - Function parameter
 */
export function createStakingRewards(
  tx: Transaction,
  typeArg: string,
  value: bigint | TransactionArgument,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::balance::create_staking_rewards`,
    typeArguments: [typeArg],
    arguments: [pure(tx, value, `u64`)],
  });
}
