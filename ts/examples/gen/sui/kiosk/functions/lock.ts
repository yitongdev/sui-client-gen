import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export interface LockArgs {
  self: TransactionObjectInput;
  cap: TransactionObjectInput;
  policy: TransactionObjectInput;
  item: GenericArg;
}

/**
 * Move function: `lock`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param cap - Function parameter
 * @param policy - Function parameter
 * @param item - Function parameter
 */
export function lock(tx: Transaction, typeArg: string, args: LockArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::lock`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.self),
      obj(tx, args.cap),
      obj(tx, args.policy),
      generic(tx, `${typeArg}`, args.item),
    ],
  });
}
