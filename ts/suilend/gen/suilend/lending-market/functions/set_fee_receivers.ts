import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface SetFeeReceiversArgs {
  lendingMarketOwnerCap: TransactionObjectInput;
  lendingMarket: TransactionObjectInput;
  vecAddress: Array<string | TransactionArgument> | TransactionArgument;
  vecU64: Array<bigint | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `set_fee_receivers`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param lendingMarketOwnerCap - Function parameter
 * @param lendingMarket - Function parameter
 * @param vecAddress - Function parameter
 * @param vecU64 - Function parameter
 */
export function setFeeReceivers(
  tx: Transaction,
  typeArg: string,
  args: SetFeeReceiversArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::lending_market::set_fee_receivers`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.lendingMarketOwnerCap),
      obj(tx, args.lendingMarket),
      pure(tx, args.vecAddress, `vector<address>`),
      pure(tx, args.vecU64, `vector<u64>`),
    ],
  });
}
