import { String } from "../../../_dependencies/source/0x1/string/structs/index.js";
import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

export interface EditArgs {
  self: TransactionObjectInput;
  name: string | TransactionArgument;
  value: string | TransactionArgument;
}

/**
 * Move function: `edit`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::display`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param name - Function parameter
 * @param value - Function parameter
 */
export function edit(tx: Transaction, typeArg: string, args: EditArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::display::edit`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.self),
      pure(tx, args.name, `${String.$typeName}`),
      pure(tx, args.value, `${String.$typeName}`),
    ],
  });
}
