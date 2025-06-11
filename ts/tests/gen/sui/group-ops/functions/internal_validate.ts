import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface InternalValidateArgs {
  type: number | TransactionArgument;
  bytes: Array<number | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `internal_validate`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::group_ops`
 *
 * @param tx - The transaction object
 * @param type - Function parameter
 * @param bytes - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function internalValidate(
  tx: Transaction,
  args: InternalValidateArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::group_ops::internal_validate`,
    arguments: [pure(tx, args.type, `u8`), pure(tx, args.bytes, `vector<u8>`)],
  });
}
