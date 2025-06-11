import { obj, pure } from "../../../_framework/util.js";
import { String } from "../../../move-stdlib-chain/string/structs/index.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface NewWithFieldsArgs {
  publisher: TransactionObjectInput;
  vecString1: Array<string | TransactionArgument> | TransactionArgument;
  vecString2: Array<string | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `new_with_fields`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::display`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param publisher - Function parameter
 * @param vecString1 - Function parameter
 * @param vecString2 - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function newWithFields(
  tx: Transaction,
  typeArg: string,
  args: NewWithFieldsArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::display::new_with_fields`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.publisher),
      pure(tx, args.vecString1, `vector<${String.$typeName}>`),
      pure(tx, args.vecString2, `vector<${String.$typeName}>`),
    ],
  });
}
