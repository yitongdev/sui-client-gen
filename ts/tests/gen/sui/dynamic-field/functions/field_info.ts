import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface FieldInfoArgs {
  object: TransactionObjectInput;
  name: GenericArg;
}

/**
 * Move function: `field_info`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::dynamic_field`
 *
 * @typeParam Name - Type parameter 0
 * @param tx - The transaction object
 * @param object - Function parameter
 * @param name - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function fieldInfo(
  tx: Transaction,
  typeArg: string,
  args: FieldInfoArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::dynamic_field::field_info`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.object), generic(tx, `${typeArg}`, args.name)],
  });
}
