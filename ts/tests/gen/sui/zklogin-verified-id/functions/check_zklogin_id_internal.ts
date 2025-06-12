import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface CheckZkloginIdInternalArgs {
  address: string | TransactionArgument;
  keyClaimName: Array<number | TransactionArgument> | TransactionArgument;
  keyClaimValue: Array<number | TransactionArgument> | TransactionArgument;
  issuer: Array<number | TransactionArgument> | TransactionArgument;
  audience: Array<number | TransactionArgument> | TransactionArgument;
  pinHash: bigint | TransactionArgument;
}

/**
 * Move function: `check_zklogin_id_internal`
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
export function checkZkloginIdInternal(
  tx: Transaction,
  args: CheckZkloginIdInternalArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::zklogin_verified_id::check_zklogin_id_internal`,
    arguments: [
      pure(tx, args.address, `address`),
      pure(tx, args.keyClaimName, `vector<u8>`),
      pure(tx, args.keyClaimValue, `vector<u8>`),
      pure(tx, args.issuer, `vector<u8>`),
      pure(tx, args.audience, `vector<u8>`),
      pure(tx, args.pinHash, `u256`),
    ],
  });
}
