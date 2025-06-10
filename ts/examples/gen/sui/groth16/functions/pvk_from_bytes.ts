import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

export interface PvkFromBytesArgs {
  vkGammaAbcG1Bytes: Array<number | TransactionArgument> | TransactionArgument;
  alphaG1BetaG2Bytes: Array<number | TransactionArgument> | TransactionArgument;
  gammaG2NegPcBytes: Array<number | TransactionArgument> | TransactionArgument;
  deltaG2NegPcBytes: Array<number | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `pvk_from_bytes`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::groth16`
 *
 * @param tx - The transaction object
 * @param vkGammaAbcG1Bytes - Function parameter
 * @param alphaG1BetaG2Bytes - Function parameter
 * @param gammaG2NegPcBytes - Function parameter
 * @param deltaG2NegPcBytes - Function parameter
 */
export function pvkFromBytes(tx: Transaction, args: PvkFromBytesArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::groth16::pvk_from_bytes`,
    arguments: [
      pure(tx, args.vkGammaAbcG1Bytes, `vector<u8>`),
      pure(tx, args.alphaG1BetaG2Bytes, `vector<u8>`),
      pure(tx, args.gammaG2NegPcBytes, `vector<u8>`),
      pure(tx, args.deltaG2NegPcBytes, `vector<u8>`),
    ],
  });
}
