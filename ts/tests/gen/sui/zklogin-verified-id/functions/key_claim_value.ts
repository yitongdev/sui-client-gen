import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `key_claim_value`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::zklogin_verified_id`
 *
 * @param tx - The transaction object
 * @param verifiedId - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function keyClaimValue(
  tx: Transaction,
  verifiedId: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::zklogin_verified_id::key_claim_value`,
    arguments: [obj(tx, verifiedId)],
  });
}
