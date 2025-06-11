import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface UpdateRandomnessStateArgs {
  random: TransactionObjectInput;
  u64: bigint | TransactionArgument;
  vecU8: Array<number | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `update_randomness_state`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::random`
 *
 * @param tx - The transaction object
 * @param random - Function parameter
 * @param u64 - Function parameter
 * @param vecU8 - Function parameter
 * @param txContext - Function parameter
 */
export function updateRandomnessState(
  tx: Transaction,
  args: UpdateRandomnessStateArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::random::update_randomness_state`,
    arguments: [
      obj(tx, args.random),
      pure(tx, args.u64, `u64`),
      pure(tx, args.vecU8, `vector<u8>`),
    ],
  });
}
