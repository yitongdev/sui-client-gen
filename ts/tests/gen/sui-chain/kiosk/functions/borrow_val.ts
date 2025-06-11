import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { ID } from "../../object/structs/index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface BorrowValArgs {
  kiosk: TransactionObjectInput;
  kioskOwnerCap: TransactionObjectInput;
  id: string | TransactionArgument;
}

/**
 * Move function: `borrow_val`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param kiosk - Function parameter
 * @param kioskOwnerCap - Function parameter
 * @param id - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function borrowVal(
  tx: Transaction,
  typeArg: string,
  args: BorrowValArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::borrow_val`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.kiosk),
      obj(tx, args.kioskOwnerCap),
      pure(tx, args.id, `${ID.$typeName}`),
    ],
  });
}
