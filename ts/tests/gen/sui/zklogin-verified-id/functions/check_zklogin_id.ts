import { pure } from "../../../_framework/util.js";
import { String } from "../../../move-stdlib/string/structs/index.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface CheckZkloginIdArgs {
  address: string | TransactionArgument;
  keyClaimName: string | TransactionArgument;
  keyClaimValue: string | TransactionArgument;
  issuer: string | TransactionArgument;
  audience: string | TransactionArgument;
  pinHash: bigint | TransactionArgument;
}

/**
 * Move function: `check_zklogin_id`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::zklogin_verified_id`
 *
 * @param tx - The transaction object
 * @param address - Function parameter
 * @param keyClaimName - Function parameter
 * @param keyClaimValue - Function parameter
 * @param issuer - Function parameter
 * @param audience - Function parameter
 * @param pinHash - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function checkZkloginId(
  tx: Transaction,
  args: CheckZkloginIdArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::zklogin_verified_id::check_zklogin_id`,
    arguments: [
      pure(tx, args.address, `address`),
      pure(tx, args.keyClaimName, `${String.$typeName}`),
      pure(tx, args.keyClaimValue, `${String.$typeName}`),
      pure(tx, args.issuer, `${String.$typeName}`),
      pure(tx, args.audience, `${String.$typeName}`),
      pure(tx, args.pinHash, `u256`),
    ],
  });
}
