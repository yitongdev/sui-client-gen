import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

export interface WithdrawAndTransferToSenderArgs {
  pool: TransactionObjectInput;
  lpIn: TransactionObjectInput;
  minAOut: bigint | TransactionArgument;
  minBOut: bigint | TransactionArgument;
}

/**
 * Move function: `withdraw_and_transfer_to_sender`
 * Module: `f917eb03d02b9221b10276064b2c10296276cb43feb24aac35113a272dd691c7::util`
 *
 * @typeParam A - Type parameter 0
 * @typeParam B - Type parameter 1
 * @param tx - The transaction object
 * @param pool - Function parameter
 * @param lpIn - Function parameter
 * @param minAOut - Function parameter
 * @param minBOut - Function parameter
 * @param ctx - Function parameter
 */
export function withdrawAndTransferToSender(
  tx: Transaction,
  typeArgs: [string, string],
  args: WithdrawAndTransferToSenderArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::util::withdraw_and_transfer_to_sender`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.pool),
      obj(tx, args.lpIn),
      pure(tx, args.minAOut, `u64`),
      pure(tx, args.minBOut, `u64`),
    ],
  });
}
