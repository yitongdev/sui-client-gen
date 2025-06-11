import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface ExpireJwksArgs {
  self: TransactionObjectInput;
  minEpoch: bigint | TransactionArgument;
}

/**
 * Move function: `expire_jwks`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::authenticator_state`
 *
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param minEpoch - Function parameter
 * @param ctx - Function parameter
 */
export function expireJwks(
  tx: Transaction,
  args: ExpireJwksArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::authenticator_state::expire_jwks`,
    arguments: [obj(tx, args.self), pure(tx, args.minEpoch, `u64`)],
  });
}
