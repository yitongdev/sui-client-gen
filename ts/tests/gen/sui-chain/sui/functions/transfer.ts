import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface TransferArgs {
  coin: TransactionObjectInput;
  address: string | TransactionArgument;
}

/**
 * Move function: `transfer`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::sui`
 *
 * @param tx - The transaction object
 * @param coin - Function parameter
 * @param address - Function parameter
 */
export function transfer(tx: Transaction, args: TransferArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::sui::transfer`,
    arguments: [obj(tx, args.coin), pure(tx, args.address, `address`)],
  });
}
