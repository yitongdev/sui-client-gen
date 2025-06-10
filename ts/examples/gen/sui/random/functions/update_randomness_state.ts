import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

export interface UpdateRandomnessStateArgs {
  self: TransactionObjectInput;
  newRound: bigint | TransactionArgument;
  newBytes: Array<number | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `update_randomness_state`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::random`
 *
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param newRound - Function parameter
 * @param newBytes - Function parameter
 * @param ctx - Function parameter
 */
export function updateRandomnessState(
  tx: Transaction,
  args: UpdateRandomnessStateArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::random::update_randomness_state`,
    arguments: [
      obj(tx, args.self),
      pure(tx, args.newRound, `u64`),
      pure(tx, args.newBytes, `vector<u8>`),
    ],
  });
}
