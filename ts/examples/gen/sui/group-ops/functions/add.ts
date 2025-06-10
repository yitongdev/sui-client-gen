import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

export interface AddArgs {
  type: number | TransactionArgument;
  e1: TransactionObjectInput;
  e2: TransactionObjectInput;
}

/**
 * Move function: `add`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::group_ops`
 *
 * @typeParam G - Type parameter 0
 * @param tx - The transaction object
 * @param type - Function parameter
 * @param e1 - Function parameter
 * @param e2 - Function parameter
 */
export function add(tx: Transaction, typeArg: string, args: AddArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::group_ops::add`,
    typeArguments: [typeArg],
    arguments: [pure(tx, args.type, `u8`), obj(tx, args.e1), obj(tx, args.e2)],
  });
}
