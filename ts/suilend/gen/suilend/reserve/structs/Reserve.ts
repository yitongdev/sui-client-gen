import { TypeName } from "../../../_dependencies/onchain/0x1/type-name/structs/index.js";
import { ID, UID } from "../../../_dependencies/onchain/0x2/object/structs/index.js";
import { PriceIdentifier } from "../../../_dependencies/onchain/0x8d97f1cd6ac663735be08d1d2b6d02a159e711586461306ce60a2b7a6a565a9e/price-identifier/structs/index.js";
import {
  PhantomReified,
  PhantomToTypeStr,
  PhantomTypeArgument,
  Reified,
  StructClass,
  ToField,
  ToPhantomTypeArgument,
  ToTypeStr,
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  phantom,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { Cell } from "../../cell/structs/index.js";
import { PKG_V1 } from "../../constants.js";
import { Decimal } from "../../decimal/structs/index.js";
import { PoolRewardManager } from "../../liquidity-mining/structs/index.js";
import { ReserveConfig } from "../../reserve-config/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isReserve(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V1}::reserve::Reserve` + "<");
}

export interface ReserveFields<T0 extends PhantomTypeArgument> {
  id: ToField<UID>;
  lendingMarketId: ToField<ID>;
  arrayIndex: ToField<"u64">;
  coinType: ToField<TypeName>;
  config: ToField<Cell<ReserveConfig>>;
  mintDecimals: ToField<"u8">;
  priceIdentifier: ToField<PriceIdentifier>;
  price: ToField<Decimal>;
  smoothedPrice: ToField<Decimal>;
  priceLastUpdateTimestampS: ToField<"u64">;
  availableAmount: ToField<"u64">;
  ctokenSupply: ToField<"u64">;
  borrowedAmount: ToField<Decimal>;
  cumulativeBorrowRate: ToField<Decimal>;
  interestLastUpdateTimestampS: ToField<"u64">;
  unclaimedSpreadFees: ToField<Decimal>;
  attributedBorrowValue: ToField<Decimal>;
  depositsPoolRewardManager: ToField<PoolRewardManager>;
  borrowsPoolRewardManager: ToField<PoolRewardManager>;
}

export type ReserveReified<T0 extends PhantomTypeArgument> = Reified<
  Reserve<T0>,
  ReserveFields<T0>
>;

/**
 * Move struct: `Reserve`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::reserve`
 *
 * @typeParam T0 - Type parameter 0 (phantom)
 */
