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
  authenticatorState: TransactionObjectInput;
  vecActiveJwk: Array<TransactionObjectInput> | TransactionArgument;
}

/**
 * Move function: `update_authenticator_state`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::authenticator_state`
 *
 * @param tx - The transaction object
 * @param authenticatorState - Function parameter
 * @param vecActiveJwk - Function parameter
 * @param txContext - Function parameter
 */
export function updateAuthenticatorState(
  tx: Transaction,
  args: UpdateAuthenticatorStateArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::authenticator_state::update_authenticator_state`,
    arguments: [
      obj(tx, args.authenticatorState),
      vector(tx, `${ActiveJwk.$typeName}`, args.vecActiveJwk),
    ],
  });
}
