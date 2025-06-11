import { vector } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { ActiveJwk } from "../index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `check_sorted`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::authenticator_state`
 *
 * @param tx - The transaction object
 * @param vecActiveJwk - Function parameter
 */
export function checkSorted(
  tx: Transaction,
  vecActiveJwk: Array<TransactionObjectInput> | TransactionArgument,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::authenticator_state::check_sorted`,
    arguments: [vector(tx, `${ActiveJwk.$typeName}`, vecActiveJwk)],
  });
}
