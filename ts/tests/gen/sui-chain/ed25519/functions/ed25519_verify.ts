import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface Ed25519VerifyArgs {
  vecU81: Array<number | TransactionArgument> | TransactionArgument;
  vecU82: Array<number | TransactionArgument> | TransactionArgument;
  vecU83: Array<number | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `ed25519_verify`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::ed25519`
 *
 * @param tx - The transaction object
 * @param vecU81 - Function parameter
 * @param vecU82 - Function parameter
 * @param vecU83 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function ed25519Verify(
  tx: Transaction,
  args: Ed25519VerifyArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::ed25519::ed25519_verify`,
    arguments: [
      pure(tx, args.vecU81, `vector<u8>`),
      pure(tx, args.vecU82, `vector<u8>`),
      pure(tx, args.vecU83, `vector<u8>`),
    ],
  });
}
