import { pure, vector } from "../../../_framework/util.js";
import { Coin } from "../../coin/structs/index.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

export interface JoinVecAndTransferArgs {
  coins: Array<TransactionObjectInput> | TransactionArgument;
  receiver: string | TransactionArgument;
}

/**
 * Move function: `join_vec_and_transfer`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::pay`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param coins - Function parameter
 * @param receiver - Function parameter
 */
export function joinVecAndTransfer(
  tx: Transaction,
  typeArg: string,
  args: JoinVecAndTransferArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::pay::join_vec_and_transfer`,
    typeArguments: [typeArg],
    arguments: [
      vector(tx, `${Coin.$typeName}<${typeArg}>`, args.coins),
      pure(tx, args.receiver, `address`),
    ],
  });
}
