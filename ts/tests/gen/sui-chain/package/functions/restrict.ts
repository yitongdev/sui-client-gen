import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface RestrictArgs {
  upgradeCap: TransactionObjectInput;
  u8: number | TransactionArgument;
}

/**
 * Move function: `restrict`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::package`
 *
 * @param tx - The transaction object
 * @param upgradeCap - Function parameter
 * @param u8 - Function parameter
 */
export function restrict(tx: Transaction, args: RestrictArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::package::restrict`,
    arguments: [obj(tx, args.upgradeCap), pure(tx, args.u8, `u8`)],
  });
}
