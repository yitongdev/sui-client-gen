import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface AddArgs {
  object: TransactionObjectInput;
  name: GenericArg;
  value: GenericArg;
}

/**
 * Move function: `add`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::dynamic_field`
 *
 * @typeParam Name - Type parameter 0
 * @typeParam Value - Type parameter 1
 * @param tx - The transaction object
 * @param object - Function parameter
 * @param name - Function parameter
 * @param value - Function parameter
 */
export function add(
  tx: Transaction,
  typeArgs: [string, string],
  args: AddArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::dynamic_field::add`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.object),
      generic(tx, `${typeArgs[0]}`, args.name),
      generic(tx, `${typeArgs[1]}`, args.value),
    ],
  });
}
