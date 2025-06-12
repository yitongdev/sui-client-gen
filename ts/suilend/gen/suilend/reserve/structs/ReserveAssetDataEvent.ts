import { TypeName } from "../../../_dependencies/onchain/0x1/type-name/structs/index.js";
import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  phantom,
} from "../../../_framework/reified.js";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../../_framework/util.js";
import { PKG_V1 } from "../../constants.js";
import { Decimal } from "../../decimal/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64, fromHex, toHex } from "@mysten/sui/utils";

export function isReserveAssetDataEvent(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::reserve::ReserveAssetDataEvent`;
}

export interface ReserveAssetDataEventFields {
  lendingMarketId: ToField<"address">;
  coinType: ToField<TypeName>;
  reserveId: ToField<"address">;
  availableAmount: ToField<Decimal>;
  supplyAmount: ToField<Decimal>;
  borrowedAmount: ToField<Decimal>;
  availableAmountUsdEstimate: ToField<Decimal>;
  supplyAmountUsdEstimate: ToField<Decimal>;
  borrowedAmountUsdEstimate: ToField<Decimal>;
  borrowApr: ToField<Decimal>;
  supplyApr: ToField<Decimal>;
  ctokenSupply: ToField<"u64">;
  cumulativeBorrowRate: ToField<Decimal>;
  price: ToField<Decimal>;
  smoothedPrice: ToField<Decimal>;
  priceLastUpdateTimestampS: ToField<"u64">;
}

export type ReserveAssetDataEventReified = Reified<
  ReserveAssetDataEvent,
  ReserveAssetDataEventFields
>;

/**
 * Move struct: `ReserveAssetDataEvent`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::reserve`
 */
export class ReserveAssetDataEvent implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::reserve::ReserveAssetDataEvent`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = ReserveAssetDataEvent.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::reserve::ReserveAssetDataEvent`;
  readonly $typeArgs: [];
  readonly $isPhantom = ReserveAssetDataEvent.$isPhantom;

  readonly lendingMarketId: ToField<"address">;
  readonly coinType: ToField<TypeName>;
  readonly reserveId: ToField<"address">;
  readonly availableAmount: ToField<Decimal>;
  readonly supplyAmount: ToField<Decimal>;
  readonly borrowedAmount: ToField<Decimal>;
  readonly availableAmountUsdEstimate: ToField<Decimal>;
  readonly supplyAmountUsdEstimate: ToField<Decimal>;
  readonly borrowedAmountUsdEstimate: ToField<Decimal>;
  readonly borrowApr: ToField<Decimal>;
  readonly supplyApr: ToField<Decimal>;
  readonly ctokenSupply: ToField<"u64">;
  readonly cumulativeBorrowRate: ToField<Decimal>;
  readonly price: ToField<Decimal>;
  readonly smoothedPrice: ToField<Decimal>;
  readonly priceLastUpdateTimestampS: ToField<"u64">;

  private constructor(typeArgs: [], fields: ReserveAssetDataEventFields) {
    this.$fullTypeName = composeSuiType(
      ReserveAssetDataEvent.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::reserve::ReserveAssetDataEvent`;
    this.$typeArgs = typeArgs;

    this.lendingMarketId = fields.lendingMarketId;
    this.coinType = fields.coinType;
    this.reserveId = fields.reserveId;
    this.availableAmount = fields.availableAmount;
    this.supplyAmount = fields.supplyAmount;
    this.borrowedAmount = fields.borrowedAmount;
    this.availableAmountUsdEstimate = fields.availableAmountUsdEstimate;
    this.supplyAmountUsdEstimate = fields.supplyAmountUsdEstimate;
    this.borrowedAmountUsdEstimate = fields.borrowedAmountUsdEstimate;
    this.borrowApr = fields.borrowApr;
    this.supplyApr = fields.supplyApr;
    this.ctokenSupply = fields.ctokenSupply;
    this.cumulativeBorrowRate = fields.cumulativeBorrowRate;
    this.price = fields.price;
    this.smoothedPrice = fields.smoothedPrice;
    this.priceLastUpdateTimestampS = fields.priceLastUpdateTimestampS;
  }

  static reified(): ReserveAssetDataEventReified {
    return {
      typeName: ReserveAssetDataEvent.$typeName,
      fullTypeName: composeSuiType(
        ReserveAssetDataEvent.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::reserve::ReserveAssetDataEvent`,
      typeArgs: [] as [],
      isPhantom: ReserveAssetDataEvent.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => ReserveAssetDataEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        ReserveAssetDataEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => ReserveAssetDataEvent.fromBcs(data),
      bcs: ReserveAssetDataEvent.bcs,
      fromJSONField: (field: any) => ReserveAssetDataEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => ReserveAssetDataEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        ReserveAssetDataEvent.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        ReserveAssetDataEvent.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => ReserveAssetDataEvent.fetch(client, id),
      new: (fields: ReserveAssetDataEventFields) => {
        return new ReserveAssetDataEvent([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return ReserveAssetDataEvent.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<ReserveAssetDataEvent>> {
    return phantom(ReserveAssetDataEvent.reified());
  }
  static get p() {
    return ReserveAssetDataEvent.phantom();
  }

  static get bcs() {
    return bcs.struct("ReserveAssetDataEvent", {
      lending_market_id: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      coin_type: TypeName.bcs,
      reserve_id: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      available_amount: Decimal.bcs,
      supply_amount: Decimal.bcs,
      borrowed_amount: Decimal.bcs,
      available_amount_usd_estimate: Decimal.bcs,
      supply_amount_usd_estimate: Decimal.bcs,
      borrowed_amount_usd_estimate: Decimal.bcs,
      borrow_apr: Decimal.bcs,
      supply_apr: Decimal.bcs,
      ctoken_supply: bcs.u64(),
      cumulative_borrow_rate: Decimal.bcs,
      price: Decimal.bcs,
      smoothed_price: Decimal.bcs,
      price_last_update_timestamp_s: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): ReserveAssetDataEvent {
    return ReserveAssetDataEvent.reified().new({
      lendingMarketId: decodeFromFields("address", fields.lending_market_id),
      coinType: decodeFromFields(TypeName.reified(), fields.coin_type),
      reserveId: decodeFromFields("address", fields.reserve_id),
      availableAmount: decodeFromFields(Decimal.reified(), fields.available_amount),
      supplyAmount: decodeFromFields(Decimal.reified(), fields.supply_amount),
      borrowedAmount: decodeFromFields(Decimal.reified(), fields.borrowed_amount),
      availableAmountUsdEstimate: decodeFromFields(
        Decimal.reified(),
        fields.available_amount_usd_estimate,
      ),
      supplyAmountUsdEstimate: decodeFromFields(
        Decimal.reified(),
        fields.supply_amount_usd_estimate,
      ),
      borrowedAmountUsdEstimate: decodeFromFields(
        Decimal.reified(),
        fields.borrowed_amount_usd_estimate,
      ),
      borrowApr: decodeFromFields(Decimal.reified(), fields.borrow_apr),
      supplyApr: decodeFromFields(Decimal.reified(), fields.supply_apr),
      ctokenSupply: decodeFromFields("u64", fields.ctoken_supply),
      cumulativeBorrowRate: decodeFromFields(Decimal.reified(), fields.cumulative_borrow_rate),
      price: decodeFromFields(Decimal.reified(), fields.price),
      smoothedPrice: decodeFromFields(Decimal.reified(), fields.smoothed_price),
      priceLastUpdateTimestampS: decodeFromFields("u64", fields.price_last_update_timestamp_s),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): ReserveAssetDataEvent {
    if (!isReserveAssetDataEvent(item.type)) {
      throw new Error("not a ReserveAssetDataEvent type");
    }

    return ReserveAssetDataEvent.reified().new({
      lendingMarketId: decodeFromFieldsWithTypes("address", item.fields.lending_market_id),
      coinType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.coin_type),
      reserveId: decodeFromFieldsWithTypes("address", item.fields.reserve_id),
      availableAmount: decodeFromFieldsWithTypes(Decimal.reified(), item.fields.available_amount),
      supplyAmount: decodeFromFieldsWithTypes(Decimal.reified(), item.fields.supply_amount),
      borrowedAmount: decodeFromFieldsWithTypes(Decimal.reified(), item.fields.borrowed_amount),
      availableAmountUsdEstimate: decodeFromFieldsWithTypes(
        Decimal.reified(),
        item.fields.available_amount_usd_estimate,
      ),
      supplyAmountUsdEstimate: decodeFromFieldsWithTypes(
        Decimal.reified(),
        item.fields.supply_amount_usd_estimate,
      ),
      borrowedAmountUsdEstimate: decodeFromFieldsWithTypes(
        Decimal.reified(),
        item.fields.borrowed_amount_usd_estimate,
      ),
      borrowApr: decodeFromFieldsWithTypes(Decimal.reified(), item.fields.borrow_apr),
      supplyApr: decodeFromFieldsWithTypes(Decimal.reified(), item.fields.supply_apr),
      ctokenSupply: decodeFromFieldsWithTypes("u64", item.fields.ctoken_supply),
      cumulativeBorrowRate: decodeFromFieldsWithTypes(
        Decimal.reified(),
        item.fields.cumulative_borrow_rate,
      ),
      price: decodeFromFieldsWithTypes(Decimal.reified(), item.fields.price),
      smoothedPrice: decodeFromFieldsWithTypes(Decimal.reified(), item.fields.smoothed_price),
      priceLastUpdateTimestampS: decodeFromFieldsWithTypes(
        "u64",
        item.fields.price_last_update_timestamp_s,
      ),
    });
  }

  static fromBcs(data: Uint8Array): ReserveAssetDataEvent {
    return ReserveAssetDataEvent.fromFields(ReserveAssetDataEvent.bcs.parse(data));
  }

  toJSONField() {
    return {
      lendingMarketId: this.lendingMarketId,
      coinType: this.coinType.toJSONField(),
      reserveId: this.reserveId,
      availableAmount: this.availableAmount.toJSONField(),
      supplyAmount: this.supplyAmount.toJSONField(),
      borrowedAmount: this.borrowedAmount.toJSONField(),
      availableAmountUsdEstimate: this.availableAmountUsdEstimate.toJSONField(),
      supplyAmountUsdEstimate: this.supplyAmountUsdEstimate.toJSONField(),
      borrowedAmountUsdEstimate: this.borrowedAmountUsdEstimate.toJSONField(),
      borrowApr: this.borrowApr.toJSONField(),
      supplyApr: this.supplyApr.toJSONField(),
      ctokenSupply: this.ctokenSupply.toString(),
      cumulativeBorrowRate: this.cumulativeBorrowRate.toJSONField(),
      price: this.price.toJSONField(),
      smoothedPrice: this.smoothedPrice.toJSONField(),
      priceLastUpdateTimestampS: this.priceLastUpdateTimestampS.toString(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): ReserveAssetDataEvent {
    return ReserveAssetDataEvent.reified().new({
      lendingMarketId: decodeFromJSONField("address", field.lendingMarketId),
      coinType: decodeFromJSONField(TypeName.reified(), field.coinType),
      reserveId: decodeFromJSONField("address", field.reserveId),
      availableAmount: decodeFromJSONField(Decimal.reified(), field.availableAmount),
      supplyAmount: decodeFromJSONField(Decimal.reified(), field.supplyAmount),
      borrowedAmount: decodeFromJSONField(Decimal.reified(), field.borrowedAmount),
      availableAmountUsdEstimate: decodeFromJSONField(
        Decimal.reified(),
        field.availableAmountUsdEstimate,
      ),
      supplyAmountUsdEstimate: decodeFromJSONField(
        Decimal.reified(),
        field.supplyAmountUsdEstimate,
      ),
      borrowedAmountUsdEstimate: decodeFromJSONField(
        Decimal.reified(),
        field.borrowedAmountUsdEstimate,
      ),
      borrowApr: decodeFromJSONField(Decimal.reified(), field.borrowApr),
      supplyApr: decodeFromJSONField(Decimal.reified(), field.supplyApr),
      ctokenSupply: decodeFromJSONField("u64", field.ctokenSupply),
      cumulativeBorrowRate: decodeFromJSONField(Decimal.reified(), field.cumulativeBorrowRate),
      price: decodeFromJSONField(Decimal.reified(), field.price),
      smoothedPrice: decodeFromJSONField(Decimal.reified(), field.smoothedPrice),
      priceLastUpdateTimestampS: decodeFromJSONField("u64", field.priceLastUpdateTimestampS),
    });
  }

  static fromJSON(json: Record<string, any>): ReserveAssetDataEvent {
    if (json.$typeName !== ReserveAssetDataEvent.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return ReserveAssetDataEvent.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): ReserveAssetDataEvent {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isReserveAssetDataEvent(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a ReserveAssetDataEvent object`,
      );
    }
    return ReserveAssetDataEvent.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): ReserveAssetDataEvent {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isReserveAssetDataEvent(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a ReserveAssetDataEvent object`);
      }

      return ReserveAssetDataEvent.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return ReserveAssetDataEvent.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<ReserveAssetDataEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching ReserveAssetDataEvent object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isReserveAssetDataEvent(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a ReserveAssetDataEvent object`);
    }

    return ReserveAssetDataEvent.fromSuiObjectData(res.data);
  }
}
