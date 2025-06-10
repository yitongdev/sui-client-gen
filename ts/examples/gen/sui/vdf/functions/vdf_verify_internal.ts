import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

export interface VdfVerifyInternalArgs {
  input: Array<number | TransactionArgument> | TransactionArgument;
  output: Array<number | TransactionArgument> | TransactionArgument;
  proof: Array<number | TransactionArgument> | TransactionArgument;
  iterations: bigint | TransactionArgument;
}

/**
 * Move function: `vdf_verify_internal`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::vdf`
 *
 * @param tx - The transaction object
 * @param input - Function parameter
 * @param output - Function parameter
 * @param proof - Function parameter
 * @param iterations - Function parameter
 */
export function vdfVerifyInternal(
  tx: Transaction,
  args: VdfVerifyInternalArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::vdf::vdf_verify_internal`,
    arguments: [
      pure(tx, args.input, `vector<u8>`),
      pure(tx, args.output, `vector<u8>`),
      pure(tx, args.proof, `vector<u8>`),
      pure(tx, args.iterations, `u64`),
    ],
  });
}
