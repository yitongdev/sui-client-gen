import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `new_policy`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param treasuryCap - Function parameter
 * @param ctx - Function parameter
 */
export function newPolicy(
  tx: Transaction,
  typeArg: string,
  treasuryCap: TransactionObjectInput,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::new_policy`,
    typeArguments: [typeArg],
    arguments: [obj(tx, treasuryCap)],
  });
}
