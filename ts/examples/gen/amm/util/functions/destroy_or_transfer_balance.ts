import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

export interface DestroyOrTransferBalanceArgs {
  balance: TransactionObjectInput;
  recipient: string | TransactionArgument;
}

/**
 * Move function: `destroy_or_transfer_balance`
 * Module: `f917eb03d02b9221b10276064b2c10296276cb43feb24aac35113a272dd691c7::util`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param balance - Function parameter
 * @param recipient - Function parameter
 * @param ctx - Function parameter
 */
export function destroyOrTransferBalance(
  tx: Transaction,
  typeArg: string,
  args: DestroyOrTransferBalanceArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::util::destroy_or_transfer_balance`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.balance), pure(tx, args.recipient, `address`)],
  });
}
