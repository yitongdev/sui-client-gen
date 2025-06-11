import { String } from "../../../_dependencies/source/0x1/ascii/structs/index.js";
import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface UpdateSymbolArgs {
  treasury: TransactionObjectInput;
  metadata: TransactionObjectInput;
  symbol: string | TransactionArgument;
}

/**
 * Move function: `update_symbol`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param treasury - Function parameter
 * @param metadata - Function parameter
 * @param symbol - Function parameter
 */
export function updateSymbol(
  tx: Transaction,
  typeArg: string,
  args: UpdateSymbolArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::coin::update_symbol`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.treasury),
      obj(tx, args.metadata),
      pure(tx, args.symbol, `${String.$typeName}`),
    ],
  });
}
