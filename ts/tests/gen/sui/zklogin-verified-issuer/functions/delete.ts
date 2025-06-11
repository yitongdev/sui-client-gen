import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `delete`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::zklogin_verified_issuer`
 *
 * @param tx - The transaction object
 * @param verifiedIssuer - Function parameter
 */
export function delete_(
  tx: Transaction,
  verifiedIssuer: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::zklogin_verified_issuer::delete`,
    arguments: [obj(tx, verifiedIssuer)],
  });
}
