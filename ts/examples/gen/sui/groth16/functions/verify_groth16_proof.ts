import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export interface VerifyGroth16ProofArgs {
  curve: TransactionObjectInput;
  preparedVerifyingKey: TransactionObjectInput;
  publicProofInputs: TransactionObjectInput;
  proofPoints: TransactionObjectInput;
}

/**
 * Move function: `verify_groth16_proof`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::groth16`
 *
 * @param tx - The transaction object
 * @param curve - Function parameter
 * @param preparedVerifyingKey - Function parameter
 * @param publicProofInputs - Function parameter
 * @param proofPoints - Function parameter
 */
export function verifyGroth16Proof(
  tx: Transaction,
  args: VerifyGroth16ProofArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::groth16::verify_groth16_proof`,
    arguments: [
      obj(tx, args.curve),
      obj(tx, args.preparedVerifyingKey),
      obj(tx, args.publicProofInputs),
      obj(tx, args.proofPoints),
    ],
  });
}
