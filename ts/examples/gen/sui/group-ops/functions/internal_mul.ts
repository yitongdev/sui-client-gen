import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

export interface InternalMulArgs {
  type: number | TransactionArgument;
  e1: Array<number | TransactionArgument> | TransactionArgument;
  e2: Array<number | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `internal_mul`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::group_ops`
 *
 * @param tx - The transaction object
 * @param type - Function parameter
 * @param e1 - Function parameter
 * @param e2 - Function parameter
 */
export function internalMul(tx: Transaction, args: InternalMulArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::group_ops::internal_mul`,
    arguments: [
      pure(tx, args.type, `u8`),
      pure(tx, args.e1, `vector<u8>`),
      pure(tx, args.e2, `vector<u8>`),
    ],
  });
}
