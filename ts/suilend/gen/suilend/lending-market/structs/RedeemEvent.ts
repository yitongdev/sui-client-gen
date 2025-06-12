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
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64, fromHex, toHex } from "@mysten/sui/utils";

export function isRedeemEvent(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::lending_market::RedeemEvent`;
}

export interface RedeemEventFields {
  lendingMarketId: ToField<"address">;
  coinType: ToField<TypeName>;
  reserveId: ToField<"address">;
  ctokenAmount: ToField<"u64">;
  liquidityAmount: ToField<"u64">;
}

export type RedeemEventReified = Reified<RedeemEvent, RedeemEventFields>;

/**
 * Move struct: `RedeemEvent`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market`
 */
export class RedeemEvent implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::lending_market::RedeemEvent`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = RedeemEvent.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::lending_market::RedeemEvent`;
  readonly $typeArgs: [];
  readonly $isPhantom = RedeemEvent.$isPhantom;

  readonly lendingMarketId: ToField<"address">;
  readonly coinType: ToField<TypeName>;
  readonly reserveId: ToField<"address">;
  readonly ctokenAmount: ToField<"u64">;
  readonly liquidityAmount: ToField<"u64">;

  private constructor(typeArgs: [], fields: RedeemEventFields) {
    this.$fullTypeName = composeSuiType(
      RedeemEvent.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::lending_market::RedeemEvent`;
    this.$typeArgs = typeArgs;

    this.lendingMarketId = fields.lendingMarketId;
    this.coinType = fields.coinType;
    this.reserveId = fields.reserveId;
    this.ctokenAmount = fields.ctokenAmount;
    this.liquidityAmount = fields.liquidityAmount;
  }

  static reified(): RedeemEventReified {
    return {
      typeName: RedeemEvent.$typeName,
      fullTypeName: composeSuiType(
        RedeemEvent.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::lending_market::RedeemEvent`,
      typeArgs: [] as [],
      isPhantom: RedeemEvent.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => RedeemEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => RedeemEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => RedeemEvent.fromBcs(data),
      bcs: RedeemEvent.bcs,
      fromJSONField: (field: any) => RedeemEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => RedeemEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => RedeemEvent.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => RedeemEvent.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => RedeemEvent.fetch(client, id),
      new: (fields: RedeemEventFields) => {
        return new RedeemEvent([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return RedeemEvent.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<RedeemEvent>> {
    return phantom(RedeemEvent.reified());
  }
  static get p() {
    return RedeemEvent.phantom();
  }

  static get bcs() {
    return bcs.struct("RedeemEvent", {
      lending_market_id: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      coin_type: TypeName.bcs,
      reserve_id: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      ctoken_amount: bcs.u64(),
      liquidity_amount: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): RedeemEvent {
    return RedeemEvent.reified().new({
      lendingMarketId: decodeFromFields("address", fields.lending_market_id),
      coinType: decodeFromFields(TypeName.reified(), fields.coin_type),
      reserveId: decodeFromFields("address", fields.reserve_id),
      ctokenAmount: decodeFromFields("u64", fields.ctoken_amount),
      liquidityAmount: decodeFromFields("u64", fields.liquidity_amount),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): RedeemEvent {
    if (!isRedeemEvent(item.type)) {
      throw new Error("not a RedeemEvent type");
    }

    return RedeemEvent.reified().new({
      lendingMarketId: decodeFromFieldsWithTypes("address", item.fields.lending_market_id),
      coinType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.coin_type),
      reserveId: decodeFromFieldsWithTypes("address", item.fields.reserve_id),
      ctokenAmount: decodeFromFieldsWithTypes("u64", item.fields.ctoken_amount),
      liquidityAmount: decodeFromFieldsWithTypes("u64", item.fields.liquidity_amount),
    });
  }

  static fromBcs(data: Uint8Array): RedeemEvent {
    return RedeemEvent.fromFields(RedeemEvent.bcs.parse(data));
  }

  toJSONField() {
    return {
      lendingMarketId: this.lendingMarketId,
      coinType: this.coinType.toJSONField(),
      reserveId: this.reserveId,
      ctokenAmount: this.ctokenAmount.toString(),
      liquidityAmount: this.liquidityAmount.toString(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): RedeemEvent {
    return RedeemEvent.reified().new({
      lendingMarketId: decodeFromJSONField("address", field.lendingMarketId),
      coinType: decodeFromJSONField(TypeName.reified(), field.coinType),
      reserveId: decodeFromJSONField("address", field.reserveId),
      ctokenAmount: decodeFromJSONField("u64", field.ctokenAmount),
      liquidityAmount: decodeFromJSONField("u64", field.liquidityAmount),
    });
  }

  static fromJSON(json: Record<string, any>): RedeemEvent {
    if (json.$typeName !== RedeemEvent.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return RedeemEvent.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): RedeemEvent {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isRedeemEvent(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a RedeemEvent object`);
    }
    return RedeemEvent.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): RedeemEvent {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isRedeemEvent(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a RedeemEvent object`);
      }

      return RedeemEvent.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return RedeemEvent.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<RedeemEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching RedeemEvent object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isRedeemEvent(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a RedeemEvent object`);
    }

    return RedeemEvent.fromSuiObjectData(res.data);
  }
}
