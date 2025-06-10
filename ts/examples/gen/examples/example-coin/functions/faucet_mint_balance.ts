import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `faucet_mint_balance`
 * Module: `8b699fdce543505aeb290ee1b6b5d20fcaa8e8b1a5fc137a8b3facdfa2902209::example_coin`
 *
 * @param tx - The transaction object
 * @param faucet - Function parameter
 */
export function faucetMintBalance(
  tx: Transaction,
  faucet: TransactionObjectInput,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::example_coin::faucet_mint_balance`,
    arguments: [obj(tx, faucet)],
  });
}
