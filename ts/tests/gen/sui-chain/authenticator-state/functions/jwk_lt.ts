import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface JwkLtArgs {
  activeJwk1: TransactionObjectInput;
  activeJwk2: TransactionObjectInput;
}

/**
 * Move function: `jwk_lt`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::authenticator_state`
 *
 * @param tx - The transaction object
 * @param activeJwk1 - Function parameter
 * @param activeJwk2 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function jwkLt(tx: Transaction, args: JwkLtArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::authenticator_state::jwk_lt`,
    arguments: [obj(tx, args.activeJwk1), obj(tx, args.activeJwk2)],
  });
}
