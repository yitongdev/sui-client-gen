import { GenericArg, generic, obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface UpgradeArgs {
  self: TransactionObjectInput;
  newVersion: bigint | TransactionArgument;
  newValue: GenericArg;
  cap: TransactionObjectInput;
}

/**
 * Move function: `upgrade`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::versioned`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param newVersion - Function parameter
 * @param newValue - Function parameter
 * @param cap - Function parameter
 */
export function upgrade(tx: Transaction, typeArg: string, args: UpgradeArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::versioned::upgrade`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.self),
      pure(tx, args.newVersion, `u64`),
      generic(tx, `${typeArg}`, args.newValue),
      obj(tx, args.cap),
    ],
  });
}