export class Reserve<T0 extends PhantomTypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::reserve::Reserve`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = Reserve.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::reserve::Reserve<${PhantomToTypeStr<T0>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T0>];
  readonly $isPhantom = Reserve.$isPhantom;

  readonly id: ToField<UID>;
  readonly lendingMarketId: ToField<ID>;
  readonly arrayIndex: ToField<"u64">;
  readonly coinType: ToField<TypeName>;
  readonly config: ToField<Cell<ReserveConfig>>;
  readonly mintDecimals: ToField<"u8">;
  readonly priceIdentifier: ToField<PriceIdentifier>;
  readonly price: ToField<Decimal>;
  readonly smoothedPrice: ToField<Decimal>;
  readonly priceLastUpdateTimestampS: ToField<"u64">;
  readonly availableAmount: ToField<"u64">;
  readonly ctokenSupply: ToField<"u64">;
  readonly borrowedAmount: ToField<Decimal>;
  readonly cumulativeBorrowRate: ToField<Decimal>;
  readonly interestLastUpdateTimestampS: ToField<"u64">;
  readonly unclaimedSpreadFees: ToField<Decimal>;
  readonly attributedBorrowValue: ToField<Decimal>;
  readonly depositsPoolRewardManager: ToField<PoolRewardManager>;
  readonly borrowsPoolRewardManager: ToField<PoolRewardManager>;

  private constructor(typeArgs: [PhantomToTypeStr<T0>], fields: ReserveFields<T0>) {
    this.$fullTypeName = composeSuiType(
      Reserve.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::reserve::Reserve<${PhantomToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.lendingMarketId = fields.lendingMarketId;
    this.arrayIndex = fields.arrayIndex;
    this.coinType = fields.coinType;
    this.config = fields.config;
    this.mintDecimals = fields.mintDecimals;
    this.priceIdentifier = fields.priceIdentifier;
    this.price = fields.price;
    this.smoothedPrice = fields.smoothedPrice;
    this.priceLastUpdateTimestampS = fields.priceLastUpdateTimestampS;
    this.availableAmount = fields.availableAmount;
    this.ctokenSupply = fields.ctokenSupply;
    this.borrowedAmount = fields.borrowedAmount;
    this.cumulativeBorrowRate = fields.cumulativeBorrowRate;
    this.interestLastUpdateTimestampS = fields.interestLastUpdateTimestampS;
    this.unclaimedSpreadFees = fields.unclaimedSpreadFees;
    this.attributedBorrowValue = fields.attributedBorrowValue;
    this.depositsPoolRewardManager = fields.depositsPoolRewardManager;
    this.borrowsPoolRewardManager = fields.borrowsPoolRewardManager;
  }

  static reified<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): ReserveReified<ToPhantomTypeArgument<T0>> {
    return {
      typeName: Reserve.$typeName,
      fullTypeName: composeSuiType(
        Reserve.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V1}::reserve::Reserve<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>],
      isPhantom: Reserve.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) => Reserve.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => Reserve.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => Reserve.fromBcs(T0, data),
      bcs: Reserve.bcs,
      fromJSONField: (field: any) => Reserve.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) => Reserve.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) => Reserve.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) => Reserve.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) => Reserve.fetch(client, T0, id),
      new: (fields: ReserveFields<ToPhantomTypeArgument<T0>>) => {
        return new Reserve([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Reserve.reified;
  }

  static phantom<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<Reserve<ToPhantomTypeArgument<T0>>>> {
    return phantom(Reserve.reified(T0));
  }
  static get p() {
    return Reserve.phantom;
  }

  static get bcs() {
    return bcs.struct("Reserve", {
      id: UID.bcs,
      lending_market_id: ID.bcs,
      array_index: bcs.u64(),
      coin_type: TypeName.bcs,
      config: Cell.bcs(ReserveConfig.bcs),
      mint_decimals: bcs.u8(),
      price_identifier: PriceIdentifier.bcs,
      price: Decimal.bcs,
      smoothed_price: Decimal.bcs,
      price_last_update_timestamp_s: bcs.u64(),
      available_amount: bcs.u64(),
      ctoken_supply: bcs.u64(),
      borrowed_amount: Decimal.bcs,
      cumulative_borrow_rate: Decimal.bcs,
      interest_last_update_timestamp_s: bcs.u64(),
      unclaimed_spread_fees: Decimal.bcs,
      attributed_borrow_value: Decimal.bcs,
      deposits_pool_reward_manager: PoolRewardManager.bcs,
      borrows_pool_reward_manager: PoolRewardManager.bcs,
    });
  }

  static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): Reserve<ToPhantomTypeArgument<T0>> {
    return Reserve.reified(typeArg).new({
      id: decodeFromFields(UID.reified(), fields.id),
      lendingMarketId: decodeFromFields(ID.reified(), fields.lending_market_id),
      arrayIndex: decodeFromFields("u64", fields.array_index),
      coinType: decodeFromFields(TypeName.reified(), fields.coin_type),
      config: decodeFromFields(Cell.reified(ReserveConfig.reified()), fields.config),
      mintDecimals: decodeFromFields("u8", fields.mint_decimals),
      priceIdentifier: decodeFromFields(PriceIdentifier.reified(), fields.price_identifier),
      price: decodeFromFields(Decimal.reified(), fields.price),
      smoothedPrice: decodeFromFields(Decimal.reified(), fields.smoothed_price),
      priceLastUpdateTimestampS: decodeFromFields("u64", fields.price_last_update_timestamp_s),
      availableAmount: decodeFromFields("u64", fields.available_amount),
      ctokenSupply: decodeFromFields("u64", fields.ctoken_supply),
      borrowedAmount: decodeFromFields(Decimal.reified(), fields.borrowed_amount),
      cumulativeBorrowRate: decodeFromFields(Decimal.reified(), fields.cumulative_borrow_rate),
      interestLastUpdateTimestampS: decodeFromFields(
        "u64",
        fields.interest_last_update_timestamp_s,
      ),
      unclaimedSpreadFees: decodeFromFields(Decimal.reified(), fields.unclaimed_spread_fees),
      attributedBorrowValue: decodeFromFields(Decimal.reified(), fields.attributed_borrow_value),
      depositsPoolRewardManager: decodeFromFields(
        PoolRewardManager.reified(),
        fields.deposits_pool_reward_manager,
      ),
      borrowsPoolRewardManager: decodeFromFields(
        PoolRewardManager.reified(),
        fields.borrows_pool_reward_manager,
      ),
    });
  }

  static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): Reserve<ToPhantomTypeArgument<T0>> {
    if (!isReserve(item.type)) {
      throw new Error("not a Reserve type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return Reserve.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      lendingMarketId: decodeFromFieldsWithTypes(ID.reified(), item.fields.lending_market_id),
      arrayIndex: decodeFromFieldsWithTypes("u64", item.fields.array_index),
      coinType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.coin_type),
      config: decodeFromFieldsWithTypes(Cell.reified(ReserveConfig.reified()), item.fields.config),
      mintDecimals: decodeFromFieldsWithTypes("u8", item.fields.mint_decimals),
      priceIdentifier: decodeFromFieldsWithTypes(
        PriceIdentifier.reified(),
        item.fields.price_identifier,
      ),
      price: decodeFromFieldsWithTypes(Decimal.reified(), item.fields.price),
      smoothedPrice: decodeFromFieldsWithTypes(Decimal.reified(), item.fields.smoothed_price),
      priceLastUpdateTimestampS: decodeFromFieldsWithTypes(
        "u64",
        item.fields.price_last_update_timestamp_s,
      ),
      availableAmount: decodeFromFieldsWithTypes("u64", item.fields.available_amount),
      ctokenSupply: decodeFromFieldsWithTypes("u64", item.fields.ctoken_supply),
      borrowedAmount: decodeFromFieldsWithTypes(Decimal.reified(), item.fields.borrowed_amount),
      cumulativeBorrowRate: decodeFromFieldsWithTypes(
        Decimal.reified(),
        item.fields.cumulative_borrow_rate,
      ),
      interestLastUpdateTimestampS: decodeFromFieldsWithTypes(
        "u64",
        item.fields.interest_last_update_timestamp_s,
      ),
      unclaimedSpreadFees: decodeFromFieldsWithTypes(
        Decimal.reified(),
        item.fields.unclaimed_spread_fees,
      ),
      attributedBorrowValue: decodeFromFieldsWithTypes(
        Decimal.reified(),
        item.fields.attributed_borrow_value,
      ),
      depositsPoolRewardManager: decodeFromFieldsWithTypes(
        PoolRewardManager.reified(),
        item.fields.deposits_pool_reward_manager,
      ),
      borrowsPoolRewardManager: decodeFromFieldsWithTypes(
        PoolRewardManager.reified(),
        item.fields.borrows_pool_reward_manager,
      ),
    });
  }

  static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: Uint8Array,
  ): Reserve<ToPhantomTypeArgument<T0>> {
    return Reserve.fromFields(typeArg, Reserve.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      lendingMarketId: this.lendingMarketId,
      arrayIndex: this.arrayIndex.toString(),
      coinType: this.coinType.toJSONField(),
      config: this.config.toJSONField(),
      mintDecimals: this.mintDecimals,
      priceIdentifier: this.priceIdentifier.toJSONField(),
      price: this.price.toJSONField(),
      smoothedPrice: this.smoothedPrice.toJSONField(),
      priceLastUpdateTimestampS: this.priceLastUpdateTimestampS.toString(),
      availableAmount: this.availableAmount.toString(),
      ctokenSupply: this.ctokenSupply.toString(),
      borrowedAmount: this.borrowedAmount.toJSONField(),
      cumulativeBorrowRate: this.cumulativeBorrowRate.toJSONField(),
      interestLastUpdateTimestampS: this.interestLastUpdateTimestampS.toString(),
      unclaimedSpreadFees: this.unclaimedSpreadFees.toJSONField(),
      attributedBorrowValue: this.attributedBorrowValue.toJSONField(),
      depositsPoolRewardManager: this.depositsPoolRewardManager.toJSONField(),
      borrowsPoolRewardManager: this.borrowsPoolRewardManager.toJSONField(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    field: any,
  ): Reserve<ToPhantomTypeArgument<T0>> {
    return Reserve.reified(typeArg).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      lendingMarketId: decodeFromJSONField(ID.reified(), field.lendingMarketId),
      arrayIndex: decodeFromJSONField("u64", field.arrayIndex),
      coinType: decodeFromJSONField(TypeName.reified(), field.coinType),
      config: decodeFromJSONField(Cell.reified(ReserveConfig.reified()), field.config),
      mintDecimals: decodeFromJSONField("u8", field.mintDecimals),
      priceIdentifier: decodeFromJSONField(PriceIdentifier.reified(), field.priceIdentifier),
      price: decodeFromJSONField(Decimal.reified(), field.price),
      smoothedPrice: decodeFromJSONField(Decimal.reified(), field.smoothedPrice),
      priceLastUpdateTimestampS: decodeFromJSONField("u64", field.priceLastUpdateTimestampS),
      availableAmount: decodeFromJSONField("u64", field.availableAmount),
      ctokenSupply: decodeFromJSONField("u64", field.ctokenSupply),
      borrowedAmount: decodeFromJSONField(Decimal.reified(), field.borrowedAmount),
      cumulativeBorrowRate: decodeFromJSONField(Decimal.reified(), field.cumulativeBorrowRate),
      interestLastUpdateTimestampS: decodeFromJSONField("u64", field.interestLastUpdateTimestampS),
      unclaimedSpreadFees: decodeFromJSONField(Decimal.reified(), field.unclaimedSpreadFees),
      attributedBorrowValue: decodeFromJSONField(Decimal.reified(), field.attributedBorrowValue),
      depositsPoolRewardManager: decodeFromJSONField(
        PoolRewardManager.reified(),
        field.depositsPoolRewardManager,
      ),
      borrowsPoolRewardManager: decodeFromJSONField(
        PoolRewardManager.reified(),
        field.borrowsPoolRewardManager,
      ),
    });
  }

  static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    json: Record<string, any>,
  ): Reserve<ToPhantomTypeArgument<T0>> {
    if (json.$typeName !== Reserve.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(Reserve.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return Reserve.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    content: SuiParsedData,
  ): Reserve<ToPhantomTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isReserve(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a Reserve object`);
    }
    return Reserve.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: SuiObjectData,
  ): Reserve<ToPhantomTypeArgument<T0>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isReserve(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a Reserve object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 1) {
        throw new Error(
          `type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`,
        );
      }
      const gotTypeArg = gotTypeArgs[0] as string;
      const compressedGotType = compressSuiType(gotTypeArg);
      const expectedTypeArg = compressSuiType(extractType(typeArg));
      if (compressedGotType !== expectedTypeArg) {
        throw new Error(
          `type argument mismatch: expected '${expectedTypeArg}' but got '${compressedGotType}'`,
        );
      }

      return Reserve.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Reserve.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<Reserve<ToPhantomTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching Reserve object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isReserve(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a Reserve object`);
    }

    return Reserve.fromSuiObjectData(typeArg, res.data);
  }
}
