import { obj, vector } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { ActiveJwk } from "../index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface UpdateAuthenticatorStateArgs {
  self: TransactionObjectInput;
  newActiveJwks: Array<TransactionObjectInput> | TransactionArgument;
}

/**
 * Move function: `update_authenticator_state`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::authenticator_state`
 *
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param newActiveJwks - Function parameter
 * @param ctx - Function parameter
 */
export function updateAuthenticatorState(
  tx: Transaction,
  args: UpdateAuthenticatorStateArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::authenticator_state::update_authenticator_state`,
    arguments: [obj(tx, args.self), vector(tx, `${ActiveJwk.$typeName}`, args.newActiveJwks)],
  });
}
