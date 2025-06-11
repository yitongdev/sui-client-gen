import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface CreateArgs {
  registry: TransactionObjectInput;
  initA: TransactionObjectInput;
  initB: TransactionObjectInput;
  lpFeeBps: bigint | TransactionArgument;
  adminFeePct: bigint | TransactionArgument;
}

/**
 * Move function: `create`
 * Module: `f917eb03d02b9221b10276064b2c10296276cb43feb24aac35113a272dd691c7::pool`
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
 * @returns TransactionResult - The transaction result
 */
export function create(
  tx: Transaction,
  typeArgs: [string, string],
  args: CreateArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::pool::create`,
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
