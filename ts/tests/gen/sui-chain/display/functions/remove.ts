import { obj, pure } from "../../../_framework/util.js";
import { String } from "../../../move-stdlib-chain/string/structs/index.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface RemoveArgs {
  display: TransactionObjectInput;
  string: string | TransactionArgument;
}

/**
 * Move function: `remove`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::display`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param display - Function parameter
 * @param string - Function parameter
 */
export function remove(tx: Transaction, typeArg: string, args: RemoveArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::display::remove`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.display), pure(tx, args.string, `${String.$typeName}`)],
  });
}
