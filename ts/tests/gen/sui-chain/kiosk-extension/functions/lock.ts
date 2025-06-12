import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface LockArgs {
  t0: GenericArg;
  kiosk: TransactionObjectInput;
  t1: GenericArg;
  transferPolicy: TransactionObjectInput;
}

/**
 * Move function: `lock`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk_extension`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param t0 - Function parameter
 * @param kiosk - Function parameter
 * @param t1 - Function parameter
 * @param transferPolicy - Function parameter
 */
export function lock(
  tx: Transaction,
  typeArgs: [string, string],
  args: LockArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk_extension::lock`,
    typeArguments: typeArgs,
    arguments: [
      generic(tx, `${typeArgs[0]}`, args.t0),
      obj(tx, args.kiosk),
      generic(tx, `${typeArgs[1]}`, args.t1),
      obj(tx, args.transferPolicy),
    ],
  });
}
