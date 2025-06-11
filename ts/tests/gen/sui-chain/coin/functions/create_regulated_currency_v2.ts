import { GenericArg, generic, option, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Url } from "../../url/structs/index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface CreateRegulatedCurrencyV2Args {
  t0: GenericArg;
  u8: number | TransactionArgument;
  vecU81: Array<number | TransactionArgument> | TransactionArgument;
  vecU82: Array<number | TransactionArgument> | TransactionArgument;
  vecU83: Array<number | TransactionArgument> | TransactionArgument;
  option: TransactionObjectInput | TransactionArgument | null;
  bool: boolean | TransactionArgument;
}

/**
 * Move function: `create_regulated_currency_v2`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param t0 - Function parameter
 * @param u8 - Function parameter
 * @param vecU81 - Function parameter
 * @param vecU82 - Function parameter
 * @param vecU83 - Function parameter
 * @param option - Function parameter
 * @param bool - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function createRegulatedCurrencyV2(
  tx: Transaction,
  typeArg: string,
  args: CreateRegulatedCurrencyV2Args,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::coin::create_regulated_currency_v2`,
    typeArguments: [typeArg],
    arguments: [
      generic(tx, `${typeArg}`, args.t0),
      pure(tx, args.u8, `u8`),
      pure(tx, args.vecU81, `vector<u8>`),
      pure(tx, args.vecU82, `vector<u8>`),
      pure(tx, args.vecU83, `vector<u8>`),
      option(tx, `${Url.$typeName}`, args.option),
      pure(tx, args.bool, `bool`),
    ],
  });
}
