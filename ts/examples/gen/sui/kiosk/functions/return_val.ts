import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export interface ReturnValArgs {
  self: TransactionObjectInput;
  item: GenericArg;
  borrow: TransactionObjectInput;
}

/**
 * Move function: `return_val`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param item - Function parameter
 * @param borrow - Function parameter
 */
export function returnVal(
  tx: Transaction,
  typeArg: string,
  args: ReturnValArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::return_val`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.self),
      generic(tx, `${typeArg}`, args.item),
      obj(tx, args.borrow),
    ],
  });
}
