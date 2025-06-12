import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface JwkEqualArgs {
  a: TransactionObjectInput;
  b: TransactionObjectInput;
}

/**
 * Move function: `jwk_equal`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::authenticator_state`
 *
 * @param tx - The transaction object
 * @param a - Function parameter
 * @param b - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function jwkEqual(tx: Transaction, args: JwkEqualArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::authenticator_state::jwk_equal`,
    arguments: [obj(tx, args.a), obj(tx, args.b)],
  });
}
