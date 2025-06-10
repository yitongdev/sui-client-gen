import { GenericArg, generic, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

export interface HashTypeAndKeyArgs {
  parent: string | TransactionArgument;
  k: GenericArg;
}

/**
 * Move function: `hash_type_and_key`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::dynamic_field`
 *
 * @typeParam K - Type parameter 0
 * @param tx - The transaction object
 * @param parent - Function parameter
 * @param k - Function parameter
 */
export function hashTypeAndKey(
  tx: Transaction,
  typeArg: string,
  args: HashTypeAndKeyArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::dynamic_field::hash_type_and_key`,
    typeArguments: [typeArg],
    arguments: [
      pure(tx, args.parent, `address`),
      generic(tx, `${typeArg}`, args.k),
    ],
  });
}
