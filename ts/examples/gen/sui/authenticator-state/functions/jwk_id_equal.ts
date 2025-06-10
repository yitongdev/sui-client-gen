import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export interface JwkIdEqualArgs {
  a: TransactionObjectInput;
  b: TransactionObjectInput;
}

/**
 * Move function: `jwk_id_equal`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::authenticator_state`
 *
 * @param tx - The transaction object
 * @param a - Function parameter
 * @param b - Function parameter
 */
export function jwkIdEqual(tx: Transaction, args: JwkIdEqualArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::authenticator_state::jwk_id_equal`,
    arguments: [obj(tx, args.a), obj(tx, args.b)],
  });
}
