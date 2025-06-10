import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

export interface CreatePoolWithCoinsArgs {
  registry: TransactionObjectInput;
  initA: TransactionObjectInput;
  initB: TransactionObjectInput;
  lpFeeBps: bigint | TransactionArgument;
  adminFeePct: bigint | TransactionArgument;
}

/**
 * Move function: `create_pool_with_coins`
 * Module: `f917eb03d02b9221b10276064b2c10296276cb43feb24aac35113a272dd691c7::util`
 *
 * @typeParam A - Type parameter 0
 * @typeParam B - Type parameter 1
 * @param tx - The transaction object
 * @param registry - Function parameter
 * @param initA - Function parameter
 * @param initB - Function parameter
 * @param lpFeeBps - Function parameter
 * @param adminFeePct - Function parameter
 * @param ctx - Function parameter
 */
export function createPoolWithCoins(
  tx: Transaction,
  typeArgs: [string, string],
  args: CreatePoolWithCoinsArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::util::create_pool_with_coins`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.registry),
      obj(tx, args.initA),
      obj(tx, args.initB),
      pure(tx, args.lpFeeBps, `u64`),
      pure(tx, args.adminFeePct, `u64`),
    ],
  });
}
