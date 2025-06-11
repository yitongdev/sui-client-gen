import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `nonce`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::nitro_attestation`
 *
 * @param tx - The transaction object
 * @param nitroAttestationDocument - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function nonce(
  tx: Transaction,
  nitroAttestationDocument: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::nitro_attestation::nonce`,
    arguments: [obj(tx, nitroAttestationDocument)],
  });
}
