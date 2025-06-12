import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface PrepareVerifyingKeyInternalArgs {
  u8: number | TransactionArgument;
  vecU8: Array<number | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `prepare_verifying_key_internal`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::groth16`
 *
 * @param tx - The transaction object
 * @param u8 - Function parameter
 * @param vecU8 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function prepareVerifyingKeyInternal(
  tx: Transaction,
  args: PrepareVerifyingKeyInternalArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::groth16::prepare_verifying_key_internal`,
    arguments: [pure(tx, args.u8, `u8`), pure(tx, args.vecU8, `vector<u8>`)],
  });
}
