import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

export interface EcvrfVerifyArgs {
  hash: Array<number | TransactionArgument> | TransactionArgument;
  alphaString: Array<number | TransactionArgument> | TransactionArgument;
  publicKey: Array<number | TransactionArgument> | TransactionArgument;
  proof: Array<number | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `ecvrf_verify`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::ecvrf`
 *
 * @param tx - The transaction object
 * @param hash - Function parameter
 * @param alphaString - Function parameter
 * @param publicKey - Function parameter
 * @param proof - Function parameter
 */
export function ecvrfVerify(tx: Transaction, args: EcvrfVerifyArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::ecvrf::ecvrf_verify`,
    arguments: [
      pure(tx, args.hash, `vector<u8>`),
      pure(tx, args.alphaString, `vector<u8>`),
      pure(tx, args.publicKey, `vector<u8>`),
      pure(tx, args.proof, `vector<u8>`),
    ],
  });
}
