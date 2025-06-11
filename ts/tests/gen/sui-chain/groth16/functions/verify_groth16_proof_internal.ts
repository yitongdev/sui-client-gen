import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface VerifyGroth16ProofInternalArgs {
  u8: number | TransactionArgument;
  vecU81: Array<number | TransactionArgument> | TransactionArgument;
  vecU82: Array<number | TransactionArgument> | TransactionArgument;
  vecU83: Array<number | TransactionArgument> | TransactionArgument;
  vecU84: Array<number | TransactionArgument> | TransactionArgument;
  vecU85: Array<number | TransactionArgument> | TransactionArgument;
  vecU86: Array<number | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `verify_groth16_proof_internal`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::groth16`
 *
 * @param tx - The transaction object
 * @param u8 - Function parameter
 * @param vecU81 - Function parameter
 * @param vecU82 - Function parameter
 * @param vecU83 - Function parameter
 * @param vecU84 - Function parameter
 * @param vecU85 - Function parameter
 * @param vecU86 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function verifyGroth16ProofInternal(
  tx: Transaction,
  args: VerifyGroth16ProofInternalArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::groth16::verify_groth16_proof_internal`,
    arguments: [
      pure(tx, args.u8, `u8`),
      pure(tx, args.vecU81, `vector<u8>`),
      pure(tx, args.vecU82, `vector<u8>`),
      pure(tx, args.vecU83, `vector<u8>`),
      pure(tx, args.vecU84, `vector<u8>`),
      pure(tx, args.vecU85, `vector<u8>`),
      pure(tx, args.vecU86, `vector<u8>`),
    ],
  });
}
