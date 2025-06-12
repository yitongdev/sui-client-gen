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

export function isWithdrawEvent(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::lending_market::WithdrawEvent`;
}

export interface WithdrawEventFields {
  lendingMarketId: ToField<"address">;
  coinType: ToField<TypeName>;
  reserveId: ToField<"address">;
  obligationId: ToField<"address">;
  ctokenAmount: ToField<"u64">;
}

export type WithdrawEventReified = Reified<WithdrawEvent, WithdrawEventFields>;

/**
 * Move struct: `WithdrawEvent`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market`
 */
export class WithdrawEvent implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::lending_market::WithdrawEvent`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = WithdrawEvent.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::lending_market::WithdrawEvent`;
  readonly $typeArgs: [];
  readonly $isPhantom = WithdrawEvent.$isPhantom;

  readonly lendingMarketId: ToField<"address">;
  readonly coinType: ToField<TypeName>;
  readonly reserveId: ToField<"address">;
  readonly obligationId: ToField<"address">;
  readonly ctokenAmount: ToField<"u64">;

  private constructor(typeArgs: [], fields: WithdrawEventFields) {
    this.$fullTypeName = composeSuiType(
      WithdrawEvent.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::lending_market::WithdrawEvent`;
    this.$typeArgs = typeArgs;

    this.lendingMarketId = fields.lendingMarketId;
    this.coinType = fields.coinType;
    this.reserveId = fields.reserveId;
    this.obligationId = fields.obligationId;
    this.ctokenAmount = fields.ctokenAmount;
  }

  static reified(): WithdrawEventReified {
    return {
      typeName: WithdrawEvent.$typeName,
      fullTypeName: composeSuiType(
        WithdrawEvent.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::lending_market::WithdrawEvent`,
      typeArgs: [] as [],
      isPhantom: WithdrawEvent.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => WithdrawEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => WithdrawEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => WithdrawEvent.fromBcs(data),
      bcs: WithdrawEvent.bcs,
      fromJSONField: (field: any) => WithdrawEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => WithdrawEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => WithdrawEvent.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => WithdrawEvent.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => WithdrawEvent.fetch(client, id),
      new: (fields: WithdrawEventFields) => {
        return new WithdrawEvent([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return WithdrawEvent.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<WithdrawEvent>> {
    return phantom(WithdrawEvent.reified());
  }
  static get p() {
    return WithdrawEvent.phantom();
  }

  static get bcs() {
    return bcs.struct("WithdrawEvent", {
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
      ctoken_amount: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): WithdrawEvent {
    return WithdrawEvent.reified().new({
      lendingMarketId: decodeFromFields("address", fields.lending_market_id),
      coinType: decodeFromFields(TypeName.reified(), fields.coin_type),
      reserveId: decodeFromFields("address", fields.reserve_id),
      obligationId: decodeFromFields("address", fields.obligation_id),
      ctokenAmount: decodeFromFields("u64", fields.ctoken_amount),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): WithdrawEvent {
    if (!isWithdrawEvent(item.type)) {
      throw new Error("not a WithdrawEvent type");
    }

    return WithdrawEvent.reified().new({
      lendingMarketId: decodeFromFieldsWithTypes("address", item.fields.lending_market_id),
      coinType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.coin_type),
      reserveId: decodeFromFieldsWithTypes("address", item.fields.reserve_id),
      obligationId: decodeFromFieldsWithTypes("address", item.fields.obligation_id),
      ctokenAmount: decodeFromFieldsWithTypes("u64", item.fields.ctoken_amount),
    });
  }

  static fromBcs(data: Uint8Array): WithdrawEvent {
    return WithdrawEvent.fromFields(WithdrawEvent.bcs.parse(data));
  }

  toJSONField() {
    return {
      lendingMarketId: this.lendingMarketId,
      coinType: this.coinType.toJSONField(),
      reserveId: this.reserveId,
      obligationId: this.obligationId,
      ctokenAmount: this.ctokenAmount.toString(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): WithdrawEvent {
    return WithdrawEvent.reified().new({
      lendingMarketId: decodeFromJSONField("address", field.lendingMarketId),
      coinType: decodeFromJSONField(TypeName.reified(), field.coinType),
      reserveId: decodeFromJSONField("address", field.reserveId),
      obligationId: decodeFromJSONField("address", field.obligationId),
      ctokenAmount: decodeFromJSONField("u64", field.ctokenAmount),
    });
  }

  static fromJSON(json: Record<string, any>): WithdrawEvent {
    if (json.$typeName !== WithdrawEvent.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return WithdrawEvent.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): WithdrawEvent {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isWithdrawEvent(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a WithdrawEvent object`);
    }
    return WithdrawEvent.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): WithdrawEvent {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isWithdrawEvent(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a WithdrawEvent object`);
      }

      return WithdrawEvent.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return WithdrawEvent.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<WithdrawEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching WithdrawEvent object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isWithdrawEvent(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a WithdrawEvent object`);
    }

    return WithdrawEvent.fromSuiObjectData(res.data);
  }
}
