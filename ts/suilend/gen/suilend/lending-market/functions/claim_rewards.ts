import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface ClaimRewardsArgs {
  lendingMarket: TransactionObjectInput;
  obligationOwnerCap: TransactionObjectInput;
  clock: TransactionObjectInput;
  u641: bigint | TransactionArgument;
  u642: bigint | TransactionArgument;
  bool: boolean | TransactionArgument;
}

/**
 * Move function: `claim_rewards`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param lendingMarket - Function parameter
 * @param obligationOwnerCap - Function parameter
 * @param clock - Function parameter
 * @param u641 - Function parameter
 * @param u642 - Function parameter
 * @param bool - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function claimRewards(
  tx: Transaction,
  typeArgs: [string, string],
  args: ClaimRewardsArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::lending_market::claim_rewards`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.lendingMarket),
      obj(tx, args.obligationOwnerCap),
      obj(tx, args.clock),
      pure(tx, args.u641, `u64`),
      pure(tx, args.u642, `u64`),
      pure(tx, args.bool, `bool`),
    ],
  });
}
