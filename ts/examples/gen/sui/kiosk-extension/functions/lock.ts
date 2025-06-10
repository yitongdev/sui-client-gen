import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export interface LockArgs {
  ext: GenericArg;
  self: TransactionObjectInput;
  item: GenericArg;
  policy: TransactionObjectInput;
}

/**
 * Move function: `lock`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk_extension`
 *
 * @typeParam Ext - Type parameter 0
 * @typeParam T - Type parameter 1
 * @param tx - The transaction object
 * @param ext - Function parameter
 * @param self - Function parameter
 * @param item - Function parameter
 * @param policy - Function parameter
 */
export function lock(
  tx: Transaction,
  typeArgs: [string, string],
  args: LockArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk_extension::lock`,
    typeArguments: typeArgs,
    arguments: [
      generic(tx, `${typeArgs[0]}`, args.ext),
      obj(tx, args.self),
      generic(tx, `${typeArgs[1]}`, args.item),
      obj(tx, args.policy),
    ],
  });
}
