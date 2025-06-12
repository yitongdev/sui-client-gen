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

export function isRepayEvent(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::lending_market::RepayEvent`;
}

export interface RepayEventFields {
  lendingMarketId: ToField<"address">;
  coinType: ToField<TypeName>;
  reserveId: ToField<"address">;
  obligationId: ToField<"address">;
  liquidityAmount: ToField<"u64">;
}

export type RepayEventReified = Reified<RepayEvent, RepayEventFields>;

/**
 * Move struct: `RepayEvent`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market`
 */
export class RepayEvent implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::lending_market::RepayEvent`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = RepayEvent.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::lending_market::RepayEvent`;
  readonly $typeArgs: [];
  readonly $isPhantom = RepayEvent.$isPhantom;

  readonly lendingMarketId: ToField<"address">;
  readonly coinType: ToField<TypeName>;
  readonly reserveId: ToField<"address">;
  readonly obligationId: ToField<"address">;
  readonly liquidityAmount: ToField<"u64">;

  private constructor(typeArgs: [], fields: RepayEventFields) {
    this.$fullTypeName = composeSuiType(
      RepayEvent.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::lending_market::RepayEvent`;
    this.$typeArgs = typeArgs;

    this.lendingMarketId = fields.lendingMarketId;
    this.coinType = fields.coinType;
    this.reserveId = fields.reserveId;
    this.obligationId = fields.obligationId;
    this.liquidityAmount = fields.liquidityAmount;
  }

  static reified(): RepayEventReified {
    return {
      typeName: RepayEvent.$typeName,
      fullTypeName: composeSuiType(
        RepayEvent.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::lending_market::RepayEvent`,
      typeArgs: [] as [],
      isPhantom: RepayEvent.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => RepayEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => RepayEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => RepayEvent.fromBcs(data),
      bcs: RepayEvent.bcs,
      fromJSONField: (field: any) => RepayEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => RepayEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => RepayEvent.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => RepayEvent.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => RepayEvent.fetch(client, id),
      new: (fields: RepayEventFields) => {
        return new RepayEvent([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return RepayEvent.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<RepayEvent>> {
    return phantom(RepayEvent.reified());
  }
  static get p() {
    return RepayEvent.phantom();
  }

  static get bcs() {
    return bcs.struct("RepayEvent", {
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

  static fromFields(fields: Record<string, any>): RepayEvent {
    return RepayEvent.reified().new({
      lendingMarketId: decodeFromFields("address", fields.lending_market_id),
      coinType: decodeFromFields(TypeName.reified(), fields.coin_type),
      reserveId: decodeFromFields("address", fields.reserve_id),
      obligationId: decodeFromFields("address", fields.obligation_id),
      liquidityAmount: decodeFromFields("u64", fields.liquidity_amount),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): RepayEvent {
    if (!isRepayEvent(item.type)) {
      throw new Error("not a RepayEvent type");
    }

    return RepayEvent.reified().new({
      lendingMarketId: decodeFromFieldsWithTypes("address", item.fields.lending_market_id),
      coinType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.coin_type),
      reserveId: decodeFromFieldsWithTypes("address", item.fields.reserve_id),
      obligationId: decodeFromFieldsWithTypes("address", item.fields.obligation_id),
      liquidityAmount: decodeFromFieldsWithTypes("u64", item.fields.liquidity_amount),
    });
  }

  static fromBcs(data: Uint8Array): RepayEvent {
    return RepayEvent.fromFields(RepayEvent.bcs.parse(data));
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

  static fromJSONField(field: any): RepayEvent {
    return RepayEvent.reified().new({
      lendingMarketId: decodeFromJSONField("address", field.lendingMarketId),
      coinType: decodeFromJSONField(TypeName.reified(), field.coinType),
      reserveId: decodeFromJSONField("address", field.reserveId),
      obligationId: decodeFromJSONField("address", field.obligationId),
      liquidityAmount: decodeFromJSONField("u64", field.liquidityAmount),
    });
  }

  static fromJSON(json: Record<string, any>): RepayEvent {
    if (json.$typeName !== RepayEvent.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return RepayEvent.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): RepayEvent {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isRepayEvent(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a RepayEvent object`);
    }
    return RepayEvent.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): RepayEvent {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isRepayEvent(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a RepayEvent object`);
      }

      return RepayEvent.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return RepayEvent.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<RepayEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching RepayEvent object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isRepayEvent(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a RepayEvent object`);
    }

    return RepayEvent.fromSuiObjectData(res.data);
  }
}
