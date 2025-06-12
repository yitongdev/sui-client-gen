import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface Bls12381MinSigVerifyArgs {
  vecU81: Array<number | TransactionArgument> | TransactionArgument;
  vecU82: Array<number | TransactionArgument> | TransactionArgument;
  vecU83: Array<number | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `bls12381_min_sig_verify`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::bls12381`
 *
 * @param tx - The transaction object
 * @param vecU81 - Function parameter
 * @param vecU82 - Function parameter
 * @param vecU83 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function bls12381MinSigVerify(
  tx: Transaction,
  args: Bls12381MinSigVerifyArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::bls12381::bls12381_min_sig_verify`,
    arguments: [
      pure(tx, args.vecU81, `vector<u8>`),
      pure(tx, args.vecU82, `vector<u8>`),
      pure(tx, args.vecU83, `vector<u8>`),
    ],
  });
}
