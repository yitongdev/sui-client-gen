import { GenericArg, generic, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface HashTypeAndKeyArgs {
  address: string | TransactionArgument;
  t0: GenericArg;
}

/**
 * Move function: `hash_type_and_key`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::dynamic_field`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param address - Function parameter
 * @param t0 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function hashTypeAndKey(
  tx: Transaction,
  typeArg: string,
  args: HashTypeAndKeyArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::dynamic_field::hash_type_and_key`,
    typeArguments: [typeArg],
    arguments: [
      pure(tx, args.address, `address`),
      generic(tx, `${typeArg}`, args.t0),
    ],
  });
}
