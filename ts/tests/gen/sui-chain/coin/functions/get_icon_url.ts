import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `get_icon_url`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param coinMetadata - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function getIconUrl(
  tx: Transaction,
  typeArg: string,
  coinMetadata: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::coin::get_icon_url`,
    typeArguments: [typeArg],
    arguments: [obj(tx, coinMetadata)],
  });
}
