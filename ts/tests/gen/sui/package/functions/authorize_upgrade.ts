import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface AuthorizeUpgradeArgs {
  cap: TransactionObjectInput;
  policy: number | TransactionArgument;
  digest: Array<number | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `authorize_upgrade`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::package`
 *
 * @param tx - The transaction object
 * @param cap - Function parameter
 * @param policy - Function parameter
 * @param digest - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function authorizeUpgrade(
  tx: Transaction,
  args: AuthorizeUpgradeArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::package::authorize_upgrade`,
    arguments: [
      obj(tx, args.cap),
      pure(tx, args.policy, `u8`),
      pure(tx, args.digest, `vector<u8>`),
    ],
  });
}
