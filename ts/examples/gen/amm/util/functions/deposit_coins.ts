import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

export interface DepositCoinsArgs {
  pool: TransactionObjectInput;
  inputA: TransactionObjectInput;
  inputB: TransactionObjectInput;
  minLpOut: bigint | TransactionArgument;
}

/**
 * Move function: `deposit_coins`
 * Module: `f917eb03d02b9221b10276064b2c10296276cb43feb24aac35113a272dd691c7::util`
 *
 * @typeParam A - Type parameter 0
 * @typeParam B - Type parameter 1
 * @param tx - The transaction object
 * @param pool - Function parameter
 * @param inputA - Function parameter
 * @param inputB - Function parameter
 * @param minLpOut - Function parameter
 * @param ctx - Function parameter
 */
export function depositCoins(
  tx: Transaction,
  typeArgs: [string, string],
  args: DepositCoinsArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::util::deposit_coins`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.pool),
      obj(tx, args.inputA),
      obj(tx, args.inputB),
      pure(tx, args.minLpOut, `u64`),
    ],
  });
}
