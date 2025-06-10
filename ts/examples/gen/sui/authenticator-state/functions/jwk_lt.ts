import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export interface JwkLtArgs {
  a: TransactionObjectInput;
  b: TransactionObjectInput;
}

/**
 * Move function: `jwk_lt`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::authenticator_state`
 *
 * @param tx - The transaction object
 * @param a - Function parameter
 * @param b - Function parameter
 */
export function jwkLt(tx: Transaction, args: JwkLtArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::authenticator_state::jwk_lt`,
    arguments: [obj(tx, args.a), obj(tx, args.b)],
  });
}
