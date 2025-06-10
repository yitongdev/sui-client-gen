import { vector } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { ActiveJwk } from "../index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

/**
 * Move function: `deduplicate`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::authenticator_state`
 *
 * @param tx - The transaction object
 * @param jwks - Function parameter
 */
export function deduplicate(
  tx: Transaction,
  jwks: Array<TransactionObjectInput> | TransactionArgument,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::authenticator_state::deduplicate`,
    arguments: [vector(tx, `${ActiveJwk.$typeName}`, jwks)],
  });
}
