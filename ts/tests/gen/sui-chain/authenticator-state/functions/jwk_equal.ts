import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface JwkEqualArgs {
  jwk1: TransactionObjectInput;
  jwk2: TransactionObjectInput;
}

/**
 * Move function: `jwk_equal`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::authenticator_state`
 *
 * @param tx - The transaction object
 * @param jwk1 - Function parameter
 * @param jwk2 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function jwkEqual(tx: Transaction, args: JwkEqualArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::authenticator_state::jwk_equal`,
    arguments: [obj(tx, args.jwk1), obj(tx, args.jwk2)],
  });
}
