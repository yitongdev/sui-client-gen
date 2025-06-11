import { obj, pure } from "../../../_framework/util.js";
import { Option } from "../../../move-stdlib-chain/option/structs/index.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface WithdrawArgs {
  kiosk: TransactionObjectInput;
  kioskOwnerCap: TransactionObjectInput;
  option: bigint | TransactionArgument | TransactionArgument | null;
}

/**
 * Move function: `withdraw`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @param tx - The transaction object
 * @param kiosk - Function parameter
 * @param kioskOwnerCap - Function parameter
 * @param option - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function withdraw(
  tx: Transaction,
  args: WithdrawArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::withdraw`,
    arguments: [
      obj(tx, args.kiosk),
      obj(tx, args.kioskOwnerCap),
      pure(tx, args.option, `${Option.$typeName}<u64>`),
    ],
  });
}
