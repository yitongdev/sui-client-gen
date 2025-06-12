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

export function isMintEvent(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::lending_market::MintEvent`;
}

export interface MintEventFields {
  lendingMarketId: ToField<"address">;
  coinType: ToField<TypeName>;
  reserveId: ToField<"address">;
  liquidityAmount: ToField<"u64">;
  ctokenAmount: ToField<"u64">;
}

export type MintEventReified = Reified<MintEvent, MintEventFields>;

/**
 * Move struct: `MintEvent`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market`
 */
export class MintEvent implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::lending_market::MintEvent`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = MintEvent.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::lending_market::MintEvent`;
  readonly $typeArgs: [];
  readonly $isPhantom = MintEvent.$isPhantom;

  readonly lendingMarketId: ToField<"address">;
  readonly coinType: ToField<TypeName>;
  readonly reserveId: ToField<"address">;
  readonly liquidityAmount: ToField<"u64">;
  readonly ctokenAmount: ToField<"u64">;

  private constructor(typeArgs: [], fields: MintEventFields) {
    this.$fullTypeName = composeSuiType(
      MintEvent.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::lending_market::MintEvent`;
    this.$typeArgs = typeArgs;

    this.lendingMarketId = fields.lendingMarketId;
    this.coinType = fields.coinType;
    this.reserveId = fields.reserveId;
    this.liquidityAmount = fields.liquidityAmount;
    this.ctokenAmount = fields.ctokenAmount;
  }

  static reified(): MintEventReified {
    return {
      typeName: MintEvent.$typeName,
      fullTypeName: composeSuiType(
        MintEvent.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::lending_market::MintEvent`,
      typeArgs: [] as [],
      isPhantom: MintEvent.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => MintEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => MintEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => MintEvent.fromBcs(data),
      bcs: MintEvent.bcs,
      fromJSONField: (field: any) => MintEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => MintEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => MintEvent.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => MintEvent.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => MintEvent.fetch(client, id),
      new: (fields: MintEventFields) => {
        return new MintEvent([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return MintEvent.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<MintEvent>> {
    return phantom(MintEvent.reified());
  }
  static get p() {
    return MintEvent.phantom();
  }

  static get bcs() {
    return bcs.struct("MintEvent", {
      lending_market_id: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      coin_type: TypeName.bcs,
      reserve_id: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      liquidity_amount: bcs.u64(),
      ctoken_amount: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): MintEvent {
    return MintEvent.reified().new({
      lendingMarketId: decodeFromFields("address", fields.lending_market_id),
      coinType: decodeFromFields(TypeName.reified(), fields.coin_type),
      reserveId: decodeFromFields("address", fields.reserve_id),
      liquidityAmount: decodeFromFields("u64", fields.liquidity_amount),
      ctokenAmount: decodeFromFields("u64", fields.ctoken_amount),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): MintEvent {
    if (!isMintEvent(item.type)) {
      throw new Error("not a MintEvent type");
    }

    return MintEvent.reified().new({
      lendingMarketId: decodeFromFieldsWithTypes("address", item.fields.lending_market_id),
      coinType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.coin_type),
      reserveId: decodeFromFieldsWithTypes("address", item.fields.reserve_id),
      liquidityAmount: decodeFromFieldsWithTypes("u64", item.fields.liquidity_amount),
      ctokenAmount: decodeFromFieldsWithTypes("u64", item.fields.ctoken_amount),
    });
  }

  static fromBcs(data: Uint8Array): MintEvent {
    return MintEvent.fromFields(MintEvent.bcs.parse(data));
  }

  toJSONField() {
    return {
      lendingMarketId: this.lendingMarketId,
      coinType: this.coinType.toJSONField(),
      reserveId: this.reserveId,
      liquidityAmount: this.liquidityAmount.toString(),
      ctokenAmount: this.ctokenAmount.toString(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): MintEvent {
    return MintEvent.reified().new({
      lendingMarketId: decodeFromJSONField("address", field.lendingMarketId),
      coinType: decodeFromJSONField(TypeName.reified(), field.coinType),
      reserveId: decodeFromJSONField("address", field.reserveId),
      liquidityAmount: decodeFromJSONField("u64", field.liquidityAmount),
      ctokenAmount: decodeFromJSONField("u64", field.ctokenAmount),
    });
  }

  static fromJSON(json: Record<string, any>): MintEvent {
    if (json.$typeName !== MintEvent.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return MintEvent.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): MintEvent {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isMintEvent(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a MintEvent object`);
    }
    return MintEvent.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): MintEvent {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isMintEvent(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a MintEvent object`);
      }

      return MintEvent.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return MintEvent.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<MintEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching MintEvent object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isMintEvent(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a MintEvent object`);
    }

    return MintEvent.fromSuiObjectData(res.data);
  }
}
