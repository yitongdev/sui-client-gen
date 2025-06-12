import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `faucet_mint`
 * Module: `8b699fdce543505aeb290ee1b6b5d20fcaa8e8b1a5fc137a8b3facdfa2902209::example_coin`
 *
 * @param tx - The transaction object
 * @param faucet - Function parameter
 * @param ctx - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function faucetMint(tx: Transaction, faucet: TransactionObjectInput): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::example_coin::faucet_mint`,
    arguments: [obj(tx, faucet)],
  });
}
