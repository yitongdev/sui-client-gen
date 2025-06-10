import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

export interface RestrictArgs {
  cap: TransactionObjectInput;
  policy: number | TransactionArgument;
}

/**
 * Move function: `restrict`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::package`
 *
 * @param tx - The transaction object
 * @param cap - Function parameter
 * @param policy - Function parameter
 */
export function restrict(tx: Transaction, args: RestrictArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::package::restrict`,
    arguments: [obj(tx, args.cap), pure(tx, args.policy, `u8`)],
  });
}
