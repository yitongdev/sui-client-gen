import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface AuthorizeUpgradeArgs {
  upgradeCap: TransactionObjectInput;
  u8: number | TransactionArgument;
  vecU8: Array<number | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `authorize_upgrade`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::package`
 *
 * @param tx - The transaction object
 * @param upgradeCap - Function parameter
 * @param u8 - Function parameter
 * @param vecU8 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function authorizeUpgrade(tx: Transaction, args: AuthorizeUpgradeArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::package::authorize_upgrade`,
    arguments: [
      obj(tx, args.upgradeCap),
      pure(tx, args.u8, `u8`),
      pure(tx, args.vecU8, `vector<u8>`),
    ],
  });
}
