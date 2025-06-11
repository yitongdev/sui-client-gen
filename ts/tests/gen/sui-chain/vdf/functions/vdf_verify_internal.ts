import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface VdfVerifyInternalArgs {
  vecU81: Array<number | TransactionArgument> | TransactionArgument;
  vecU82: Array<number | TransactionArgument> | TransactionArgument;
  vecU83: Array<number | TransactionArgument> | TransactionArgument;
  u64: bigint | TransactionArgument;
}

/**
 * Move function: `vdf_verify_internal`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::vdf`
 *
 * @param tx - The transaction object
 * @param vecU81 - Function parameter
 * @param vecU82 - Function parameter
 * @param vecU83 - Function parameter
 * @param u64 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function vdfVerifyInternal(
  tx: Transaction,
  args: VdfVerifyInternalArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::vdf::vdf_verify_internal`,
    arguments: [
      pure(tx, args.vecU81, `vector<u8>`),
      pure(tx, args.vecU82, `vector<u8>`),
      pure(tx, args.vecU83, `vector<u8>`),
      pure(tx, args.u64, `u64`),
    ],
  });
}
