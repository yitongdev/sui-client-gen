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

export function isForgiveEvent(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::lending_market::ForgiveEvent`;
}

export interface ForgiveEventFields {
  lendingMarketId: ToField<"address">;
  coinType: ToField<TypeName>;
  reserveId: ToField<"address">;
  obligationId: ToField<"address">;
  liquidityAmount: ToField<"u64">;
}

export type ForgiveEventReified = Reified<ForgiveEvent, ForgiveEventFields>;

/**
 * Move struct: `ForgiveEvent`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market`
 */
export class ForgiveEvent implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::lending_market::ForgiveEvent`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = ForgiveEvent.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::lending_market::ForgiveEvent`;
  readonly $typeArgs: [];
  readonly $isPhantom = ForgiveEvent.$isPhantom;

  readonly lendingMarketId: ToField<"address">;
  readonly coinType: ToField<TypeName>;
  readonly reserveId: ToField<"address">;
  readonly obligationId: ToField<"address">;
  readonly liquidityAmount: ToField<"u64">;

  private constructor(typeArgs: [], fields: ForgiveEventFields) {
    this.$fullTypeName = composeSuiType(
      ForgiveEvent.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::lending_market::ForgiveEvent`;
    this.$typeArgs = typeArgs;

    this.lendingMarketId = fields.lendingMarketId;
    this.coinType = fields.coinType;
    this.reserveId = fields.reserveId;
    this.obligationId = fields.obligationId;
    this.liquidityAmount = fields.liquidityAmount;
  }

  static reified(): ForgiveEventReified {
    return {
      typeName: ForgiveEvent.$typeName,
      fullTypeName: composeSuiType(
        ForgiveEvent.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::lending_market::ForgiveEvent`,
      typeArgs: [] as [],
      isPhantom: ForgiveEvent.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => ForgiveEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => ForgiveEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => ForgiveEvent.fromBcs(data),
      bcs: ForgiveEvent.bcs,
      fromJSONField: (field: any) => ForgiveEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => ForgiveEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => ForgiveEvent.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => ForgiveEvent.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => ForgiveEvent.fetch(client, id),
      new: (fields: ForgiveEventFields) => {
        return new ForgiveEvent([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return ForgiveEvent.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<ForgiveEvent>> {
    return phantom(ForgiveEvent.reified());
  }
  static get p() {
    return ForgiveEvent.phantom();
  }

  static get bcs() {
    return bcs.struct("ForgiveEvent", {
      lending_market_id: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      coin_type: TypeName.bcs,
      reserve_id: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      obligation_id: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      liquidity_amount: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): ForgiveEvent {
    return ForgiveEvent.reified().new({
      lendingMarketId: decodeFromFields("address", fields.lending_market_id),
      coinType: decodeFromFields(TypeName.reified(), fields.coin_type),
      reserveId: decodeFromFields("address", fields.reserve_id),
      obligationId: decodeFromFields("address", fields.obligation_id),
      liquidityAmount: decodeFromFields("u64", fields.liquidity_amount),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): ForgiveEvent {
    if (!isForgiveEvent(item.type)) {
      throw new Error("not a ForgiveEvent type");
    }

    return ForgiveEvent.reified().new({
      lendingMarketId: decodeFromFieldsWithTypes("address", item.fields.lending_market_id),
      coinType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.coin_type),
      reserveId: decodeFromFieldsWithTypes("address", item.fields.reserve_id),
      obligationId: decodeFromFieldsWithTypes("address", item.fields.obligation_id),
      liquidityAmount: decodeFromFieldsWithTypes("u64", item.fields.liquidity_amount),
    });
  }

  static fromBcs(data: Uint8Array): ForgiveEvent {
    return ForgiveEvent.fromFields(ForgiveEvent.bcs.parse(data));
  }

  toJSONField() {
    return {
      lendingMarketId: this.lendingMarketId,
      coinType: this.coinType.toJSONField(),
      reserveId: this.reserveId,
      obligationId: this.obligationId,
      liquidityAmount: this.liquidityAmount.toString(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): ForgiveEvent {
    return ForgiveEvent.reified().new({
      lendingMarketId: decodeFromJSONField("address", field.lendingMarketId),
      coinType: decodeFromJSONField(TypeName.reified(), field.coinType),
      reserveId: decodeFromJSONField("address", field.reserveId),
      obligationId: decodeFromJSONField("address", field.obligationId),
      liquidityAmount: decodeFromJSONField("u64", field.liquidityAmount),
    });
  }

  static fromJSON(json: Record<string, any>): ForgiveEvent {
    if (json.$typeName !== ForgiveEvent.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return ForgiveEvent.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): ForgiveEvent {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isForgiveEvent(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a ForgiveEvent object`);
    }
    return ForgiveEvent.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): ForgiveEvent {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isForgiveEvent(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a ForgiveEvent object`);
      }

      return ForgiveEvent.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return ForgiveEvent.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<ForgiveEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching ForgiveEvent object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isForgiveEvent(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a ForgiveEvent object`);
    }

    return ForgiveEvent.fromSuiObjectData(res.data);
  }
}
