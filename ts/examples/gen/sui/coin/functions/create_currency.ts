import { GenericArg, generic, option, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Url } from "../../url/structs/index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

export interface CreateCurrencyArgs {
  witness: GenericArg;
  decimals: number | TransactionArgument;
  symbol: Array<number | TransactionArgument> | TransactionArgument;
  name: Array<number | TransactionArgument> | TransactionArgument;
  description: Array<number | TransactionArgument> | TransactionArgument;
  iconUrl: TransactionObjectInput | TransactionArgument | null;
}

/**
 * Move function: `create_currency`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param witness - Function parameter
 * @param decimals - Function parameter
 * @param symbol - Function parameter
 * @param name - Function parameter
 * @param description - Function parameter
 * @param iconUrl - Function parameter
 * @param ctx - Function parameter
 */
export function createCurrency(
  tx: Transaction,
  typeArg: string,
  args: CreateCurrencyArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::coin::create_currency`,
    typeArguments: [typeArg],
    arguments: [
      generic(tx, `${typeArg}`, args.witness),
      pure(tx, args.decimals, `u8`),
      pure(tx, args.symbol, `vector<u8>`),
      pure(tx, args.name, `vector<u8>`),
      pure(tx, args.description, `vector<u8>`),
      option(tx, `${Url.$typeName}`, args.iconUrl),
    ],
  });
}
