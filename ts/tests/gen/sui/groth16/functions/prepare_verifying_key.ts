import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface PrepareVerifyingKeyArgs {
  curve: TransactionObjectInput;
  verifyingKey: Array<number | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `prepare_verifying_key`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::groth16`
 *
 * @param tx - The transaction object
 * @param curve - Function parameter
 * @param verifyingKey - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function prepareVerifyingKey(
  tx: Transaction,
  args: PrepareVerifyingKeyArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::groth16::prepare_verifying_key`,
    arguments: [obj(tx, args.curve), pure(tx, args.verifyingKey, `vector<u8>`)],
  });
}
