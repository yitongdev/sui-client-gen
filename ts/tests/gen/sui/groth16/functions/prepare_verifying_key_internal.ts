import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface PrepareVerifyingKeyInternalArgs {
  curve: number | TransactionArgument;
  verifyingKey: Array<number | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `prepare_verifying_key_internal`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::groth16`
 *
 * @param tx - The transaction object
 * @param curve - Function parameter
 * @param verifyingKey - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function prepareVerifyingKeyInternal(
  tx: Transaction,
  args: PrepareVerifyingKeyInternalArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::groth16::prepare_verifying_key_internal`,
    arguments: [
      pure(tx, args.curve, `u8`),
      pure(tx, args.verifyingKey, `vector<u8>`),
    ],
  });
}
