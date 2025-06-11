import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `share_policy`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param tokenPolicy - Function parameter
 */
export function sharePolicy(
  tx: Transaction,
  typeArg: string,
  tokenPolicy: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::share_policy`,
    typeArguments: [typeArg],
    arguments: [obj(tx, tokenPolicy)],
  });
}
