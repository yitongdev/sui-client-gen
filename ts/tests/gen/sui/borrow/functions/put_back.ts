import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface PutBackArgs {
  self: TransactionObjectInput;
  value: GenericArg;
  borrow: TransactionObjectInput;
}

/**
 * Move function: `put_back`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::borrow`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param value - Function parameter
 * @param borrow - Function parameter
 */
export function putBack(
  tx: Transaction,
  typeArg: string,
  args: PutBackArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::borrow::put_back`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.self),
      generic(tx, `${typeArg}`, args.value),
      obj(tx, args.borrow),
    ],
  });
}
