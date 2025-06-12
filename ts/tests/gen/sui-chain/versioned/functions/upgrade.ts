import { GenericArg, generic, obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface UpgradeArgs {
  versioned: TransactionObjectInput;
  u64: bigint | TransactionArgument;
  t0: GenericArg;
  versionChangeCap: TransactionObjectInput;
}

/**
 * Move function: `upgrade`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::versioned`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param versioned - Function parameter
 * @param u64 - Function parameter
 * @param t0 - Function parameter
 * @param versionChangeCap - Function parameter
 */
export function upgrade(tx: Transaction, typeArg: string, args: UpgradeArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::versioned::upgrade`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.versioned),
      pure(tx, args.u64, `u64`),
      generic(tx, `${typeArg}`, args.t0),
      obj(tx, args.versionChangeCap),
    ],
  });
}
