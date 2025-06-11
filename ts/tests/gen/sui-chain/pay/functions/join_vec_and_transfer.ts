import { pure, vector } from "../../../_framework/util.js";
import { Coin } from "../../coin/structs/index.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface JoinVecAndTransferArgs {
  vecCoin: Array<TransactionObjectInput> | TransactionArgument;
  address: string | TransactionArgument;
}

/**
 * Move function: `join_vec_and_transfer`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::pay`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param vecCoin - Function parameter
 * @param address - Function parameter
 */
export function joinVecAndTransfer(
  tx: Transaction,
  typeArg: string,
  args: JoinVecAndTransferArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::pay::join_vec_and_transfer`,
    typeArguments: [typeArg],
    arguments: [
      vector(tx, `${Coin.$typeName}<${typeArg}>`, args.vecCoin),
      pure(tx, args.address, `address`),
    ],
  });
}
