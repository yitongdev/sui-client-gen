import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface LoadNitroAttestationInternalArgs {
  vecU8: Array<number | TransactionArgument> | TransactionArgument;
  u64: bigint | TransactionArgument;
}

/**
 * Move function: `load_nitro_attestation_internal`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::nitro_attestation`
 *
 * @param tx - The transaction object
 * @param vecU8 - Function parameter
 * @param u64 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function loadNitroAttestationInternal(
  tx: Transaction,
  args: LoadNitroAttestationInternalArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::nitro_attestation::load_nitro_attestation_internal`,
    arguments: [pure(tx, args.vecU8, `vector<u8>`), pure(tx, args.u64, `u64`)],
  });
}
