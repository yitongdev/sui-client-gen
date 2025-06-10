import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

/**
 * Move function: `public_proof_inputs_from_bytes`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::groth16`
 *
 * @param tx - The transaction object
 * @param bytes - Function parameter
 */
export function publicProofInputsFromBytes(
  tx: Transaction,
  bytes: Array<number | TransactionArgument> | TransactionArgument,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::groth16::public_proof_inputs_from_bytes`,
    arguments: [pure(tx, bytes, `vector<u8>`)],
  });
}
