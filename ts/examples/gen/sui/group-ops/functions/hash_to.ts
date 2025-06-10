import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

export interface HashToArgs {
  type: number | TransactionArgument;
  m: Array<number | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `hash_to`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::group_ops`
 *
 * @typeParam G - Type parameter 0
 * @param tx - The transaction object
 * @param type - Function parameter
 * @param m - Function parameter
 */
export function hashTo(tx: Transaction, typeArg: string, args: HashToArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::group_ops::hash_to`,
    typeArguments: [typeArg],
    arguments: [pure(tx, args.type, `u8`), pure(tx, args.m, `vector<u8>`)],
  });
}
