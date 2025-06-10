import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `share_policy`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param policy - Function parameter
 */
export function sharePolicy(
  tx: Transaction,
  typeArg: string,
  policy: TransactionObjectInput,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::share_policy`,
    typeArguments: [typeArg],
    arguments: [obj(tx, policy)],
  });
}
