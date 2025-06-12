import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface SetArgs {
  reserveConfigBuilder: TransactionObjectInput;
  t0: GenericArg;
  t1: GenericArg;
}

/**
 * Move function: `set`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::reserve_config`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param reserveConfigBuilder - Function parameter
 * @param t0 - Function parameter
 * @param t1 - Function parameter
 */
export function set(tx: Transaction, typeArgs: [string, string], args: SetArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::reserve_config::set`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.reserveConfigBuilder),
      generic(tx, `${typeArgs[0]}`, args.t0),
      generic(tx, `${typeArgs[1]}`, args.t1),
    ],
  });
}
