import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `issuer`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::zklogin_verified_issuer`
 *
 * @param tx - The transaction object
 * @param verifiedIssuer - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function issuer(
  tx: Transaction,
  verifiedIssuer: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::zklogin_verified_issuer::issuer`,
    arguments: [obj(tx, verifiedIssuer)],
  });
}
