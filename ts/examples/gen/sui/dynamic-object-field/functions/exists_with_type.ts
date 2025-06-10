import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export interface ExistsWithTypeArgs {
  object: TransactionObjectInput;
  name: GenericArg;
}

/**
 * Move function: `exists_with_type`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::dynamic_object_field`
 *
 * @typeParam Name - Type parameter 0
 * @typeParam Value - Type parameter 1
 * @param tx - The transaction object
 * @param object - Function parameter
 * @param name - Function parameter
 */
export function existsWithType(
  tx: Transaction,
  typeArgs: [string, string],
  args: ExistsWithTypeArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::dynamic_object_field::exists_with_type`,
    typeArguments: typeArgs,
    arguments: [obj(tx, args.object), generic(tx, `${typeArgs[0]}`, args.name)],
  });
}
