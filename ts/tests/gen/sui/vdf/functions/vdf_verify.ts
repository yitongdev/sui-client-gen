import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface VdfVerifyArgs {
  input: Array<number | TransactionArgument> | TransactionArgument;
  output: Array<number | TransactionArgument> | TransactionArgument;
  proof: Array<number | TransactionArgument> | TransactionArgument;
  iterations: bigint | TransactionArgument;
}

/**
 * Move function: `vdf_verify`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::vdf`
 *
 * @param tx - The transaction object
 * @param input - Function parameter
 * @param output - Function parameter
 * @param proof - Function parameter
 * @param iterations - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function vdfVerify(tx: Transaction, args: VdfVerifyArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::vdf::vdf_verify`,
    arguments: [
      pure(tx, args.input, `vector<u8>`),
      pure(tx, args.output, `vector<u8>`),
      pure(tx, args.proof, `vector<u8>`),
      pure(tx, args.iterations, `u64`),
    ],
  });
}
