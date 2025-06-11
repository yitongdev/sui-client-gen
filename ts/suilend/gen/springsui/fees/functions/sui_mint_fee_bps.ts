import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `sui_mint_fee_bps`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::fees`
 *
 * @param tx - The transaction object
 * @param feeConfig - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function suiMintFeeBps(
  tx: Transaction,
  feeConfig: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::fees::sui_mint_fee_bps`,
    arguments: [obj(tx, feeConfig)],
  });
}
