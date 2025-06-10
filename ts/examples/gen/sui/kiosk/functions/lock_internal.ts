import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export interface LockInternalArgs {
  self: TransactionObjectInput;
  item: GenericArg;
}

/**
 * Move function: `lock_internal`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param item - Function parameter
 */
export function lockInternal(
  tx: Transaction,
  typeArg: string,
  args: LockInternalArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::lock_internal`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.self), generic(tx, `${typeArg}`, args.item)],
  });
}
