import { obj, vector } from "../../../_framework/util.js";
import { Coin } from "../../coin/structs/index.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface JoinVecArgs {
  coin: TransactionObjectInput;
  vecCoin: Array<TransactionObjectInput> | TransactionArgument;
}

/**
 * Move function: `join_vec`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::pay`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param coin - Function parameter
 * @param vecCoin - Function parameter
 */
export function joinVec(tx: Transaction, typeArg: string, args: JoinVecArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::pay::join_vec`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.coin), vector(tx, `${Coin.$typeName}<${typeArg}>`, args.vecCoin)],
  });
}
