import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

export interface SubArgs {
  type: number | TransactionArgument;
  e1: TransactionObjectInput;
  e2: TransactionObjectInput;
}

/**
 * Move function: `sub`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::group_ops`
 *
 * @typeParam G - Type parameter 0
 * @param tx - The transaction object
 * @param type - Function parameter
 * @param e1 - Function parameter
 * @param e2 - Function parameter
 */
export function sub(tx: Transaction, typeArg: string, args: SubArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::group_ops::sub`,
    typeArguments: [typeArg],
    arguments: [pure(tx, args.type, `u8`), obj(tx, args.e1), obj(tx, args.e2)],
  });
}
