import { ID } from "../../../_dependencies/onchain/0x2/object/structs/index.js";
import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface ClaimRewardsByObligationIdArgs {
  lendingMarket: TransactionObjectInput;
  id: string | TransactionArgument;
  clock: TransactionObjectInput;
  u641: bigint | TransactionArgument;
  u642: bigint | TransactionArgument;
  bool1: boolean | TransactionArgument;
  bool2: boolean | TransactionArgument;
}

/**
 * Move function: `claim_rewards_by_obligation_id`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param lendingMarket - Function parameter
 * @param id - Function parameter
 * @param clock - Function parameter
 * @param u641 - Function parameter
 * @param u642 - Function parameter
 * @param bool1 - Function parameter
 * @param bool2 - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function claimRewardsByObligationId(
  tx: Transaction,
  typeArgs: [string, string],
  args: ClaimRewardsByObligationIdArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::lending_market::claim_rewards_by_obligation_id`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.lendingMarket),
      pure(tx, args.id, `${ID.$typeName}`),
      obj(tx, args.clock),
      pure(tx, args.u641, `u64`),
      pure(tx, args.u642, `u64`),
      pure(tx, args.bool1, `bool`),
      pure(tx, args.bool2, `bool`),
    ],
  });
}
