import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface Secp256r1EcrecoverArgs {
  signature: Array<number | TransactionArgument> | TransactionArgument;
  msg: Array<number | TransactionArgument> | TransactionArgument;
  hash: number | TransactionArgument;
}

/**
 * Move function: `secp256r1_ecrecover`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::ecdsa_r1`
 *
 * @param tx - The transaction object
 * @param signature - Function parameter
 * @param msg - Function parameter
 * @param hash - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function secp256r1Ecrecover(
  tx: Transaction,
  args: Secp256r1EcrecoverArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::ecdsa_r1::secp256r1_ecrecover`,
    arguments: [
      pure(tx, args.signature, `vector<u8>`),
      pure(tx, args.msg, `vector<u8>`),
      pure(tx, args.hash, `u8`),
    ],
  });
}
