import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface Bls12381MinSigVerifyArgs {
  signature: Array<number | TransactionArgument> | TransactionArgument;
  publicKey: Array<number | TransactionArgument> | TransactionArgument;
  msg: Array<number | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `bls12381_min_sig_verify`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::bls12381`
 *
 * @param tx - The transaction object
 * @param signature - Function parameter
 * @param publicKey - Function parameter
 * @param msg - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function bls12381MinSigVerify(
  tx: Transaction,
  args: Bls12381MinSigVerifyArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::bls12381::bls12381_min_sig_verify`,
    arguments: [
      pure(tx, args.signature, `vector<u8>`),
      pure(tx, args.publicKey, `vector<u8>`),
      pure(tx, args.msg, `vector<u8>`),
    ],
  });
}
