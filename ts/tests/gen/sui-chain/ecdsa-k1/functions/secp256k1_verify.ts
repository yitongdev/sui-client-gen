import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface Secp256k1VerifyArgs {
  vecU81: Array<number | TransactionArgument> | TransactionArgument;
  vecU82: Array<number | TransactionArgument> | TransactionArgument;
  vecU83: Array<number | TransactionArgument> | TransactionArgument;
  u8: number | TransactionArgument;
}

/**
 * Move function: `secp256k1_verify`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::ecdsa_k1`
 *
 * @param tx - The transaction object
 * @param vecU81 - Function parameter
 * @param vecU82 - Function parameter
 * @param vecU83 - Function parameter
 * @param u8 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function secp256k1Verify(
  tx: Transaction,
  args: Secp256k1VerifyArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::ecdsa_k1::secp256k1_verify`,
    arguments: [
      pure(tx, args.vecU81, `vector<u8>`),
      pure(tx, args.vecU82, `vector<u8>`),
      pure(tx, args.vecU83, `vector<u8>`),
      pure(tx, args.u8, `u8`),
    ],
  });
}
