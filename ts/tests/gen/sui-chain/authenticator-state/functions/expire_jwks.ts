import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface ExpireJwksArgs {
  authenticatorState: TransactionObjectInput;
  u64: bigint | TransactionArgument;
}

/**
 * Move function: `expire_jwks`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::authenticator_state`
 *
 * @param tx - The transaction object
 * @param authenticatorState - Function parameter
 * @param u64 - Function parameter
 * @param txContext - Function parameter
 */
export function expireJwks(tx: Transaction, args: ExpireJwksArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::authenticator_state::expire_jwks`,
    arguments: [obj(tx, args.authenticatorState), pure(tx, args.u64, `u64`)],
  });
}
