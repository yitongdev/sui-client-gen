import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

export interface VerifyGroth16ProofInternalArgs {
  curve: number | TransactionArgument;
  vkGammaAbcG1Bytes: Array<number | TransactionArgument> | TransactionArgument;
  alphaG1BetaG2Bytes: Array<number | TransactionArgument> | TransactionArgument;
  gammaG2NegPcBytes: Array<number | TransactionArgument> | TransactionArgument;
  deltaG2NegPcBytes: Array<number | TransactionArgument> | TransactionArgument;
  publicProofInputs: Array<number | TransactionArgument> | TransactionArgument;
  proofPoints: Array<number | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `verify_groth16_proof_internal`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::groth16`
 *
 * @param tx - The transaction object
 * @param curve - Function parameter
 * @param vkGammaAbcG1Bytes - Function parameter
 * @param alphaG1BetaG2Bytes - Function parameter
 * @param gammaG2NegPcBytes - Function parameter
 * @param deltaG2NegPcBytes - Function parameter
 * @param publicProofInputs - Function parameter
 * @param proofPoints - Function parameter
 */
export function verifyGroth16ProofInternal(
  tx: Transaction,
  args: VerifyGroth16ProofInternalArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::groth16::verify_groth16_proof_internal`,
    arguments: [
      pure(tx, args.curve, `u8`),
      pure(tx, args.vkGammaAbcG1Bytes, `vector<u8>`),
      pure(tx, args.alphaG1BetaG2Bytes, `vector<u8>`),
      pure(tx, args.gammaG2NegPcBytes, `vector<u8>`),
      pure(tx, args.deltaG2NegPcBytes, `vector<u8>`),
      pure(tx, args.publicProofInputs, `vector<u8>`),
      pure(tx, args.proofPoints, `vector<u8>`),
    ],
  });
}
