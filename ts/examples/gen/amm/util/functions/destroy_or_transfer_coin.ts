import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

export interface DestroyOrTransferCoinArgs {
  coin: TransactionObjectInput;
  recipient: string | TransactionArgument;
}

/**
 * Move function: `destroy_or_transfer_coin`
 * Module: `f917eb03d02b9221b10276064b2c10296276cb43feb24aac35113a272dd691c7::util`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param coin - Function parameter
 * @param recipient - Function parameter
 */
export function destroyOrTransferCoin(
  tx: Transaction,
  typeArg: string,
  args: DestroyOrTransferCoinArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::util::destroy_or_transfer_coin`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.coin), pure(tx, args.recipient, `address`)],
  });
}
