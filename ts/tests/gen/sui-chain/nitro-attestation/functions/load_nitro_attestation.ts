import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface LoadNitroAttestationArgs {
  vecU8: Array<number | TransactionArgument> | TransactionArgument;
  clock: TransactionObjectInput;
}

/**
 * Move function: `load_nitro_attestation`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::nitro_attestation`
 *
 * @param tx - The transaction object
 * @param vecU8 - Function parameter
 * @param clock - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function loadNitroAttestation(
  tx: Transaction,
  args: LoadNitroAttestationArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::nitro_attestation::load_nitro_attestation`,
    arguments: [pure(tx, args.vecU8, `vector<u8>`), obj(tx, args.clock)],
  });
}
